<template>
  <div class="movie-detail-card">
    <Spinner v-if="loading" />
    <div v-else-if="isDetailValid" class="movie-detail-card__container">
      <div
        class="movie-detail-card__contents"
        :key="movieDetailCardContentsKey + idx"
        v-for="(detail, idx) in data.value"
      >
        <div class="movie-detail-card__description">
          <h3
            class="movie-detail-card__title"
            :class="{ 'movie-detail-card__title--loading': thumbnailLoading }"
          >
            {{ detail.Title }}
          </h3>
          <span
            class="movie-detail-card__run-time"
            :class="{
              'movie-detail-card__run-time--loading': thumbnailLoading,
            }"
          >
            {{ detail.Runtime }}
          </span>
          <p
            class="movie-detail-card__plot"
            :class="{ 'movie-detail-card__plot--loading': thumbnailLoading }"
          >
            {{ detail.Plot }}
          </p>
        </div>
        <div
          class="movie-detail-card__thumbnail"
          :class="{ 'movie-detail-card__thumbnail--loading': thumbnailLoading }"
        >
          <Image :src="detail.Poster" :alt="detail.Title" @load="onImgLoad" />
          <time
            class="movie-detail-card__year"
            :datetime="detail.Year"
            :class="{ 'movie-detail-card__year--loading': thumbnailLoading }"
          >
            {{ detail.Year }}
          </time>
        </div>
      </div>
    </div>
    <NotFoundMessage
      v-else-if="isDetailNotFound"
      :message="'영화를 찾지 못했습니다. 다른 영화를 선택해주세요'"
    />
  </div>
</template>
<style lang="scss" scoped>
.movie-detail-card {
  max-width: 72rem;
  background: colors.$card-bg-color;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    animation-name: display-results;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  &__contents {
    display: flex;
  }

  &__description {
    order: 1;
    width: calc(100% - 30rem);
    padding: 2rem;
    transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  }

  &__title {
    @include mixins.content-loading(colors.$brand-dark);
    @include typography.font-style(20, white);

    margin: 0 0 1rem;
  }

  &__run-time {
    @include mixins.content-loading(colors.$brand-dark);
    @include typography.font-style(16, colors.$brand-dark);
  }

  &__plot {
    @include mixins.content-loading(colors.$brand-dark);
    @include typography.font-style(16);

    overflow: hidden;
  }

  &__thumbnail {
    @include mixins.content-loading(colors.$brand-dark);

    position: relative;
    order: 0;
    width: 30rem;
    height: 45rem;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background: rgba(0, 0, 0, 0.3);
      content: "";
    }
  }

  &__year {
    @include mixins.content-loading(colors.$brand-dark);
    @include typography.font-style(12, white);

    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    background: colors.$brand-dark;
    border-radius: 50%;
  }

  @media screen and (max-width: 72rem) {
    &__container,
    &__contents {
      flex-direction: column;
      width: 100%;
    }

    &__description,
    &__thumbnail {
      width: 100%;
    }
  }
}
</style>
<script lang="ts">
import { useMovieData } from "@/composables";
import { defineComponent, ref } from "vue";
import Spinner from "@/components/common/Spinner.vue";
import Image from "@/components/common/Image.vue";
import NotFoundMessage from "@/components/common/NotFoundMessage.vue";
import { useUniqueKey } from "@/composables";

const COMPONENT_NAME = "MovieDetailCard";

export default defineComponent({
  name: COMPONENT_NAME,
  setup() {
    const thumbnailLoading = ref<boolean>(true);

    const movieDetailCardContentsKey = useUniqueKey(
      `${COMPONENT_NAME}__contents`
    );

    const {
      detail: { loading, data, isDetailValid, isDetailNotFound },
    } = useMovieData();

    const onImgLoad = () => {
      thumbnailLoading.value = false;
    };

    return {
      thumbnailLoading,
      loading,
      data,
      isDetailValid,
      isDetailNotFound,
      movieDetailCardContentsKey,
      onImgLoad,
    };
  },
  components: {
    Spinner,
    Image,
    NotFoundMessage,
  },
});
</script>
