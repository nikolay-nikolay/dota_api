<template >

    <div class="teams-title">
        <p class="title-rank">RANK</p>
        <p class="title-name">NAME</p>
        <p class="title-rating">RATING</p>
        <p class="title-wins">WINS</p>
        <p class="title-losses">LOSSES</p>
    </div>


    <div class="teams-wrapper">
        <div class="teams" v-for="item in teams.slice(0,100)" :key="item.id">
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
.title-name{
    width: 630px;
    padding-left: 20px;
    background: #313347;
}
.title-rating{
    width: 200px;
    background: #313347;
}
.title-wins{
    width: 320px;
    background: #313347;
}
.title-losses{
    width: 200px;
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
    text-align: left;
}
.teams-name{
    color: rgb(228, 228, 228);
    font-size: 12px;
    width: 150px;
}
.teams-rating{
    width: 100px;
}
.teams-wins p{
    width: 300px;
    color: rgb(102, 187, 106);
}
.teams-losses p{
    width: 300px;
    color: rgb(255, 76, 76);
}

</style>