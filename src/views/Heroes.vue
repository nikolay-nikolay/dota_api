
<template lang="">

<!-- <div>
  <p>Name</p>
  <p>Pro winrate</p>
</div>


<tr v-for="id in heroId" class="stats" >
  {{id}}
  <td v-for="img in heroesImage" class="stats-icon">
    <img :src="img" alt="icons">
  </td>
  <td class="stats-name">
    {{name}}
</td>
  <td class="stats-winrate">
    {{proWinrate}}
  </td>
</tr> -->


<!-- СНИЗУ РАБОТАЕТ СТОЛБИКОМ НО ЭТО НЕ УДОБНО СТИЛИЗОВАТЬ, ХОЧУ ВЫВОДИТЬ СТРОЧНО КАК ТУТ https://www.opendota.com/heroes -->
<div class="wrapper">
  <div class="title">
    <div class="name">Name</div>
    <div class="winrate">ProWinrate %</div>
  </div>

  <div class="stats">

    <div class="heroes-wrap">
      <div v-for="post in heroesImage" class="icons-wrapper">
      <img :src="post" alt="icons" class="icons">
      </div>
    </div>

      

    <div class="heroes-wrap">
      <div v-for="post in name" class="heroes">
      <p class="heroes-text">{{  post  }}</p>
      
    </div>
        
  </div>

  <div class="heroes-wrap">
    
    <div v-for="post in proWinrate" class="stats-wrap">
      <p class="stats-text">{{  post  }}</p>
      <progress class="progress" :value="post" max="100"></progress>
    </div>
  </div>
    </div>
</div>
   

</template>
<script>
import {useHeroes} from "@/hooks/useHeroes";
import {ref} from 'vue'
export default {
 

  setup(props){
    const {name, proWinrate,heroesImage,heroId,} = useHeroes();
    
    return {
      name,
      proWinrate,
      heroesImage,
      heroId,
    
      
    }
    
  }
}
</script>
<style scoped>

/* .stats{
  display: flex;
}
.stats-icon{
  border: 1px solid teal;
  padding: 10px;
}
.stats-name{
  border: 1px solid teal;
  padding: 10px;
}
.stats-winrate{
  border: 1px solid teal;
  padding: 10px;
} */





.heroes-wrap{
  border-collapse: collapse;
}
.heroes{
  height: 40px;
  
}
.stats-wrap{
  height: 40px;
}
.heroes-text{
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  border-collapse: collapse; 
  
  
}
.line{
  width: 100%;
  height: 1px;
  color: aquamarine;
  background-color: teal;
}
.icons-wrapper{
  height: 40px;
  width: 40px;
}
.stats-text{
  padding-top: 12px;
  text-align: center;
  line-height: 10px;
  border-collapse: collapse;
  

}
.stats{
  display: flex;
  
}
.icons{
  width: 100%;
  height: 100%;
}
.progress {
  background-color: #f3f3f3;
  border: 0;
  margin-top: 0px;
  height: 6px;
  border-radius: 9px;
}

</style>
