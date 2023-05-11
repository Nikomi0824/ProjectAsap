import axios from "axios"

const Skills = {
    state: {
        skill: {}
    },
    getters: {
        SkillsStore(state) {
            return state.skill
        }
    },
    mutations: {
        SkillsGETBlock(state,value) {
            state.skill=value 
        }
    },
    actions: {
        AxsiosStoreSkills({commit}) {
                axios('/api/data.json',{
                    method:'GET'
                })
                
                .then((res)=>{
                    commit('SkillsGETBlock',res.data.skills)
                    return res.data.skills
                })
        }
    },
}

export default Skills