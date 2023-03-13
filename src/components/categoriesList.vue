<template>
    
    <form class="m-5" action="">
        <label for="">Add new Category name</label>
        <input placeholder="name" v-model="category" >
        <button class="btn btn-primary ms-2 btn-sm" @click="showInputData" >Add</button>
        
        

    </form>

    <table class="table table-bordered table-secondary " >
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>

        <tr v-for=" item in this.$store.state.categories" :key="item.id" >
            <td>
                {{ item.id }}

            </td>
            <td>
                {{ item.name }}
            </td>
            <td>
                <button class="btn bg-danger btn-sm" @click="deleteCategory(item.id)" >delete</button>
            
            </td>
        </tr>

    </table>


</template>

<script>
import axios from 'axios';
//import router from '@/router';

export default {
    name:'categoriesList',
    
    
    data(){
        return{category:''}
    },
    mounted(){
        this.$store.dispatch("getCarsCategory")
    },

   
    methods:{
       showInputData(){
       let newInput = {
            name: this.category
       }
        axios.post("http://localhost:3000/Categories",newInput)
        .then((response)=>{
            console.log(response.data)
            //router.push('/carView')
           
        })
       },
       deleteCategory(id){
        this.$store.dispatch("deleteItemFromCategories",id)
       }
    }
    
}
</script>

<style scoped>

table{
    width:30%;
    margin-left:35%;
}


</style>