<template>
  <div class="container">
      <form class="form">
          <input v-model="name" type="text" placeholder="Nome" class="input">
          <input v-model="email" type="text" placeholder="E-mail" class="input">
          <div class="password-container">
                <input v-model="password"
                :type="visible ? 'text' : 'password'" placeholder="Senha" class="input">
                <div v-if="visible" @click="toggleVisible" class="eye-icon">
                    <span><i class="fas fa-eye"></i></span>
                </div>
                <div v-else @click="toggleVisible" class="eye-icon">
                    <span><i class="fas fa-eye-slash"></i></span>
                </div>
          </div>
          <input v-model="confirmPassword" type="password" placeholder="Confirmar Senha" class="input">
          <button @click="register" class="login-button">Register</button>
      </form>
  </div>
</template>

<script>
import firebase from '../firebase/firebase'
import { mapActions } from 'vuex'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

export default {
    name: 'Register',
    data() {
        return {
            visible: false,
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible
        },
        register: async function ($event) {
            $event.preventDefault()
            if(this.password !== this.confirmPassword) {
                return alert('as senhas nao conferem')
            }

            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                this.setUserName(user.user.displayName)
                this.setUserAvatar(user.user.photoURL)
                this.$router.push('/home')
            } catch {
                alert('erro ao cadastrar')
            }
        },
        ...mapActions(['setUserName', 'setUserAvatar'])
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
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>