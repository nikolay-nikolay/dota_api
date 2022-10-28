<template>
  <!-- <p>{{name}}</p> -->
  <div class="container title-content">
    <div class="img">
      <img src="" alt="">
    </div>
    <div class="about-hero">
      <p>{{name}}</p>
      <p></p>
    </div>
    <div class="hero-attr">
      <div class="attr">

      </div>
      <div class="hero-skills">
        <img src="" alt="" class="img-skills">
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
   
setup(){
    const route = useRoute();
    
    return {
      route
    }
  },
  data() {
    return {
      id: '',
      name: ''
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
          this.name = el.name
        }
      })
    }
  },
  mounted() {
    this.getHero(this.route.params.id)
  }

}

</script>

<style scoped>
.container{
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>