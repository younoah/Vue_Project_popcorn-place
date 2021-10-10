<template>
  <main class="main">
    <div class="main--inner">
      <Search />
      <RouterView />
    </div>
  </main>
</template>

<script>
import Search from '~/components/Search'

export default {
  components:{
    Search,
  }
    
}
</script>

<style lang="scss" scoped>
.main {
  background-color: gray;
  height: 100%;
}
</style>
