<template>
  <div id="app">
     <indexheader></indexheader>
    <router-view></router-view>
    
  </div>
</template>

<script>
import indexheader from "./components/header"

export default {
  name: 'app',
  components:{
    indexheader,
  }
}
</script>

<style>
body{
  background-image: url("./assets/back.jpg");
  background-size:100%,100%;
  cursor: url("./assets/cursor.png"),pointer;
}
</style>
