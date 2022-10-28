<template>

  <navheroes></navheroes>

  <div class="stats-title background">
    <p @click="sortItems($event, (a, b) => a.name.localeCompare(b.name))" class="title-hero background">HERO</p>
    <p @click="sortItems($event, (a, b) => (a.pick_pro / totalPickPro * 1000) - (b.pick_pro / totalPickPro * 1000))" class="title-pick background">PRO PICK</p>
    <p @click="sortItems($event, (a, b) => (a.ban_pro / totalBanPro * 1000) - (b.ban_pro / totalBanPro * 1000))" class="title-ban background">PRO BAN</p>
    <p @click="sortItems($event, (a, b) => a.winrate_pro - b.winrate_pro)" class="title-winrate background">PRO WINRATE</p>
  </div>
  <!-- <p>{{totalBanPro}}</p> -->
  <div class="stats-wrapper">
    <div class="stats" v-for="item in stats" :key="item.id" >
      <img :src="item.icon" alt="icon" class="icon">
      <router-link :to="{name: 'hero', params: {id: item.id}}" class="stats-name">
        {{item.name}}
      </router-link>
      <div class="stats-pick">
        <p>{{(item.pick_pro / totalPickPro * 1000).toFixed(2)}} %</p>
        <div class="bar">
          <div class="bar-process" :style="{width: (item.pick_pro / totalPickPro * 1000).toFixed(2) + '%'} "></div>
        </div>

        <!-- <progress class="progress" :value="(item.pick_pro / totalPickPro * 1000).toFixed(2)" max="100"></progress> -->
      </div>
      <div class="stats-ban">
        <p>{{(item.ban_pro / totalBanPro * 1000).toFixed(2)}} %</p>
        <div class="bar">
          <div class="bar-process" :style="{width: (item.ban_pro / totalBanPro * 1000).toFixed(2) + '%'} "></div>
        </div>
      </div>
      <div class="stats-winrate">
        <p>{{item.winrate_pro}} %</p>
        <div class="bar">
          <div class="bar-process" :style="{width: item.winrate_pro + '%'}"></div>
        </div>
      </div>


    </div>
  </div>

</template>
<script>
import navheroes from '@/components/NavHeroes'
import {useHeroes} from "@/hooks/useHeroes";
// import {useHeroesSorted} from '@/hooks/useHeroesSorted'
export default {

  components: {
    navheroes
  },
  setup(){

    const {stats, totalPickPro, totalBanPro,} = useHeroes();
    return {
      // selectedSort, sortedPosts,
      stats,
      totalPickPro,
      totalBanPro,

    }
  },
  methods: {
    sortItems(event, callback) {
      let element = event.srcElement
      let isASC = element.id === 'asc'

      element.id = isASC ? 'desc' : 'asc'
      this.stats.sort((a, b) => isASC ? callback(b, a) : callback(a, b))
    },
  }


}
</script>
<style scoped>
.bar{
  width: 120px;
  border: 1px solid black;
  background: #313347;
  height: 10px;
  margin-left: 90px;
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
a{
  cursor: pointer;
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
