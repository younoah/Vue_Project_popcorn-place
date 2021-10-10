<template>
  <div>
    <Header />
    <Main />
    <Pagination />
    <teleport to="body">
      <Modal />
    </teleport>
    <teleport to="body">
      <Loading />
    </teleport>
  </div>
</template>

<script>
import Pagination from '~/components/Pagination'
import Loading from '~/components/Loading'
import Header from '~/components/Header'
import Modal from '~/components/Modal'
import Main from '~/components/Main'

export default {
    components:{
        Header,
        Main,
        Pagination,
        Modal,
        Loading
    },
    
}
</script>
