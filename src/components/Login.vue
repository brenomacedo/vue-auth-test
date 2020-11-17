<template>
  <div class="container">
      <form class="form">
            <input v-model="email" type="text" placeholder="E-mail" class="input">
            <div class="password-container">
                <input v-model="password" :type="visible ? 'text' : 'password'" placeholder="Senha" class="input">
                <div @click="toggleVisible" v-if="visible" class="eye-icon">
                    <span><i class="fas fa-eye"></i></span>
                </div>
                <div @click="toggleVisible" v-else class="eye-icon">
                    <span><i class="fas fa-eye-slash"></i></span>
                </div>
            </div>
            <button @click="login" class="login-button">Login</button>
            <button @click="googleLogin" class="login-button google-login"><i class="fab fa-google"></i></button>
            <p @click="toRegister">Criar conta</p>
      </form>
  </div>
</template>

<script>
import firebase from '../firebase/firebase'
import { mapActions, mapGetters } from 'vuex'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

export default {
    name: 'Login',
    data() {
        return {
            visible: false,
            email: '',
            password: ''
        }
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible
        },
        toHome: function ($event) {
            $event.preventDefault()
            this.$router.push('/home')
        },
        googleLogin: async function ($event) {
            $event.preventDefault()
            const provider = new firebase.auth.GoogleAuthProvider()
            try {
                const user = await firebase.auth().signInWithPopup(provider)
                const storage = firebase.firestore().collection('users')
                const usersRes = await storage.where('email', '==', user.user.email).get()
                if(usersRes.empty) {
                    await storage.doc(user.user.email).set({
                        id: user.user.uid,
                        name: user.user.displayName,
                        email: user.user.email,
                        avatar: user.user.photoURL
                    })
                }
                
                this.setUserId(user.user.uid)
                this.setUserName(user.user.displayName)
                this.setUserEmail(user.user.email)
                this.setUserAvatar(user.user.photoURL)
                this.$router.push('/home')
            } catch {
                alert('erro ao logar')
            }
        },
        toRegister: function () {
            this.$router.push('/register')
        },
        login: async function ($event) {
            $event.preventDefault()
            try {
                const User = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                const storage = firebase.firestore().collection('users')
                const data = await storage.where('email', '==', User.user.email).get()
                let user
                data.forEach(data => {
                    user = data.data()
                })
                this.setUserId(User.user.uid)
                this.setUserName(user.name)
                this.setUserEmail(user.email)
                this.setUserAvatar(user.avatar)
                this.$router.push('/home')
            } catch {
                alert('erro ao logar')
            }
        },
        ...mapActions(['setUserId' ,'setUserName', 'setUserAvatar', 'setUserEmail'])
    },
    computed: {...mapGetters(['userIsAuth'])},
    created() {
        if(this.userIsAuth === true) {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background-color: #4c1a9c;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    width: 300px;
    padding: 15px;
    background-color: #7b29ff;
    -webkit-box-shadow: 5px 5px 0px 0px #000000; 
    box-shadow: 5px 5px 0px 0px #000000;
}

.input {
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    outline: none;
    font-family: var(--Poppins);
    padding-left: 10px;
    margin-bottom: 5px;
}

.login-button {
    width: 100%;
    height: 35px;
    border: 0;
    outline: none;
    background-color: #00f2ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--Poppins);
    color: white;
    cursor: pointer;
    transition: 0.5s;
}

.login-button:hover {
    background-color: #00aaaa;
}

.google-login {
    background-color: red;
    margin-top: 5px;
}

p {
    color: white;
    font-family: var(--Poppins);
    cursor: pointer;
    margin-top: 10px;
}

.password-container {
    position: relative;
}

.eye-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
</style>