<template>
  <li class="movie-search-list-item" role="option" @mousedown="onMouseDown">
    <div class="movie-search-list-item__description">
      <h2
        class="movie-search-list-item__title"
        :class="{ 'movie-search-list-item__title--loading': thumbnailLoading }"
      >
        {{ title }}
      </h2>
      <time
        :datetime="year"
        class="movie-search-list-item__year"
        :class="{ 'movie-search-list-item__year--loading': thumbnailLoading }"
      >
        {{ year }}
      </time>
    </div>
    <div
      class="movie-search-list-item__thumbnail"
      :class="{
        'movie-search-list-item__thumbnail--loading': thumbnailLoading,
      }"
    >
      <Image :src="poster" :alt="alt" :onLoad="onLoad" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
.movie-search-list-item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem 1.5rem;
  color: colors.$brand-light;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: white;
    background-color: colors.$brand-dark;
  }

  &__description {
    order: 1;
    overflow: hidden;
  }

  &__title {
    @include typography.font-style(20);
    @include mixins.content-loading(colors.$brand-dark);

    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__year {
    @include typography.font-style(16);
    @include mixins.content-loading(colors.$brand-dark);
  }

  &__thumbnail {
    @include mixins.content-loading(colors.$brand-dark);

    flex-shrink: 0;
    order: 0;
    width: 7.2rem;
    height: 7.2rem;
    margin-right: 1.6rem;
    overflow: hidden;
    transform: scale(0.8);
    transition: transform 300ms ease-out;

    &:hover {
      transform: scale(1);
    }
  }
}
</style>

<script lang="ts">
import { useMovieData } from "@/composables";
import { defineComponent, ref } from "vue";
import Image from "@/components/common/Image.vue";

export const COMPONENT_NAME = "MovieSearchListItem";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    imdbID: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const thumbnailLoading = ref<boolean>(true);

    const { fetchMovieDetail } = useMovieData();

    const onLoad = () => {
      thumbnailLoading.value = false;
    };

    const onMouseDown = () => {
      fetchMovieDetail(props.imdbID);
    };

    return { thumbnailLoading, onLoad, onMouseDown };
  },
  components: {
    Image,
  },
});
</script>
