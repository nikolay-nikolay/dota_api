import {onMounted, reactive, } from 'vue';

export function usePublickMatches() {
  let matches = reactive([])
  // let hero = reactive([])
    const fetching = async () => {
        try {
          const api_url = "https://api.opendota.com/api/publicMatches"
          // const api_heroes = 'https://api.opendota.com/api/heroStats'
          const response = await fetch(api_url)
          // const responseHero = await fetch(api_heroes)
          const data = await response.json()
          // const dataHero = await responseHero.json()

          for (let i = 0; i < data.length; i++){
            matches.push({
            id: data[i].match_id,
            duration: data[i].duration,
            radiant_team: data[i].radiant_team,
            dire_team: data[i].dire_team,
            radiant_win: data[i].radiant_win,
            })
            // hero.push({
            //   heroId: dataHero[i].heroId,
            //   icon: "https://api.opendota.com" + data[i].icon.slice(0, -1),
            // })
          }

        } catch (e) {
          console.log(e)
        } finally {
        }
      }
    
    onMounted(fetching)
    return {
      matches, // hero
    }
}









//
// import {onMounted, reactive, } from 'vue';
//
// export function usePublickMatches() {
//   let matches = reactive([])
//   const fetching = async () => {
//     try {
//       const api_url = "https://api.opendota.com/api/publicMatches"
//       const response = await fetch(api_url)
//       const data = await response.json()
//
//       for (let i = 0; i < data.length; i++){
//         matches.push({
//           id: data[i].match_id,
//           duration: data[i].duration,
//           radiant_team: data[i].radiant_team,
//           dire_team: data[i].dire_team,
//           radiant_win: data[i].radiant_win,
//         })
//       }
//     } catch (e) {
//       console.log(e)
//     } finally {
//     }
//   }
//
//   onMounted(fetching)
//   return {
//     matches,
//   }
// }
