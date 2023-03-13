<template>
  <div style="background-color: #e2e2e2;">
        
        <h2> signed In as:  {{this.$store.state.user}} </h2>
        
        <button class="btn btn-primary " @click="this.$store.commit('clearUser')">logOut</button>
        
  </div>
</template>

<script>
export default {
    name: 'navigationBar',
   
}



</script>

<style scoped>
button {

/* remove default behavior */
appearance:none;
-webkit-appearance:none;

/* usual styles */
padding:10px;
border:none;
background-color:#3F51B5;
color:#fff;
font-weight:600;
border-radius:5px;
width:10%;

}

</style>