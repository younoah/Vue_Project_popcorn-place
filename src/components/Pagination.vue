<template>
  <div class="page-nation">
    <ul class="page">
      <li>
        <router-link to="/">
          &lt;
        </router-link>
      </li>
      <li>
        <router-link to="/page/1">
          1
        </router-link>
      </li>
      <li>
        <router-link to="/page/2">
          2
        </router-link>
      </li>
      <li>
        <router-link to="/page/3">
          3
        </router-link>
      </li>
      <li>
        <router-link to="/page/4">
          4
        </router-link>
      </li>
      <li>
        <router-link to="/page/5">
          5
        </router-link>
      </li>
      <li>
        <router-link to="/page/6">
          6
        </router-link>
      </li>
      <li>
        <router-link to="/page/7">
          7
        </router-link>
      </li>
      <li>
        <router-link to="/page/8">
          8
        </router-link>
      </li>
      <li>
        <router-link to="/page/9">
          9
        </router-link>
      </li>
      <li>
        <router-link to="/page/10">
          10
        </router-link>
      </li>
      <li>
        <router-link to="#">
          &gt;
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        totalResults(){
            return this.$store.state.movie.totalResults
        }
    },
}
</script>

<style lang="scss" scoped>
.page-nation{
    font-size:24px;
    .page{
        display: flex;
        list-style: none;
        justify-content: center;
        a{
            text-decoration: none;
            color: $color-pagiNation-font;
        }
        li{
            padding: 16px;
            &:hover{
                background-color: rgba(0, 0, 0, .1);
            }
        }
        
    }
}
</style>
