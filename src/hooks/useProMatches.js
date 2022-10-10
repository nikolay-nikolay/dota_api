import {onMounted, reactive, ref} from 'vue';

export function useProMatches() {
  let matches = reactive([])
  let durationFormat = ref(0)
    const fetching = async () => {
        try {
          const api_url = "https://api.opendota.com/api/proMatches"
          const response = await fetch(api_url)
          const data = await response.json()
          
          for (let i = 0; i < data.length; i++){
            matches.push({
              id: data[i].match_id,
              duration: data[i].duration,
              radiant_name: data[i].radiant_name,
              dire_name: data[i].dire_name,
              league_name: data[i].league_name,
              radiant_win: data[i].radiant_win,

            })
            
          }
         
        } catch (e) {
          console.log(e)
        } finally {
        }
      }
   
    onMounted(fetching)

    return {
      matches,durationFormat
    }
}