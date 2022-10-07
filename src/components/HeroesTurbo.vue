<template>
    <navheroes></navheroes>
    <div class="stats-title background">
        <p class="title-hero background">HERO</p>
        <p class="title-pick background">TURBO PICK %</p>
        <p class="title-win background">TURBO WINRATE %</p>
    </div>
    <div class="stats" v-for="item in stats" :key="item.id">
        <img :src="item.icon" alt="icon" class="icon">
        <div class="stats-name">
            {{item.name}}
        </div>
        <div class="stats-pick">
            <div>
                {{item.pick_turbo}}
            </div>
        </div> 
        <div class="stats-pick">
            <p> {{item.winrate_turbo}} % </p>
            <progress class="progress" :value="item.winrate_turbo" max="100"></progress>
        </div> 
    </div>
</template>
<script>
import navheroes from "@/components/NavHeroes"
import {useHeroes} from "@/hooks/useHeroes";
export default {
    components: {
        navheroes
    },
    setup(){
        const {stats} = useHeroes();
        return {
            stats,
        }
    }
}
</script>
<style scoped>
.stats-title{
  display: flex;
  text-align: center;
  
  margin-top: 20px;
  padding: 12px 0;
}
.background{
  background: #313347;
}
.stats{
  display: flex;
  align-items: center;
  border: 1px solid rgb(56, 56, 75);
  margin-bottom: 10px;
}
.title-hero{
    width: 360px;
}
.title-pick{
    width: 400px;
}
.title-win{
    width: 500px;
}
.stats-name{
    width: 500px;
}
.stats-pick{
    width: 400px;
}
.stats-pick p{
    margin-left: 60px;
}
</style>