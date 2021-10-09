<template>
  <div class="search__form">
    <form
      @submit.prevent="submitTitle">
      <input
        ref="title"
        placeholder="영화 제목을 영문으로 입력해주세요~!" />
      <button class="material-icons">
        search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitTitle(){
      this.$router.push({
          name: 'MovieTitle', 
          params: {
            title: this.$refs.title.value,
            page: 1
          }
        })
      this.$refs.title.value = ''
    },
  }
  
}
</script>

<style lang="scss" scoped>

.search__form {
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 0 50px;
    input{
      height: 50px;
      border-radius: 5px;
      flex-grow: 1;
      font-size: 20px;

      &:focus {
        outline-color: $color-button-hover;
      }
      }
      .material-icons {
        height: 50px;
        padding: 0 10px;
        font-size: 30px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          color: $color-button-hover;
        }
      }
  }
    

    
</style>