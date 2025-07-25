<template>
  <div class="relative w-full">
    <span v-if="$slots.icon" class="absolute inset-y-0 left-3 flex items-center text-gray-400">
      <slot name="icon" />
    </span>

    <input
      :type="type"
      class="block w-full rounded-xl border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      :class="[
        iconLeft ? 'pl-10' : '',
        invalid
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300 focus:border-blue-500',
      ]"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :disabled="disabled"
      :readonly="readonly"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

const props = defineProps<{
  modelValue: string
  placeholder?: string
  type?: string
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
}>()

const iconLeft = !!useSlots().icon
</script>
