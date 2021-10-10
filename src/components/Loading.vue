<template>
  <div 
    v-if="isLoading"
    class="loading">
    <div class="loading--img">
      <img
        src="/loading.gif"
        alt="LoadingImg" />
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        isLoading(){
            return this.$store.state.movie.isLoading
        }
    }
}
</script>

<style lang="scss" scoped>
.loading{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    &--img{
        height: 100%;
        display: flex;
        justify-content: center; 
        align-items: center;
        img{
            border-radius: 40%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        }
    }
}
</style>
