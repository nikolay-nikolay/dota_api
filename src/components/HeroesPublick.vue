<template >
    <navheroes></navheroes>    
    <div class="stats-title background">
        <p class="title-hero background">HERO</p>
        <p class="title-pick background">CRU/GUARD/HER P%</p>
        <p class="title-win background">CRU/GUARD/HER W%</p>
        <p class="title-pick background">LEGEND/ARCHON P%</p>
        <p class="title-win background">LEGEND/ARCHON W%</p>
        <p class="title-pick background">IMMORTAL/DIV/ANC P%</p>
        <p class="title-win background" style="margin-left:20px">IMMORTAL/DIV/ANC W%</p>
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
                <div>{{(item.pick_legends / totalPickLegends * 1000).toFixed(2)}} %</div>
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
                <div>{{(item.pick_immortal / totalPickImmortals * 1000).toFixed(2)}}</div>
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
    }
    }
}
</script>
<style scoped>
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
.title-hero{
  width: 250px;
  
}
.stats{
  display: flex;
  align-items: center;
  border: 1px solid rgb(56, 56, 75);
  margin-bottom: 10px;
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
.title-pick{
    display: flex;
    width: 150px;
    margin-right: 30px;
    text-align: center;

}
.stats-pick{
  width: 100px;
  margin-right: 100px;
}

.title-win{
  width: 150px;
  margin-right: 30px;
  text-align: center;
}
.title-win:last-of-type{
    margin-right: 0;
}
.stats-ban{
  width: 100px;
}
.title-winrate{
  width: 100px;
}
.stats-winrate{
  width: 100px;
}
.progress{
  margin-bottom: 6px;
  width: 100px;
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