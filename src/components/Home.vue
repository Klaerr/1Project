<template>
    <div>
<div class="font">
    <div v-if="isAuthentificated" class="logout">
    <div class="font2">Приветствуем вас, {{ userName }}.</div>
    <button @click="logout" class="font3">Выйти</button>
    </div>
    <div v-else class="login">
        <div class="regAc">
        <label class="font">РЕГИСТРАЦИЯ</label>
        <p><label class="font">Введите имя</label>
        <input v-model='userName'/></p>
        <p><label class="font">Введите пароль</label>
        <input type="password" v-model='password'/></p>
        <p><button @click="register">Сохранить</button></p>
        </div>
        <div class="logAc">
        <label class="font4">Вход</label>
        <p><label class="font4">Введите имя</label>
        <input v-model='userName'/></p>
        <p><label class="font4">Введите пароль:</label>
         <input type="password" v-model='password'/></p>
        <p><button @click="login">Сохранить</button></p>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
    name: 'HomeComp',
    data() {
        return {
      isAuthentificated: false,
      userName: '',
      password: '',
        }
    },
    methods: {
        login() {
            if(this.userName !== '' && this.password !== '') {
                if(localStorage.getItem('encryptedPassword')) {
                    let decryptedPassword = atob(localStorage.getItem('encryptedPassword'))
                    if(this.password === decryptedPassword && this.userName === localStorage.getItem('userName')) {
                        this.isAuthentificated = true
                        localStorage.setItem('isAuthentificated', true) 

                        this.$router.push({
                            name: 'Chat',
                            query: {userName: this.userName}
                        })
                    } else {
                        alert('Неправильный пароль или имя')
                    }
                } else {
                    alert('Неправильный пароль или имя')
                }
            } else {
                alert('Пожалуйста, введите имя и пароль')
            }
        },

        logout(){
            this.isAuthentificated = false,
            this.userName = '',
            this.password = '',
            localStorage.removeItem('isAuthentificated')
        },
        register(){
            if(this.userName !== '' && this.password !== '') {
                let encryptedPassword = btoa(this.password)
                localStorage.setItem('encryptedPassword', encryptedPassword)
                localStorage.setItem('userName', this.userName)
            }
        }
    },
    created(){
        if(localStorage.getItem('isAuthentificated')) {
            this.isAuthentificated = true,
            this.userName = localStorage.getItem('userName')
        }
    }
}

</script>

<style>
.font {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font: 400;
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 1000px;
    background-color: rgb(27, 194, 194);
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(34, 60, 80, 0.2);
}
.logout {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    background-color: rgb(27, 194, 194);
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(34, 60, 80, 0.2);
}
.font2 {
    position: absolute;
}
.font3 {
    display: flex;
    justify-content: center;
    margin-top: 35px;
    width: 100%;
    max-width: 50px;
}
button {
  appearance: none;
  border: 1;
  border-color: rgba(0, 0, 0, 0.563);
  border-radius: 5px;
  background: #b0f4ff6c;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
}
.logAc {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 250px;
    background-color: rgb(161, 27, 194, 0.192);
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(34, 60, 80, 0.2);
}
.regAc {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 250px;
    background-color: rgba(161, 27, 194, 0.192);
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(34, 60, 80, 0.2);
}
</style>
