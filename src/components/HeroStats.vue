<template>
  <!-- <p>{{name}}</p> -->
  <div class="container title-content">
      <img :src="img" alt="" style="width: 200px; height: auto">
    <div class="about-hero">
      <p class="title">{{name}}</p>

      <div class="roles">
        <p class="text">{{attack_type}} - </p>
        <p class="text roles-text" v-for="item in roles">{{item}}, </p>
      </div>
    </div>
    <div class="hero-attr">
      <div class="attr">
        <div class="circle circle-red"></div>
        <p>{{base_str}} + </p>
        <p>{{str_gain}}</p>
        <div class="circle circle-green"></div>
        <p>{{base_agi}} + </p>
        <p>{{agi_gain}}</p>
        <div class="circle circle-blue"></div>
        <p>{{base_int}} + </p>
        <p>{{int_gain}}</p>
      </div>

      <div class="hero-skills">

          <img v-for="skill in skill_imgs" :src="skill" alt="" class="img-skills">

      </div>

<!--      <div>-->
<!--        <div v-for="talant in skills.talants"></div>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue"
export default {
   
setup(){
    const route = useRoute();

    return {
      route
    }
  },
  data() {
    return {
      skill_imgs: [],
      id: '',
      name: '',
      img: '',
      attack_type: '',
      roles: [],
      base_str: '',
      base_agi: '',
      base_int: '',
      str_gain: '',
      agi_gain: '',
      int_gain: '',
      loc_name: '',
      skills: {},
      skills_url: {}
    }
  },
  methods: {
    async getHero(id){
      const api_url = "https://api.opendota.com/api/heroStats"
      const response = await fetch(api_url)
      const data = await response.json()
      data.forEach(el => {
        if( el.id.toString() === id ){
          this.id = el.id
          this.name = el.localized_name
          this.img = "https://api.opendota.com" + el.img
          this.attack_type = el.attack_type
          this.roles = el.roles
          this.base_str = el.base_str
          this.base_agi = el.base_agi
          this.base_int = el.base_int
          this.str_gain = el.str_gain
          this.agi_gain = el.agi_gain
          this.int_gain = el.int_gain
          this.loc_name = el.name

        }
      })

    },

    async getAbilities(id){
      const api_url = "https://api.opendota.com/api/constants/hero_abilities"
      const response = await fetch(api_url)
      const skills = await response.json()

      const api_url2 = 'https://api.opendota.com/api/constants/abilities'
      const response2 = await fetch(api_url2)
      const img_url = await response2.json()
      this.skills = skills[`${this.loc_name}`].abilities
     // this.skills_url = "https://api.opendota.com" + skills
      // data.forEach(el => {
      //   if( el.id.toString() === id ){
      //   }
      // })
      this.skills_url = `https://api.opendota.com${img_url[`${this.skills[0]}`].img}`;
      this.skills.forEach(skill => {
        this.skill_imgs.push(`https://api.opendota.com/apps/dota2/images/dota_react/abilities/${skill}.png`)
      })
    }
  },
  mounted() {
    this.getHero(this.route.params.id)
    this.getAbilities(this.route.params.id)
  }

}

</script>

<style scoped>
.container{
  margin-top: 20px;
  width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: #383838;
}
.title-content{
  display: flex;
  align-items: center;
}
p{
  background: none;
}
div{
  background: none;
}
.about-hero{
  margin-left: 20px;
}
.roles{
  display: flex;
  white-space: pre-wrap;
}
.title{
  font-size: 28px;
}
.text{
  font-size: 16px;
}
.roles-text{
  color: rgba(243, 243, 243, 0.49);
}
.attr{
  border-radius: 8px;
  margin-left: 300px;
  padding: 10px 10px 10px 10px;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  white-space: pre-wrap;
  align-items: center;
}
.circle{
  margin-right: 8px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
.circle-red{
  background: rgb(244, 67, 54);
}
.circle-green{
  background: rgb(57, 212, 2);
  margin-left: 30px;
}
.circle-blue{
  background: rgb(1, 169, 244);
  margin-left: 30px;
}
.hero-skills{
  margin-left: 300px;
}
.img-skills{
  width: 40px;
  height: auto;
  margin-left: 10px;
}
</style>