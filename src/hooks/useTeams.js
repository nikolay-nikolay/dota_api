import {onMounted, reactive,} from 'vue';

export function useTeams() {
  let teams = reactive([])
    const fetching = async () => {
        try {
          const api_url = "https://api.opendota.com/api/teams"
          const response = await fetch(api_url)
          const data = await response.json()
          
          for (let i = 0; i < data.length; i++){
            teams.push({
                team_id: data[i].team_id,
                rating: data[i].rating,
                wins: data[i].wins,
                losses: data[i].losses,
                last_match_time: data[i].last_match_time,
                name: data[i].name || 'undefined',
                logo_url: data[i].logo_url
            })
            
          }
         
        } catch (e) {
          console.log(e)
        } finally {
        }
      }
   
    onMounted(fetching)

    return {
      teams,
    }
}