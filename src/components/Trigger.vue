<template>
  <span
    v-show="needShow"
    ref="trigger"></span>
</template>
  
  <script>
  export default {
    props: {
    },

    emits: ['triggerIntersected'],

    data() {
      return {
        observer: null,
      };
    },
    computed:{
      needShow() {
        return this.$store.state.movie.searchWord;
      }
    },
    mounted() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach((entry)=> {
          this.handleIntersect(entry);
        });
      }, 
      {
        root:null,
        threshold: 0.5,
        rootMargin: '100px'
      });

      this.observer.observe(this.$refs.trigger);
    },

    unmounted() {
      this.observer.disconnect();
    },
    methods: {
      async handleIntersect(entry) {
        if (entry.isIntersecting) {
          await console.log('화면 끝!');
          await this.$emit('triggerIntersected');

          this.$store.dispatch('movie/searchMovies', {
            searchWord: this.$store.state.movie.searchWord,
            page: this.$store.state.movie.page
          });
        }
      }
    }
  };
  </script>

<style lang="scss" scoped>
span {
  width: 200px;
  height: 200px;
  background-color: lawngreen;
}
</style>