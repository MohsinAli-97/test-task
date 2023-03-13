<template>

    <h5>Add new car</h5>
    <div class="">
<!--input form for adding new car-->
<form class="m-5 "  action="">
        <div class="p-2">
            <label for="">Color</label>
            <input placeholder="color" v-model="color" >
        </div>
        <div>
            <label for="">model</label>
            <input placeholder="model" v-model="model" >
        </div>
        <div class="p-2">
        <label>category</label>
        <select v-model="category">
            <option v-for="item in this.$store.state.categories" :key="item.id" :value=item.name>{{ item.name }}</option>
        </select>
        </div>
        <div>
        <label> Registration Number</label>
        <input placeholder="registration No" v-model="registration" >
        </div>
        <button class="btn btn-primary" @click="showInputData" >Add</button>
        
        

    </form>

    
   


    <table class="table table-bordered m-5  ">
        <tr>
            <th>id</th>
            <th>color</th>
            <th>model</th>
            <th>category</th>
            <th>registration No</th>
            <th>action</th>
        </tr>
        <tr v-for="item in this.$store.state.carList" :key="item.id"  >
            <td>{{ item.id }}</td>
            <td>{{ item.color }}</td>
            <td>{{ item.model }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.registrationNumber }}</td>
            <td>
                <router-link class="btn btn-warning bg-warning btn-sm " :to="{name:'updateCarView', params:{id: item.id}}">edit</router-link>
                <button class="btn  btn-sm bg-danger m-2 " @click="deleteItem(item.id)" >delete</button>
                
                
            </td>
        </tr>
    </table>
</div>  
</template>

<script>
import axios from 'axios'

export default {
    name:'carsList',
    data(){
        return {items:[],selectCategory:'a',color:'',model:null,category:'a',registration:""}
    },

    mounted(){
        this.$store.dispatch("getCarsList")
       
    },

    methods:{
        // function to get inputs from form and post to DB
        showInputData(){
        let newValues = {
            color:this.color,
            model:this.model,
            category:this.category,
            registrationNumber:this.registration
        }
       
        
        axios.post("http://localhost:3000/Products",newValues)
        .then((response)=>{
            console.log(response.data)
        })

       },
        // dispatch to store for deleting particular car        
        deleteItem(id){
          this.$store.dispatch("deleteItemFromProducts",id)

        },
        showCategory(){
            console.log(this.category)
        }
    },

    


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