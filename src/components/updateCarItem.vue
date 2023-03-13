<template>
  <div>
    <form class="m-5 "  action="">
        <div>
            <label for="">Color </label>
            <input  v-model="item.color"  >
       
            <label for="">model</label>
            <input  v-model="item.model" >
        </div>
        <div>
        <label>category</label>
        <select :placeholder="item.category" v-model="item.category">
            <option v-for="item in this.$store.state.categories" :key="item.id" :value=item.name>{{ item.name }}</option>
        </select>
        
        <label> Registration Number</label>
        <input  v-model="item.registrationNumber" >
        </div>
        <button class="btn btn-primary" @click="updateData()" >Update</button>
        
        

    </form>


  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router'
export default {
    name:'updateCar',
    
    data(){
        return{item:[]}
    },

    mounted(){
        console.log(this.$route.params.id)
        axios.get(`http://localhost:3000/Products/${this.$route.params.id}`)
        .then((response=>{
            this.item= response.data
            console.log(this.item)
        }))
    },

    methods:{
        updateData(){
            console.log("method")
        axios.put(`http://localhost:3000/Products/${this.$route.params.id}`,
        {color:this.item.color, model:this.item.model,category:this.item.category,registrationNumber:this.item.registrationNumber}
        )
        router.push('/carView')
            
        }
    }

}
</script>

<style scoped>

select {
    width:10vw;
    padding: 10px;
    border: 2px solid #eee;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius:10px;
    font-family:inherit;
  font-size: inherit;
    
}
input {
    width:10vw;
    padding: 10px;
    border: 2px solid #eee;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    border-radius:10px;
    font-family:inherit;
  font-size: inherit;
    
}
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