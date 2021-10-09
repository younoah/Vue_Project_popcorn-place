<template>
  <header class="header">
    <div class="header__home">
      <input  
        type="text"
        placeholder="영화 제목 / 관련 키워드 입력"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="$emit('search')" />
      <button @click="$emit('search')">
        찾기
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'search'], 
};
</script>

<style scoped lang="scss">
.header__home {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0px;
  border-bottom: 1px solid;

  input {
    box-sizing: border-box;
    width: 50%;
    height: 50px;
    padding-left: 20px;

    font-size: 30px;
    outline: none;
  }
  
  button {
    width: 60px;
    height: 50px;

    cursor: pointer;
    
    border: {
      top: 1px solid;
      right: 1px solid;
      bottom: 1px solid;
      left: none;
    };
    background-color: white;
  }
}
</style>