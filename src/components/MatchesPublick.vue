<template >
    <navmatches></navmatches>

    <div class="match-title">
        <p @click="sortItems($event, (a, b) => a.id - b.id)" class="title-id">ID</p>
        <p @click="sortItems($event, (a, b) => a.duration - b.duration)" class="title-duration">DURATION</p>
        <p class="title-radiant">RADIANT</p>
        <p class="title-dire">DIRE</p>
    </div>

    <div class="match-wrapper">
        <div class="match" v-for="item in matches" :key="item.id">
            <div class="match-id">
                <p>{{item.id}}</p>
            </div>
            <div class="match-duration">
                <p>{{getFormattedDuration(item.duration)}}</p>
            </div>
            <div class="match-radiant">
                <!-- <p>{{getHeroesImages(item.radiant_team)}}</p> -->
                <img v-for="image in getHeroesImages(item.radiant_team)" :src="image" width="64" height="32">
            </div>
            <div class="match-dire">
                <!-- <p>{{item.dire_team}}</p> -->
                <img v-for="image in getHeroesImages(item.dire_team)" :src="image" width="64" height="32">
            </div>

        </div>
    </div>
</template>
<script>
import navmatches from '@/components/NavMatches.vue'
import {usePublickMatches} from "@/hooks/usePublickMatches"
import {ref, reactive} from "vue";

export default {
    components: {
        navmatches
    },
    data(){
        return {

        }
    },
    setup(){
        const {matches,hero} = usePublickMatches()
        return{
            matches,hero
        }
    },
    methods: {
        getFormattedDuration(seconds) {
            let date = new Date(null)
            date.setSeconds(seconds)

            return date.toISOString().substr(11, 8)
        },
        sortItems(event, callback) {
            let element = event.srcElement
            let isASC = element.id === 'asc'

            element.id = isASC ? 'desc' : 'asc'
            this.matches.sort((a, b) => isASC ? callback(b, a) : callback(a, b))
        },
        getHeroesImages(ids) {
            let images = []

            this.hero.forEach((hero) => {
                if (ids.includes(hero.heroId + ''))
                    images.push(hero.image)
            })

            return images
        }
    },
    computed: {
      getImage : function (){
        let a = []
        for (let i = 0; i < this.matches.length; i++ ){
            if ( this.matches[i].radiant_team[i] === this.hero[i].heroId) {
              a.push({
                lol : this.hero[i].image,

              })
              console.log("done",a)
            } else {
              console.log('error')
            }
        return a
        }
        console.log("lel",this.matches[0].radiant_team[0])
        console.log('kok', this.hero[0].heroId)
        console.log("mak", this.hero[0].image)

      }
    }
    
}
</script>
<style scoped>
.match-title{
    margin-top: 20px;
    display: flex;
    padding: 10px 0;
    background: #313347;
}
.title-id{
    padding-left: 20px;
    background: #313347;
}
.title-duration{
  margin-left: 565px;
    background: #313347;
}
.title-radiant{
  margin-left: 160px;
    background: #313347;
}
.title-dire{
  margin-left: 260px;
    background: #313347;
}


.match{
    display: flex;
    text-align: center;
    border: 1px solid rgb(56, 56, 75);
    padding: 10px 0 10px 20px;
    margin-bottom: 10px;
}
.match-id{
    width: 570px;
    text-align: left;
    align-self: center;
}
.match-league{
    color: rgb(228, 228, 228);
    font-size: 12px;
}
.match-duration{
  align-self: center;
    width: 100px;
}
.match-radiant {
    /* width: 300px; */
    /* color: rgb(102, 187, 106); */
  margin-left: 30px;
}
.match-dire{
    /* width: 300px; */
    /* color: rgb(255, 76, 76); */
    margin-left: 1vw;
}

</style>