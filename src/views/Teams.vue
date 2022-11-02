<template >

    <div class="teams-title">
        <p class="title-rank">RANK</p>
        <p class="title-name" @click="sortItems($event, (a, b) => a.name.localeCompare(b.name))">NAME</p>
        <p class="title-rating">RATING</p>
        <p class="title-wins">WINS</p>
        <p class="title-losses">LOSSES</p>
    </div>


    <div class="teams-wrapper">
        <div class="teams" v-for="item in teams" :key="item.id">
          <div class="teams-rank">
            <p>1st</p>
          </div>
          <div class="teams-name">
            <img :src="item.logo_url" alt="logo" class="logo">
            <p>{{item.name}}</p>
          </div>
          <div class="teams-rating">
            <p>{{item.rating}}</p>
          </div>
          <div class="teams-wins">
            <p>{{item.wins}}</p>
          </div>
          <div class="teams-losses">
            <p>{{item.losses}}</p>
          </div>
        </div>
    </div>
</template>
<script>
import {useTeams} from "@/hooks/useTeams";
export default {
    setup(){
        const {teams,} = useTeams()
        return{
            teams,
        }
    },
    methods: {
        sortItems(event, callback) {
            let element = event.srcElement
            let isASC = element.id === 'asc'

            element.id = isASC ? 'desc' : 'asc'
            this.teams.sort((a, b) => isASC ? callback(b, a) : callback(a, b))
        },
    }
    
}
</script>
<style scoped>
.logo{
    width: 30px;
    height: auto;
}
.teams-title{
    margin-top: 20px;
    display: flex;
    padding: 10px 0;
    background: #313347;
}
.title-rank{
    margin-left: 30px;
    background: #313347;
}
.title-name{
    margin-left: 120px;
    background: #313347;
}
.title-rating{
    margin-left: 470px;
    background: #313347;
}
.title-wins{
    margin-left: 200px;
    background: #313347;
}
.title-losses{
    margin-left: 180px;
    background: #313347;
}


.teams{
    display: flex;
    text-align: center;
    border: 1px solid rgb(56, 56, 75);
    padding: 10px 0 10px 20px;
    margin-bottom: 10px;
}
.teams-rank{
    width: 100px;
    margin-left: 20px;
    align-self: center;
    text-align: left;
}
.teams-name{
    color: rgb(228, 228, 228);
    font-size: 12px;
    width: 150px;
    align-self: center;
}
.teams-rating{
    width: 100px;
    margin-left: 400px;
  align-self: center;
}
.teams-wins{
  align-self: center;
}
.teams-wins p{
    width: 200px;
    margin-left: 100px;
    color: rgb(102, 187, 106);
}
.teams-losses{
  align-self: center;
}
.teams-losses p{
    width: 200px;
    margin-left: 30px;
    color: rgb(255, 76, 76);
}

</style>