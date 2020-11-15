<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import firebase from './firebase/firebase'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  methods: {
    ...mapActions(['setUserName', 'setUserAvatar'])
  },
  created() {
    
  },
  
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
