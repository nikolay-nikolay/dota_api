import {onMounted, reactive} from 'vue';

export function useHeroes() {
  const stats = reactive([])
  
    const fetching = async () => {
        try {
          const api_url = "https://api.opendota.com/api/heroStats"
          const response = await fetch(api_url)
          const data = await response.json()
          
          for (let i = 0; i <= data.length; i++){
            stats.push({
              id: data[i].id,
              icon: "https://api.opendota.com" + data[i].icon.slice(0, -1),
              name: data[i].localized_name,
              pick_pro: data[i].pro_pick,
              ban_pro: data[i].pro_ban,
              winrate_pro: parseInt(data[i].pro_win / data[i].pro_pick * 100 * 10) / 10,
              pick_crusarder: data[i]['1_pick'] + data[i]['2_pick'] + data[i]['3_pick'],
              pick_legends: data[i]['4_pick'] + data[i]['5_pick'],
              pick_immortal :data[i]['6_pick'] + data[i]['7_pick'] + data[i]['8_pick'] ,
              pick_turbo: data[i].turbo_picks,
              winrate_crusarder: parseInt(  (data[i]['1_win'] + data[i]['2_win'] + data[i]['3_win']) / (data[i]['1_pick'] + data[i]['2_pick'] + data[i]['3_pick']) * 100 *10 ) / 10,
              winrate_legends: parseInt(  (data[i]['4_win'] + data[i]['5_win'] ) / (data[i]['4_pick'] + data[i]['5_pick']) * 100 *10 ) / 10,
              winrate_immortal: parseInt(  (data[i]['6_win'] + data[i]['7_win'] + data[i]['8_win']) / (data[i]['6_pick'] + data[i]['7_pick'] + data[i]['8_pick']) * 100 *10 ) / 10,
              winrate_turbo: parseInt(data[i].turbo_wins / data[i].turbo_picks * 100 * 10) / 10,
      
            })
          }
        } catch (e) {
          console.log(e)
        } finally {
          
        }
      }
      
    onMounted(fetching)

    return {
       stats,
    }
}