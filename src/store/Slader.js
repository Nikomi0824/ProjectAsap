import axios from "axios"

const Slader = {
    state: {
        slade: {}
    },
    getters: {
        SladerStore(state) {
            return state.slade
        }
    },
    mutations: {
        SladerGETBlock(state,value) {
            state.slade=value 
        }
    },
    actions: {
        AxsiosStoreSlader({commit}) {
                axios('/api/data.json',{
                    method:'GET'
                })
                
                .then((res)=>{
                    commit('SladerGETBlock',res.data.social)
                    return res.data.social
                })
        }
    },
}

export default Slader