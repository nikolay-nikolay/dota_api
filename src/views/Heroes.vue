
<template lang="">

<navheroes></navheroes>

<div class="stats-title background">
  <p class="title-hero background">HERO</p>
  <p class="title-pick background">PRO PICK</p>
  <p class="title-ban background">PRO BAN</p>
  <p class="title-winrate background">PRO WINRATE</p>
</div>

<div class="stats-wrapper">
  <div class="stats" v-for="item in stats" :key="item.id">
    <img :src="item.icon" alt="icon" class="icon">
    <div class="stats-name">
      {{item.name}}
    </div>
    <div class="stats-pick">
      <p>{{item.pick_pro}}</p>
    </div>
    <div class="stats-ban">
      <p>{{item.ban_pro}}</p>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_pro}} %</p>
      <progress class="progress" :value="item.winrate_pro" max="100"></progress>
    </div>
    <!-- <div class="stats-winrate">
      <p>{{item.winrate_1}} %</p>
      <progress class="progress" :value="item.winrate_1" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_2}} %</p>
      <progress class="progress" :value="item.winrate_2" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_3}} %</p>
      <progress class="progress" :value="item.winrate_3" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_4}} %</p>
      <progress class="progress" :value="item.winrate_4" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_5}} %</p>
      <progress class="progress" :value="item.winrate_5" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_6}} %</p>
      <progress class="progress" :value="item.winrate_6" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_7}} %</p>
      <progress class="progress" :value="item.winrate_7" max="100"></progress>
    </div>
    <div class="stats-winrate">
      <p>{{item.winrate_8}} %</p>
      <progress class="progress" :value="item.winrate_8" max="100"></progress>
    </div> -->
    
  </div>
</div>

</template>
<script>
import navheroes from '@/components/NavHeroes'
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
.title-hero{
  width: 400px;
  
}
.stats{
  display: flex;
  align-items: center;
  border: 1px solid rgb(56, 56, 75);
  margin-bottom: 10px;
}
.stats-name{
  border: none;
  width: 350px;
  margin-left: 10px;
}
p{
  text-align: center;
}
.title-pick{
  width: 300px;
}
.stats-pick{
  width: 300px;
}

.title-ban{
  width: 300px;
}
.stats-ban{
  width: 300px;
}
.title-winrate{
  width: 300px;
}
.stats-winrate{
  width: 300px;
}
.progress{
  margin-bottom: 6px;
  width: 100px;
  margin-left: 100px;  
}
.icon{
  width: 40px;
  height: auto;
}
.progress {
  background-color: #f3f3f3;
  border: 0;
  margin-top: 0px;
  height: 6px;
  border-radius: 9px;
}
</style>
