<template>
    <div class="container">
        <div class="top-bar">
            <div class="user-info">
                <img :src="userAvatar" alt="avatar">
                <p>{{ userIsAuth }}</p>
            </div> 
            <div @click="logout" class="logout">
                <i class="fas fa-door-open"></i>
            </div>
        </div>
        <div class="add-status">
            <input placeholder="try post something" v-model="description" type="text">
            <button @click="handleAddStatus">POST</button>
        </div>
        <div class="status">
            <div v-for="(status, index) in getStatus" :key="index">
                <div class="status-one">
                    <h3>{{ status.description }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import firebase from '../firebase/firebase'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    name: "Home",
    methods: {
        logout: async function() {
            try {
                await firebase.auth().signOut()
                this.setUserIsAuth(false)
                this.$router.push('/')
            } catch {
                alert('erro ao deslogar')
            }
        },
        handleAddStatus: async function () {
            const storage = firebase.firestore().collection('status')
            try {
                await storage.add({
                    description: this.description
                })

                this.addStatus({ description: this.description })
                this.description = ''
            } catch {
                alert('deu ruim')
            }
        },
        ...mapActions(['addStatus', 'initializeStatus', 'setUserIsAuth'])
    },
    data() {
        return {
            description: ''
        }
    },
    async created() {
        // if(this.userIsAuth === false) {
        //     return this.$router.push('/')
        // }
        const storage = firebase.firestore().collection('status')
        const initialS = await storage.get()
        let Status = [];
        initialS.forEach(e => {
            Status.push(e.data())
        })
        this.initializeStatus(Status)
    },
    computed: mapGetters(['userName', 'userAvatar', 'getStatus', 'userIsAuth'])
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

.add-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}

.add-status input {
    width: 400px;
    height: 35px;
    border: 1px solid #ccc;
    outline: none;
    padding-left: 15px;
    font-family: var(--Poppins);
}

.add-status button {
    width: 400px;
    height: 35px;
    margin-top: 10px;
    background-color: blueviolet;
    color: white;
    font-family: var(--Poppins);
    outline: none;
    border: 1px solid #ccc;
    cursor: pointer;
}

.status {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.status-one {
    width: 400px;
    padding: 10px;
    background-color: coral;
    margin-top: 5px;
}
</style>