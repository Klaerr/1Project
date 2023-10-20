<template>
    <div class="bgfont">
    <div id="app" class="bg">
        <div class="counter">
        <h1 class="sum">{{counter}}</h1>
        <p><button v-on:click="incrementCounter" class="count">+1</button></p>
        </div>
        <input type="number" v-model="number1" class="numb"/>
        <input type="number" v-model="number2" class="numb"/>
        <button v-on:click="calculateSum" class="calc">сложить числа</button>
        <div class="result">Результат: {{ sum }}</div>
    </div>
    </div>
</template>

<script>
        export default{
            name: "counterComp",
            data() {
                return {
                counter: 0,
                number1: 0,
                number2: 0,
                sum: 0,
                }   
            },
            methods: {
                incrementCounter: function() {
                this.counter++;
                },
                 calculateSum: function() {
                 this.sum = parseInt(this.number1) + parseInt(this.number2)
                }
                
            }, created: function() {
            console.log('created hook called');
            },
            updated: function() {
    console.log('Updated Counter:', this.counter);
            }
        }


    </script>

<style>
.bgfont {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font: 400;
    display: flex;
    justify-content: center;
    margin-top: 0px;
}
.bg {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    background-color: rgb(27, 194, 194);
    padding: 70px;
    padding-bottom: 100px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(34, 60, 80, 0.2);
}
.sum {
    display: flex;
    position: absolute;
    margin-top: -30px;
}
.count {
    display: flex;
    position: absolute;
    margin-top: -42px;
    margin-left: 85px;
    width: 100%;
    max-width: 70px;
    height: 100%;
    max-height: 40px;
}
.calc {
    margin-top: 150px;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 50px;
}
.result {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
.numb {
    margin-top: 100px;
    display: flex;
    width: 100%;
    max-width: 100px;
    height: 100%;
    max-height: 20px;
    justify-content: center;
    align-items: center;
}

</style>