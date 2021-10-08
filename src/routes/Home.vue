<template>
  <!-- <Seacrch/> 컴포넌트 영역 -->
  <header>
    <div class="input-group mb-3 search">
      <div>
        <input
          ref="editor"
          v-model="searchValue"
          type="text"
          class="form-control" 
          placeholder="검색할 영화 제목"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          @keyup.enter="cnt=1, initMovieList(), onSubmit()" />
      </div>
      <div>
        <img
          id="button-addon2"
          type="button"
          class="btn btn-outline-secondary"
          src="../images/search.svg"
          @click="cnt=1, initMovieList(), onSubmit()" />
      </div>
    </div>
  </header>
  <!-- <Seacrch/> 컴포넌트 영역 -->

  <section>
    <div class="container">
      <div
        v-if="movieList.length > 0"
        class="row">
        <div
          v-for="movie in movieList"
          :key="movie.imdbID"
          class="col-12 col-sm-6 col-md-4 col-xl-3">
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
        </div>

        <div class="btn-body">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            @click="cnt+=1, onSubmit()">
            more
          </button>
        </div>
      </div>
      <div v-else-if="Lodinged">
        <!-- 선택 요구사항 로딩 애니메이션 처리 -->
        <img
          style="width: 100%"
          src="https://cdn.roto.codes/images/nyan-cat.gif"
          alt="Loading..." />
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
      Lodinged : false,
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
  mounted(){
    this.$refs.editor.focus()
  },
  methods: {
    async onSubmit() {
      this.Lodinged = true
      await this.$store.dispatch('fetchApi/getMovie', { title: this.searchValue, cnt: this.cnt })
      this.Lodinged = false
    },
    initMovieList() {
      this.$store.commit('fetchApi/initMovieList')
    },
  }
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

.btn-body{
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
}
</style>
