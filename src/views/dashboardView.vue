<template>
    <div >
     <div class="row   ms-auto">
        <navigationBar class="   " />
     </div>   
     <div class="row mt-5   ">
     <sideBar class="col-1   " />
     <dashboard class=" ms-5  col-10 "/>
     </div>
     
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import dashboard from '@/components/dashboard.vue'
  import sideBar from '@/components/sideBar.vue';
  import navigationBar from '@/components/navigationBar.vue';
  
  export default {
    name: 'dashBoard',
    components: {
      dashboard,
      sideBar,
      navigationBar
    }
  }
  </script>
  