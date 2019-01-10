<template>
<div class="quiz">
  <h1>{{msg}}</h1>
  <h4>Scoring</h4>
  <ol>
    <li>No, This is not me</li>
    <li>Not quite me</li>
    <li>Yes this is me</li>
  </ol>
  <div v-if="submitted">
    <h2 v-show="error"></h2>
     <div v-for="(question, index) of questions" :key="index"  v-bind:class="{ answered: res.indexOf(index) == -1  }">
      <h3>Question {{index+1}}</h3>
      <p>{{question}}</p>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="1"><label >1</label><br/>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="2"><label >2</label><br/>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="3"><label >3</label><br/>
    </div>
 
   
  </div>
    <div v-else>
       <div v-for="(question, index) of questions" :key="index" >
      <h3>Question {{index+1}}</h3>
      <p>{{question}}</p>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="1"><label >1</label><br/>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="2"><label >2</label><br/>
      <input type="radio" :name="`question${index}`" @click="getindex(index)" value="3"><label >3</label><br/>
    </div>
    </div>
    <button @click="submitQuiz">Answer</button>

</div>
    
</template>
<script>
import axios from 'axios';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Quiz',
        questions:[],
        res:[],
        submitted: false,
        error: false
      }
    },
    methods:{
      getindex(index){
        if(this.res.indexOf(index) == -1)
          this.res.push(index)

       console.log(this.res)
      },
      submitQuiz (){
        this.submitted = true;
        if(this.res.length === this.questions.length){
          console.log("hereehehe")
          this.$router.push({path: '/successful'})
        }else{
          this.error = true;
          alert("Please answer all the question")
        }
      }
    },
    mounted(){
      axios.get('http://test.natterbase.com:3002/questions', { headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE" } })
      .then(response => {
          this.questions = response.data.questions;
      })
      .catch((error) => {
          console.log('error ' + error);
      });
    }
  }
</script>
<style>
.quiz{
    width: 80%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  color: #2c3e50;
  margin-top: 60px;
  }

  .answered{
    border: red solid 1px
  }
</style>
