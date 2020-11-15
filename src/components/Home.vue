<template>
    <div class="container">
        <div @click="logout" class="logout">
            <i class="fas fa-door-open"></i>
        </div>

        <h1>User: {{ userName }}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '../firebase/firebase'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    name: "Home",
    methods: {
        logout: async function() {
            try {
                await firebase.auth().signOut()
                this.$router.push('/')
            } catch {
                alert('erro ao deslogar')
            }
        }
    },
    computed: mapGetters(['userName', 'userAvatar'])
}
</script>

<style scope>
.container {
    min-height: 100vh;
    background-color: lightblue;
    padding: 20px;
}
</style>