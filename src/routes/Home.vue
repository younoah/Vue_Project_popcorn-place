<template>
  <div>
    <h1>Home.vue</h1>
    <Hello />
    <World />
  </div>
</template>

<script>
import Hello from '~/components/Hello';
import World from '~/components/World';

export default {
  components: {
    Hello,
    World,
  },
};
</script>

<style lang="scss" scoped></style>
