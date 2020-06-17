import axios from './index'

export const getUserInfo = (data) => {
    return axios.request({
        url: '/schedule/subject/getData',
        method: 'post',
        data: data
    })
}

export const login = ({ userName, password }) => {
    return axios.request({
        url: '/login',
        method: 'post',
        data: {
            userNumber: userName,
            passWord: password
        }
    })
}

export const authorization = () => {
    return axios.request({
        url
    })
}