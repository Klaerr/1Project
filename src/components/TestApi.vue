<template>
    <div class="info">
    <div class="box">
    <div class="teams">
        Команды
    </div>
    <div v-if='isLoad' class="isload">Загрузка данных...</div>
    <div v-else>
        <div v-for='el in teamData' :key="el.id" class="list">
        {{ el.id }}. {{ el.abbreviation }}, {{ el.full_name }}.
        <img src="./photos/x.png" style="width: 15px; heigh: 15px" @click="removeTeam(el.id)"/>
        </div>
    </div>
    </div>
    </div>
</template>

<script>

export default {
    name: 'TestApi',
    data(){
        return {
            teamData: [],
            isLoad: true
        }
    },
    mounted() {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa026c38a7mshed8b22de5bb08c1p149ee1jsn82ed44ccf6ef',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch(url, options)
.then((res) => res.json())
.then((res) => {
    this.teamData = res.data
    this.isLoad = false
})
    },
    methods: {
        removeTeam(id){
            this.teamData = this.teamData.filter((el) => el.id !== id)
        }
    }
}

</script>
<style>
.info {
    display: flex;
    justify-content: center;
}
.box {
height: 100%;
width: 100%;
max-height: 1000px;
max-width: 500px;
background-color: aquamarine;
border-radius: 5px;
box-shadow: 4px 8px 8px rgba(34, 60, 80, 0.2);
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.teams {
    display: flex;  
    justify-content: center;
}
.list {
    display: flex;  

}
</style>