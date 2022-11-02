<template >
    <navmatches></navmatches>

    <div class="match-title">
        <p @click="sortItems($event, (a, b) => a.league_name.localeCompare(b.league_name))" class="title-id">ID</p>
        <p @click="sortItems($event, (a, b) => a.duration - b.duration)" class="title-duration">DURATION</p>
        <p @click="sortItems($event, (a, b) => a.radiant_name.localeCompare(b.radiant_name))" class="title-radiant">RADIANT</p>
        <p @click="sortItems($event, (a, b) => a.dire_name.localeCompare(b.dire_name))" class="title-dire">DIRE</p>
    </div>

    <div class="match-wrapper">
        <div class="match" v-for="item in matches" :key="item.id">
            <div class="match-id">
                <p>{{item.id}}</p>
                <p class="match-league">{{item.league_name}}</p>
            </div>
            <div class="match-duration">
                <!-- <p>{{item.duration[0]}} : {{item.duration[1].toISOString().substr(11, 8)}}</p> -->
                <p>{{getFormattedDuration(item.duration)}}</p>
            </div>
            <div class="match-radiant">
                <p>{{item.radiant_name}}</p>    
            </div>
            <div class="match-dire">
                <p>{{item.dire_name}}</p>
            </div>

        </div>
    </div>
</template>
<script>
import navmatches from '@/components/NavMatches.vue'
import {useProMatches} from "@/hooks/useProMatches";
export default {
    components: {
        navmatches
    },
    setup(){
        const {matches,durationFormat} = useProMatches()
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
  align-self: center;
}
.match-radiant{
  align-self: center;
}
.match-radiant p{
    width: 300px;
    color: rgb(102, 187, 106);
}
.match-dire{
  align-self: center;
}
.match-dire p{
    width: 300px;
    color: rgb(255, 76, 76);
}
</style>