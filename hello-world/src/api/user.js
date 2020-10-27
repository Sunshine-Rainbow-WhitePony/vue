import axios from './index'

export const getInfo = (data) => {
    return axios.request({
        url: '/getInfo',
        method: 'post',
        data: data
    })
}

export const login = ({ userName, password }) => {
    return axios.request({
        url: '/login',
        method: 'post',
        data: {
            userName,
            password
        }
    })
}

export const authorization = () => {
    return axios.request({
        url:'/authorization',
		method: 'get'
    })
}

export const getAllUser = (data) => {
	return axios.request({
		url: '/user/getAllUser',
		method: 'post',
		data: data
	})
}