<template>
    <div>
<div class="font">
    <div v-if="isAuthentificated" class="logout">
    <div class="font2">Приветствуем вас, {{ userName }}.</div>
    <button @click="logout" class="font3">Выйти</button>
    </div>
    <div v-else class="login">
        <label class="font4">Введите ваше имя:</label>
        <input v-model='userName'/>
        <button @click="login">Сохранить</button>
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
        }
    },
    methods: {
        login() {
            if(this.userName !== ''){
                this.isAuthentificated = true
                localStorage.setItem('isAuthentificated', true)
                localStorage.setItem('userName', this.userName)

                this.$router.push({
                    name: 'Chat',
                    query: {userName: this.userName}
                })
            } else {
                alert('Введите имя')
            }
        },

        logout(){
            this.isAuthentificated = false,
            this.userName = '',
            localStorage.removeItem('isAuthentificated'),
            localStorage.removeItem('userName')
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
    justify-content: center;
    width: 100%;
    max-width: 500px;
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
</style>
