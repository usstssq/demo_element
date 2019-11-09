import { get } from './helpers'

const getProducIndustry = get('api/product_industry')
const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')
const getCountryInfo = get('api/country_info')
const getSenHadRes = get('api/second_hand_resource')
const getAfricaMap = get('api/africa_map')

export {
    getProducIndustry,
    getSeller,
    getGoods,
    getRatings,
    getCountryInfo,
    getSenHadRes,
    getAfricaMap
}
