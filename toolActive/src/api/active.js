import axios from './index'

export const getActiveTags = (data) => {
    return axios.request({
        url: '/util/activity/tagPageForNoUser',
        method: 'post',
        data: data
    })
}

export const getActiveList = (data) => {
    return axios.request({
        url: '/util/activity/pageForNoUser',
        method: 'post',
        data: data
    })
}

export const getActiveInfo = (data) => {
    return axios.request({
        url: '/util/activity/info',
        method: 'post',
        data: data
    })
}