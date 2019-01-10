<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h3>{{msg}}</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, deleniti? Repudiandae beatae, consectetur, nemo debitis laborum accusantium et officiis itaque, eius assumenda sit eveniet nobis provident expedita sunt excepturi reiciendis!</p>
    <button><router-link to="/questions">Start</router-link></button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title:'9to5',
      msg: 'Test your fit to work'
    }
  }
}
</script>
<style scoped>
  .hello{
    width: 80%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
</style>

</style>
