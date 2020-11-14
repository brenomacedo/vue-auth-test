<template>
  <div id="app">
    <Register />
  </div>
</template>

<script>
//import Login from './components/Login'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Register
  }
}
</script>

<style>
:root {
  --Poppins: 'Poppins', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
