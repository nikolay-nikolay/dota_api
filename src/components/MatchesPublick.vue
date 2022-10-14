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
                <p>{{item.radiant_team}}</p>
            </div>
            <div class="match-dire">
                <p>{{item.dire_team}}</p>
            </div>

        </div>
    </div>
</template>
<script>
import navmatches from '@/components/NavMatches.vue'
import {usePublickMatches} from "@/hooks/usePublickMatches"
import {ref} from 'vue'
export default {
    components: {
        navmatches
    },
    data(){
        return {
            takeId: []
        }
    },
    setup(){
        const {matches,durationFormat} = usePublickMatches()
        return{
            matches,durationFormat
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
        computed: {
        async fetchingHeroes (){
            try {
                const api_url = "https://api.opendota.com/api/heroStats"
                const response = await fetch(api_url)
                const data = await response.json()

                for (let t = 0; t < data.length; t++){
                    takeId.push({
                        heroId: data[i].hero_id,
                        img: data[i].img,
                    })
                }
                
                if (this.matches.id == this.Heroid) {
                    console.log(this.matches.id)
                    callback(this)
                
                }
            
            } catch (e){
                console.log(e)
            }
    }
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
    width: 630px;
    padding-left: 20px;
    background: #313347;
}
.title-duration{
    width: 200px;
    background: #313347;
}
.title-radiant{
    width: 320px;
    background: #313347;
}
.title-dire{
    width: 200px;
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
    width: 600px;
    text-align: left;
}
.match-league{
    color: rgb(228, 228, 228);
    font-size: 12px;
}
.match-duration{
    width: 100px;
}
.match-radiant p{
    width: 300px;
    color: rgb(102, 187, 106);
}
.match-dire p{
    width: 300px;
    color: rgb(255, 76, 76);
}

</style>