import { ref, computed } from 'vue'

export function useForm<T extends Record<string, any>>(initialState: T) {
  const fields = ref({ ...initialState })
  const errors = ref<Record<keyof T, string | null>>({} as any)

  function validate(rules: Record<keyof T, (v: any) => string | null>) {
    let valid = true
    for (const key in rules) {
      const error = rules[key](fields.value[key])
      errors.value[key] = error
      if (error) valid = false
    }
    return valid
  }

  return { fields, errors, validate }
}
