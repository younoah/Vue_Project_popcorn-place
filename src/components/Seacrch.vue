<template>
  <h1>Search</h1>
  <div>
    <input
      v-model="searchValue"
      placeholder="검색할 영화 제목"
      @keyup.enter="onSubmit" />
    <!-- <img src="../images/main.jpg" /> -->
    <img src="../images/search_logo.svg" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchValue : '',
      // url : '~/images/search_logo.svg'
    }
  },
  methods:{
    onSubmit(){
      console.log(this.searchValue)
      this.searchValue = ''
    }
  }

}
</script>