<template>
    <div class="component">
        <nav class="navbar">
            <router-link to='/' class="hp">Домашняя</router-link>
            <router-link to='/chat' class="ch">Чат</router-link>
            <router-link to='/test' class="api">Подгрузка API данных</router-link>
            <router-link to='counter' class="ctr">Счётчик</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavComp'
}
</script>
<style >

.component{
 background-color: #877a87;
 width: 100%;
 height: 100px;
 display: flex;
 justify-content: left;
}

nav{
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 500;
}

.hp {
    display: flex;
    flex-direction: column;
}

.ch {
    display: flex;
    flex-direction: column;
}

.api {
    display: flex;
    flex-direction: column;
}

</style>