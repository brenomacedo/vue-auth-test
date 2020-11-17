<template>
    <div class="container">
        <div class="top-bar">
            <div class="user-info">
                <img :src="userAvatar" alt="avatar">
                <p>{{ userName }}</p>
            </div> 
            <div @click="logout" class="logout">
                <i class="fas fa-door-open"></i>
            </div>
        </div>
        <button @click="test">ola</button>
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
            } catch {
                alert('erro ao deslogar')
            }
        },
        test: function () {
            console.log(this.getStatus)
        }
    },
    computed: mapGetters(['userName', 'userAvatar', 'getStatus'])
}
</script>

<style scope>
.container {
    min-height: 100vh;
    background-color: lightblue;
    padding: 20px;
}

.top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-info img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.user-info p {
    font-size: 18px;
    margin-left: 15px;
    font-family: var(--Poppins);
}
</style>