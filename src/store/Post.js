import axios from "axios"

const Post = {
    state: {
        postBlock: {}
    },
    getters: {
        PostStore(state) {
            return state.postBlock
        }
    },
    mutations: {
        PostsGETBlock(state,value) {
            state.postBlock=value 
        }
    },
    actions: {
        AxsiosStorePost({commit}) {
                axios('/api/data.json',{
                    method:'GET'
                })
                
                .then((res)=>{
                    commit('PostsGETBlock',res.data.posts)
                    return res.data.posts
                })
        }
    },
}

export default Post