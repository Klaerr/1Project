<template>
  <div >
    <NavComp></NavComp>
    <router-view></router-view>
  </div>
</template>


<script>
import NavComp from "./components/Navigation.vue"
export default {
  name: 'App',
  components: {
    NavComp
  }
}

</script>
<style>
body {
  background-color: #50857c;
}
</style>
