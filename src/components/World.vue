<template>
  <h1>World.vue</h1>
  <div>{{ reversemsg }}</div>
</template>

<script>

export default {
    computed:{
        reversemsg(){
            return this.$store.getters.reversedMsg
        }
    }

}
</script>
