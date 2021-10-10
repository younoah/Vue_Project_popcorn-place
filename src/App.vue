<template>
  <div class="app_inner">
    <div class="app_header">
      <Header />
    </div>
    <div class="movieresult_container">
      <RouterView />
    </div>
  </div>
</template>


<script>
import Header from '~/components/Header'


export default{
  components:{
    Header,
  },
  data(){
    return{
    }
  },
  computed:{
    storeMsg(){
      return this.$store.state.msg
    },
      storeMessage(){
      return this.$store.state.message.message //네임스페이스.모듈
    },
  },
  methods:{
    increaseCounts(){
      this.$store.commit('increaseCounts')
    },
    fetchTodo(){
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>
<style lang="scss" scoped>
.movieresult_container{
  height:130vh;
  background-color: black;
}
</style>