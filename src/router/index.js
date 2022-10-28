
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/Main";
import Players from '@/views/Players'
import Heroes from '@/views/Heroes'
import Matches from '@/views/Matches'
import Rankings from '@/views/Rankings'
import Teams from '@/views/Teams'
import Forums from '@/views/Forums'
import HeroesPublick from '@/components/HeroesPublick'
import HeroesTurbo from '@/components/HeroesTurbo'
import MatchesPublick from '@/components/MatchesPublick'
import HeroStats from "@/components/HeroStats";



const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/players',
        component: Players
    },
    {
        path: '/heroes/pro',
        component: Heroes
    },
    {
        path: '/matches/pro',
        component: Matches
    },
    {
        path: '/matches/publick',
        component: MatchesPublick
    },
    {
        path: '/rankings',
        component: Rankings
    },
    {
        path: '/teams',
        component: Teams
    },
    {
      path: '/forums',
      component: Forums
    },
    {
        path: '/heroes/publick',
        component: HeroesPublick
    }, 
    {
        path: '/heroes/turbo',
        component: HeroesTurbo
    },
    {
        path: '/heroes/stats/:id',
        name: 'heroes',
        component: HeroStats
    },
   
  

      

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;