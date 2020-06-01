import axios from './index'

export const getUserInfo = (data) => {
    return axios.request({
        url: '/schedule/subject/getData',
        method: 'post',
        data: data
    })
}