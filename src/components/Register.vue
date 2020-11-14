<template>
  <div class="container">
      <form class="form">
          <input type="text" placeholder="Nome" class="input">
          <input type="text" placeholder="E-mail" class="input">
          <input type="password" placeholder="Senha" class="input">
          <input type="password" placeholder="Confirmar Senha" class="input">
          <button class="login-button">Register</button>
          <p>Já tenho uma conta</p>
      </form>
  </div>
</template>

<script>

export default {
    name: 'Register'
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
</style>