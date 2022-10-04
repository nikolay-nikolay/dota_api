import axios from "axios";

export const postModule = {
    state: () => ({
      
    }),
    mutations: {
        
    },

    actions: {
        async fetchPosts({state}) {
            try {
             
                const response = await axios.get('https://api.opendota.com/api', {
                    params: {
                        _id: state.id,
                        _heroe: state.heroe
                    },
                    
                });
                
            } catch (e) {
                console.log('ds')
            } finally {
                
            }
        },
        
    },
    namespaced: true
}