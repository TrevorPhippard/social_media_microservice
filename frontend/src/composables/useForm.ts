import { reactive, ref, computed, toRefs } from 'vue'

interface FormErrors {
  [key: string]: string | null
}

type ValidatorFn = (value: any) => string | null

interface UseFormOptions<T> {
  initialValues: T
  validators?: { [K in keyof T]?: ValidatorFn[] }
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
  const values = reactive({ ...options.initialValues })
  const errors = reactive<FormErrors>({})
  const isSubmitting = ref(false)

  // Validate a single field
  function validateField(field: keyof T) {
    const fieldValidators = options.validators?.[field] || []
    for (const validator of fieldValidators) {
      const error = validator(values[field])
      if (error) {
        errors[field as string] = error
        return false
      }
    }
    errors[field as string] = null
    return true
  }

  // Validate all fields
  function validateAll() {
    let isValid = true
    for (const key in values) {
      if (!validateField(key as keyof T)) isValid = false
    }
    return isValid
  }

  // Handle form submission
  async function handleSubmit(onSubmit: (values: T) => Promise<void> | void) {
    if (!validateAll()) return
    isSubmitting.value = true
    try {
      await onSubmit({ ...values })
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    ...toRefs(values),
    errors,
    isSubmitting,
    validateField,
    validateAll,
    handleSubmit,
  }
}
