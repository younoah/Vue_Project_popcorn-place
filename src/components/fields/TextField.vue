<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      :valule="modelValue"
      type="text" 
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props : {
    title : {
      type : String, 
      default : ''
    },
    modelValue : {
      type : String,
      default : ''
    }
  },
}
</script>
