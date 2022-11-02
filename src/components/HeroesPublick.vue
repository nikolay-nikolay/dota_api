<template >
    <navheroes></navheroes>    
    <div class="stats-title background">
        <p @click="sortItems($event, (a, b) => a.name.localeCompare(b.name))" class="title-hero background title">HERO</p>
        <p @click="sortItems($event, (a, b) => (a.pick_crusarder / totalPickCrusarder * 1000) - (b.pick_crusarder / totalPickCrusarder * 1000))" class="title-pick-crusarder background title">CRU/GUARD/HER P%</p>
        <p @click="sortItems($event, (a, b) => (a.winrate_crusarder) - (b.winrate_crusarder))" class="title-win-crusarder background title">CRU/GUARD/HER W%</p>
        <p @click="sortItems($event, (a, b) => (a.pick_legends / totalPickLegends * 1000) - (b.pick_legends / totalPickLegends * 1000))" class="title-pick-legends background title">LEGEND/ARCHON P%</p>
        <p @click="sortItems($event, (a, b) => (a.winrate_legends) - (b.winrate_legends))"  class="title-win-legends background title">LEGEND/ARCHON W%</p>
        <p @click="sortItems($event, (a, b) => (a.pick_immortal / totalPickImmortals * 1000) - (b.pick_immortal / totalPickImmortals * 1000))" class="title-pick-immortals background title">IMM/DIV/ANC P%</p>
        <p @click="sortItems($event, (a, b) => (a.winrate_immortal) - (b.winrate_immortal))" class="title-win-immortals background title">IMM/DIV/ANC W%</p>
        <!-- <p class="title-winrate background">PRO WINRATE</p> -->
    </div>

    <div class="stats-wrapper">
        <div class="stats" v-for="item in stats" :key="item.id">
            <img :src="item.icon" alt="icon" class="icon">
            <div class="stats-name">
                {{item.name}}
            </div>
            <div class="stats-pick">
              <p>{{(item.pick_crusarder / totalPickCrusarder * 1000).toFixed(2)}} %</p>
                <div class="bar">
                  <div class="bar-process" :style="{width: (item.pick_crusarder / totalPickCrusarder * 1000).toFixed(2) + '%'}"></div>
                </div>
            </div> 
            <div class="stats-pick">
                <div>
                    <p> {{item.winrate_crusarder}} % </p>
                    <div class="bar">
                      <div class="bar-process" :style="{width: item.winrate_crusarder + '%'}"></div>
                    </div>
                </div>
            </div> 
            <div class="stats-pick">
                <p>{{(item.pick_legends / totalPickLegends * 1000).toFixed(2)}} %</p>
                <div class="bar">
                  <div class="bar-process" :style="{width: (item.pick_legends / totalPickLegends * 1000).toFixed(2) + '%'}"></div>
                </div>
            </div> 
            <div class="stats-pick">
                <div>
                    <p> {{item.winrate_legends}} % </p>
                    <div class="bar">
                      <div class="bar-process" :style="{width: item.winrate_legends + '%'}"></div>
                    </div>
                </div>
            </div> 
            <div class="stats-pick">
                <p>{{(item.pick_immortal / totalPickImmortals * 1000).toFixed(2)}} %</p>
                <div class="bar">
                  <div class="bar-process" :style="{width: (item.pick_immortal / totalPickImmortals * 1000).toFixed(2) + '%'}"></div>
                </div>
            </div> 
            <div class="stats-pick">
                <div>
                    <p> {{(item.winrate_immortal)}} % </p>
                    <div class="bar">
                      <div class="bar-process" :style="{width: item.winrate_immortal + '%'}"></div>
                    </div>
                </div>
            </div> 
            
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
    const {stats,totalPickCrusarder,totalPickLegends,totalPickImmortals,} = useHeroes();
    return {
      stats,
      totalPickCrusarder,
      totalPickLegends,
      totalPickImmortals,
    }},
    methods: {
      sortItems(event, callback) {
        let element = event.srcElement
        let isASC = element.id === 'asc'

        element.id = isASC ? 'desc' : 'asc'
        this.stats.sort((a, b) => isASC ? callback(b, a) : callback(a, b))
    }},
}
</script>
<style scoped>
.title{
  width: 100px;
}
.title-hero{
  margin-left: 50px;
}
.title-pick-crusarder{
  margin-left: 50px;
}
.title-win-crusarder{
  margin-left: 100px;
}
.title-pick-legends{
  margin-left: 100px;
}
.title-win-legends{
  margin-left: 100px;
}
.title-pick-immortals{
  margin-left: 100px;
}
.title-win-immortals{
  margin-left: 100px;
}
.bar{
  width: 120px;
  border: 1px solid black;
  background: #313347;
  height: 10px;
  /* margin-left: 90px; */
}
.bar-process{
  /* width: 20%; */
  height: 100%;
  background-color: rgb(106, 200, 12);
}
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
  padding: 5px 0 5px 5px;
}
.stats-name{
  border: none;
  width: 380px;
  margin-left: 10px;
}
p{
  text-align: center;
  font-size: 16px;
}

.stats-pick{
  width: 100px;
  margin-right: 100px;
}



.icon{
  width: 40px;
  height: auto;
}

</style>