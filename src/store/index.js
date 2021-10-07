import {createStore} from 'vuex'
import movie from './movie'

export default createStore({
    state(){//함수로 반환 왜? 데이터기 떄문에.
        return{
            msg:'movie',
            oricount:1
        }
    },
    getters:{

    },
    mutations:{//데이터를 수정하는 권한

    },
    actions:{//constext=>state,getters,commit, dispatch 

    },
    modules:{
        movie
    }
    
})