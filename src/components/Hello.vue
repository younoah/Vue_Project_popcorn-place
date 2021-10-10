<template>
  <h1>Hello I am Hello.vue</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>
<script>
import sampleMixin from '~/mixins/sample'

export default ({
  mixins:[sampleMixin]
})
</script>

<style scoped lang="scss">
$color: royalblue;
h1 {
	color: $color;
}
</style>
