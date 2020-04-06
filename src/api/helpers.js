import axios from 'axios'

const urlMap = {
  development: '/',
  // development: 'http://ustbhuangyi.com/sell/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
// const baseUrl = '/apis/'
const ERR_OK = 0


// var instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });


//     this.axios({
//         method: "POST",
//         url: `${API_HOST}/api/bind/index`,
//         data: obj,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }).then(function(res) {
//         console.log(res);
//     });

export function get(){
        return function(url,params = {}){
            return axios({
                method: "GET",
                url: `${url}`,
                data: params,
                headers: {
                    'token': '1111111'
                }
            }).then(function(res) {
                if(res.data.header.status==0){
                    return res.data.data
                }
            }).catch((e)=>{});
        }
    }

export function post(){
        return function(url,params = {}){
            console.log(`url:${url}`)
            return axios({
                method: "POST",
                url: `${url}`,
                data: params,
                headers: {
                    'token': '1111111'
                }
            }).then(function(res) {
                if(res.data.header.status==0){
                    return res.data.data
                }
            }).catch((e)=>{});
        }
    }

// export function postImg(){
//         return function(url,params){
//             return axios.post(baseUrl + url, params,{responseType: 'arraybuffer'}
//             ).then(res => {
//                 let imgUrl = 'data:image/jpeg;base64,' + new Buffer(res.data, 'binary').toString('base64');
//                 return imgUrl
//             }).catch((e)=>{})
//         }
//     }

export function postImg(){
        return function(url,params){
            return axios({
                method: "POST",
                url: `${baseUrl + url}`,
                data:params,
                headers: {
                    'token': '1111111'
                },
                responseType:'arraybuffer'
            }).then(function(res) {
                let imgUrl = 'data:image/jpeg;base64,' + new Buffer(res.data, 'binary').toString('base64');
                return imgUrl
            }).catch((e)=>{});
        }
    }




