import axios from 'axios'

const urlMap = {
  development: '/',
  // development: 'http://ustbhuangyi.com/sell/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
// const baseUrl = '/apis/'
const ERR_OK = 0

export function get(){
        return function(url,params = {}){
            return axios.get(baseUrl + url, {
                params
            }).then((res) => {
                const {errno, data} = res.data
                if (errno === ERR_OK){
                    return data
                }
            }).catch((e)=>{})
        }
    }
export function post(){
        return function(url,params){
            return axios.post(baseUrl + url, params
            ).then((res) => {
                const {header, data} = res.data
                if (header.status === ERR_OK){
                    return data
                }
            }).catch((e)=>{})
        }
    }
