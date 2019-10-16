import axios from 'axios'

const urlMap = {
    development: '/',
    production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url){
    return function(params = {}){
        return axios.get(baseUrl + url, {
            params
        }).then((res) => {
            const {error, data} = res.data
            if (error === ERR_OK){
                return data
            }
        }).catch((e)=>{})
    }
}
