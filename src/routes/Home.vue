<template>
  <div class="container h-100">
    <Form />
    <Movies />
  </div>
</template>

<script>
import Form from '@/components/home/Form';
import Movies from '@/components/common/Movies';
export default {
  components: {
    Form,
    Movies,
  },
};
</script>

<style lang="scss" scoped></style>
