<template>
  <Seacrch @cnt="cnt" />

  <section>
    <div class="container">
      <div
        v-if="movieList.length > 0"
        class="row">
        <div
          v-for="movie in movieList"
          :key="movie.imdbID"
          class="col-12 col-sm-6 col-md-4 col-xl-3">
          <!-- 카드 영역 시작 -->
          <div
            class="card mb-3"
            style="max-width: 540px">
            <div class="row g-0 item">
              <div class="col-md-4">
                <img
                  :src="movie.Poster"
                  class="img-fluid rounded-start"
                  alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="card-title">
                    {{ movie.Title }}
                  </div>
                  <p class="card-text">
                    <small
                      class="text-muted">{{ movie.Type }} - {{ movie.Year }}</small>
                  </p>
                  <div>
                    <Modal :id="movie.imdbID">
                      <template #activator>
                        <button
                          type="button"
                          class="btn btn-outline-secondary">
                          more
                        </button>
                      </template>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 카드 영역 끝 -->
        </div>
        <!-- <button @click="next">
          more
        </button> -->
      </div>
      <div v-else>
        검색된 자료가 없습니다.
      </div>
    </div>
  </section>
</template>

<script>
import Seacrch from '~/components/Seacrch'
import Modal from '~/components/Modal'
export default {
  components: {
    Seacrch,
    Modal,
  },
  data() {
    return {
      cnt: 1,
      checkList: false
    }
  },
  computed: {
    movieList() {
      return this.$store.state.fetchApi.movieList
    },
  },
  created() {
    this.$store.dispatch('fetchApi/getMovie', { title: 'frozen' })
  },
}
</script>

<style lang="scss" scoped>
.card-title {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
