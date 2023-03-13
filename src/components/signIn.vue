<template>
  <div  class="signInStyle card p-3 m-5  bg-light  ">
    
    <form>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" placeholder="email" v-model="userName" />
   
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <label class="form-label" >Password</label>
    <input type="password"  class="form-control" placeholder="password" v-model="password" />
    
  </div>

 

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4" @click="checkCredentials()">Sign in</button>
  
  <div class="text-center">
    
    <p>Not a member? <router-link  to="/about">Register</router-link></p>
   
  </div>
</form>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  props: {
   
  },
  data(){
    return { userName:'', password:''}
  },
  methods:{
    checkCredentials(){
      var credentials = {
        userName: this.userName,
        password:this.password
      }
      //console.log(credentials)
      this.$store.dispatch("signInCheck",credentials)
    }
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signInStyle{
  width: 25vw;
  align-items: center;
  
}


</style>
