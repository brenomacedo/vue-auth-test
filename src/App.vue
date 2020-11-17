<template>
  <div id="app">
    <router-view v-if="userIsAuth !== undefined" />
    <h2 v-else>CARREGANDO!</h2>
  </div>
</template>

<script>
import firebase from './firebase/firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  methods: {
    ...mapActions(['setUserName', 'setUserAvatar', 'setUserIsAuth'])
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setUserName(user.displayName)
        this.setUserAvatar(user.photoURL)
        this.setUserIsAuth(true)
      } else {
        this.setUserIsAuth(false)
      }
    })
  },
  computed: {
    ...mapGetters(['userIsAuth'])
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
