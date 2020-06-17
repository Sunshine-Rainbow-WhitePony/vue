import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
    userName: "lison"
}
const getters = {
    firstLetter: (state) => {
        return state.userName.substr(0, 1);
    }
}
const mutations = {
    SET_USER_NAME(state, params) {
        state.userName = params;
    }
}
const actions = {
    //commit是触发一个mutation
    //state是当前文件的state
    //rootState是根目录(store)的state
    //dispatch用来触发一个action
    updateUserName({ commit, state, rootState, dispatch }) {
        //
    },
    login({ commit }, { userName, password }) {
        return new Promise((resolve, reject) => {
            login({ userName, password }).then(res => {
                if (res.status) {
                    res.token = "444555666"
                    setToken(res.token)
                    resolve()
                } else {
                    reject(new Error("错误"))
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
    authorization({ comit }, token) {
        return new Promise((resolve, reject) => {
            authorization().then(res => {
                if (res.code === 401) {
                    reject(new Error("错误"))
                } else {
                    setToken(res.token)
                    resolve()
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout() {
        setToken('')
    }
}

export default {
    namespaced: true, //使用命名空间
    state,
    getters,
    mutations,
    actions
}