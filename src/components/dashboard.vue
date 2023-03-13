<template>

    <div class="bg-light card ">
       total number of cars registered: {{ this.item }}
       
       
    </div>

</template>
<script>
import axios from 'axios'



export default{
    name:'dashBoard',
    
    components:{
        
    },  
    
    data(){
    return {item:[]}
    },
    mounted(){
          this.getJsonData()  
        
    },

    methods:{
        getJsonData(){
            axios.get("http://localhost:3000/Products")
            .then((response )=>{
                this.item= response.data.length;
                
            })
            .catch((error) => {
            console.log(error);
            });
            
        },
       
    },
   
}






</script>
<style scoped>
</style>