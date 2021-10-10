<template>
  <div class="inner--form">
    <form
      class="form"
      @submit.prevent="searchMovie">
      <label for="input"></label>
      <input
        id="input"
        ref="input"
        class="form--input"
        placeholder="세상엔 재밌는게 너무 많다..." /> 
      <button
        class="form--btn">
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
    methods: {
        searchMovie(){
            this.$store.dispatch('movie/searchMovies',{
                title: this.$refs.input.value
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color:rgb(165, 165, 165);
$border-raidus:4px;
.inner--form{
    display: flex;
    justify-content: center;
    padding-top: 16px;
    .form{
        min-width:800px;
        display: flex;
        .form--input{
            padding: 10px 5px;
            flex-grow: 1;
            flex-shrink: 0;
            border-radius: $border-raidus;
            border: 1px solid $border-color;
        }
        .form--btn{
            flex-shrink: 0;
            border-radius: $border-raidus;
            border: 1px solid $border-color;
            padding: 18px 32px;
            font-size: 16px;
            background-color: rgb(94, 199, 255);
            color: rgb(92, 92, 92);
        }
    }
}
</style>
