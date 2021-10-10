<template>
  <h1>
    {{ msg }}
  </h1>
  <h1>{{ count }}</h1>
  <Hello />
  <h1>설문조사</h1>
  <TextField
    v-model="fields[0].value"
    :title="fields[0].title" />
</template>
<script>
import Hello from '~/components/Hello'
import sampleMixin from '~/mixins/sample'
import TextField from '~/components/fields/TextField'

export default {
  components : {
    Hello, TextField
  },
  mixins : [sampleMixin],
  data() {
    return {
      msg : 'hello seungrok!',
      fieds : [
        { 
          component : 'TextField', 
          title : '이름', 
          value : ''
        },
        { 
          component : 'SimpleRadio', 
          title : '나이대', 
          value : '', 
          items : ['20대', '30대','40대','50대']
        }
      ]
    }
  },
  created(){
    this.init()
  },
  methods : {
    async init(){
      const res = await this.$fetch( 'https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3' )
      console.log( res, 'Done!' )
    },
  }
}
</script>
<style>
h1 {
	color: orange;
}
</style>
