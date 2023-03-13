<template>
  <div class="sideBar bg-light">
    <ul class="">
        <li style="float:left;" ><router-link class="btn btn-dark m-2 ms-0" to="/categoriesView">Categories</router-link></li>
        <li class=""><router-link class="btn btn-dark" to="/carView">Cars</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'sideBar'
}
</script>

<style scoped>
.sideBar{
    height: 80vh;
}
.btn {

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
width:100%;

}

ul{
    
    list-style-type: none;
    
}





</style>