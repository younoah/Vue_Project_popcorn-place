<template>
  <footer>
    <ul v-if="totalResults">
      <span
        class="material-icons"
        @click="previousPage">
        keyboard_double_arrow_left
      </span>
      <li 
        v-for="i in range(startIndex, endIndex)"
        :key="i"
        :class="{ active: parseInt(page) === i }"
        @click="$router.push({
          name: 'MovieTitle', 
          params: {
            page: i
          }
        })">
        {{ i }}
      </li>
      <span
        class="material-icons"
        @click="nextPage">
        keyboard_double_arrow_right
      </span>
    </ul>
  </footer>
</template>

<script>
export default {
    props: {
        page: {
            type: String,
            default: '1'
        }
    },
    data(){
        return {
            pageCount: 10,
            currentPage: 1,
        }
    },
    computed: {
        totalResults(){
            return this.$store.state.movieList.totalResults
        },
        totalPageIndex(){
           return parseInt(this.totalResults / 10) + 1
        },
        startIndex(){
            return (this.currentPage-1) * this.pageCount + 1
        },
        endIndex(){
            let endIndex
            if(this.totalPageIndex > this.pageCount * this.currentPage){
                endIndex =  this.pageCount * this.currentPage
            }else{
                endIndex = this.totalPageIndex
            }
            return endIndex
        },
    },
    methods: {
        range(start, end){
            return Array(end - start + 1).fill().map((_, idx) => start+idx)
        },
        previousPage(){
            if(this.startIndex > 1){
                this.currentPage -= 1
            }
        },
        nextPage(){
            if(this.endIndex < this.totalPageIndex){
                this.currentPage += 1
            }
        },
    }
}
</script>

<style lang="scss" scoped>
footer {
    font-size: 20px;
    ul {
        display: flex;
        align-items: center;
        .material-icons{
           font-size: 30px;
           margin: 8px;
            padding: 5px;
            border-radius: 5px;
           &:hover {
                 background-color:$color-button-hover;
                 color: $color-font-hover;
            }
            &.active {
                background-color: $color-button-hover;
                color: $color-font-hover;
            }
        }
        li {
            width: 40px;
            text-align: center;
            margin: 8px;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            &:hover {
                 background-color:$color-button-hover;
                 color: $color-font-hover;
            }
            &.active {
                background-color: $color-button-hover;
                color: $color-font-hover;
            }
        }
    }
}
    
</style>