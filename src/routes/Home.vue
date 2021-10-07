<template>
  <header>
    <div class="input-group mb-3 search">
      <div>
        <input
          v-model="searchValue"
          type="text"
          class="form-control"
          placeholder="검색할 영화 제목"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          @keyup.enter="cnt=1, initMovieList(), onSubmit()" />
      </div>
      <div>
        <!-- 선택 요구사항 로딩 애니메이션 처리 -->
        <img
          id="button-addon2"
          type="button"
          class="btn btn-outline-secondary"
          src="../images/search.svg"
          @click="cnt=1, initMovieList(), onSubmit()" />
      </div>
    </div>
  </header>
  <!-- <Seacrch @cnt="cnt" /> -->

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
        <button @click="cnt+=1, onSubmit()">
          more
        </button>
      </div>
      <div v-else>
        검색된 자료가 없습니다.
      </div>
    </div>
  </section>
</template>

<script>
//import Seacrch from '~/components/Seacrch'
import Modal from '~/components/Modal'
export default {
  components: {
    //Seacrch,
    Modal,
  },
  data() {
    return {
      searchValue: 'frozen',
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
    this.$store.dispatch('fetchApi/getMovie',{ title: 'frozen', cnt: 1 })
  },
  methods: {
    onSubmit() {
      console.log(this.cnt)
      this.$store.dispatch('fetchApi/getMovie', { title: this.searchValue, cnt: this.cnt })
    },
    initMovieList() {
      this.$store.commit('fetchApi/initMovieList')
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  input {
    width: 500px;
    height: 40px;
  }

  img {
    height: 35px;
  }
}

.card-title {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
