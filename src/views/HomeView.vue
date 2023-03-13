<template>
  <div class="home ">
   
    <signIn />
  </div>
</template>

<script>
// @ is an alias to /src
import signIn from '@/components/signIn.vue'

export default {
  name: 'signInView',
  components: {
    signIn
  }
}
</script>

<style scoped>
  .home{
    margin-left:35%
  }
</style>
