<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login
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
