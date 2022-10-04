import {ref, onMounted} from 'vue';

export function useHeroes() {
    const heroesImage = ref([])
    const name = ref([])
    const proWinrate = ref([])
    const proPercent = ref([])
    const heroId = ref([])
    const fetching = async () => {
        try {
          const api_url = "https://api.opendota.com/api/heroStats"
          const response = await fetch(api_url)
          const data = await response.json()
          
          for (let i = 0; i <= data.length; i++){
            heroId.value.push(data[i].id)
            heroesImage.value.push("https://api.opendota.com" + data[i].icon.slice(0, -1))
            name.value.push(data[i].localized_name)
            proPercent.value = data[i].pro_win / data[i].pro_pick * 100 
            proWinrate.value.push(parseInt(proPercent.value * 10) / 10) 
          }
                  
        } catch (e) {
          console.log(e)
        } finally {
          
        }
      }
      
    onMounted(fetching)

    return {
        name,
        proWinrate,
        heroesImage,
        heroId,
    }
}