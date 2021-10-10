<template>
  <li class="item">
    <a class="item__container">
      <div class="item__thumbnail">
        <img
          class="item__img"
          :src="imgPath"
          :alt="movie.Title" />
      </div>
      <div class="item__description">
        <div class="item__title">
          {{ movie.Title }}
        </div>
        <div class="item__year">
          {{ movie.Year }}
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imgNotFound: 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
    }
  },
  computed: {
    imgPath() {
      return this.movie.Poster !== 'N/A' ? this.movie.Poster : this.imgNotFound
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  


  &__container {
    position: relative;
    display: block;
    
    &:hover {

    }
  }

  &__thumbnail {
    background-color: black;
    height: 300px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__description {
    padding: 15px 0;
  }

  &__title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 5px;
  }
}
</style>
