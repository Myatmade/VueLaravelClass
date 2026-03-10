<template>
  <button 
    @click="$emit('add')"
    :disabled="disabled"
    class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 disabled:opacity-50 disabled:hover:bg-indigo-500 transition-all duration-200"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
