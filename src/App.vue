<template>
  <div id="app">
    <img alt="ePayco logo" id="logo" src="./assets/epayco.png">
    <router-view></router-view>    
  </div>
</template>


<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width:200px;
}

</style>
