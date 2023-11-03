<template>
    <div v-if='userName' class="chat">
        <div class="chatbox">
                <div> 
                    <h2>Чат</h2>
                    <div class="text" v-for='msg in messages' :key="msg.id">{{ msg.user }}: {{ msg.text }}
                    <img src="./photos/x.png" style="width: 15px; heigh: 15px" @click="removeMsg(msg.id)"/></div>
                    <div v-show="emptyMsg" class="empty">Текущих сообщений нет</div>
                </div>
                <div>
                    <input v-model="newMessage" placeholder="Введите сообщение" class="input"/>
                        <div class="buttons">
                         <button @click="sendMessage" class="send"> Отправить</button>
                         <button  @click="delMessage" class="del">Удалить</button>
                        </div>
                        
                </div>
        </div>
    </div>

    <div v-else class="alert">
        Для авторизации перейдите по <router-link :to='{name: "Home"}'>ссылке</router-link>
    </div>
</template>


<script>

export default {
    name: 'ChatComp',
    data(){
        return{
            messages: [],
            newMessage: '',
            emptyMsg: true,
            userName: localStorage.getItem('userName')
        }
    },
    methods:{
        sendMessage(){
            if(this.newMessage !== ''){
                this.emptyMsg = false;
                this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.userName})

            this.saveChatRecords()
            this.newMessage = ''

            

            console.log(this.messages);
            } else {
                alert('Пожалуйста введите сообщение')
            }
        },
        removeMsg(id) {
            this.messages = this.messages.filter((msg) => msg.id !== id)
        },
        saveChatRecords(){
            const records = this.messages
            localStorage.setItem(`messages_${this.userName}`, JSON.stringify(records))
        },

        loadChatRecords(){
            const records = JSON.parse(localStorage.getItem(`messages_${this.userName}`))
            if(records){
                this.messages = records
                this.emptyMsg = false
            }
        },

        delMessage(){
            this.messages = []
            localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.messages))
            this.emptyMsg = true
        }
    },
        created(){
            this.loadChatRecords()
        }
}
</script>

<style>
.chat {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    font-size: 100

}
.chatbox {
    width: 100%;
    max-width: 1000px;
    background-color: #6c6464;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2)
}
.send {
    font-size: 12px;
    color: rgb(36, 23, 23);
}
.input {
    color: #393030;
}
.del {
    font-size: 12px;
    color: rgb(36, 23, 23)
}
.text {
    position: relative ;
    background-color: #959292;
    background: rgb(139, 135, 135);
}
h2 {
    display: flex;
    justify-content: center;
    margin-top: -30px;
}
.empty {
    background-color: #959292;
    background: rgb(139, 135, 135);
}
</style>