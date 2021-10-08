<template>
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
                  detail
                </button>
              </template>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '~/components/Modal'
export default {
  components: {
    Modal,
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
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
