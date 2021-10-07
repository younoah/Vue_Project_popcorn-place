<template>
  <div class="app__inner">
    <Search />
    <div class="app__page">
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '~/components/Search';
export default {  
  components: {
    Search
  }
};
</script>
<style lang="scss" scoped>
.app__inner{
  height: 100%;
  width: 100%
}  
</style>


