import axios from "axios"

const Info = {
    state: {
        informations: {}
    },
    getters: {
        InformationsStore(state) {
            return state.informations
        }
    },
    mutations: {
        INformationGETBlock(state,value) {
            state.informations=value 
        }
    },
    actions: {
        AxsiosStoreInformations({commit}) {
                axios('/api/data.json',{
                    method:'GET'
                })
                
                .then((res)=>{
                    commit('INformationGETBlock',res.data.promo)
                    return res.data.promo
                })
        }
    },
}

export default Info