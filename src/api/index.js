import { get,post } from './helpers'

const getProducIndustry = get('trade/product_industry')
const getSeller = get('trade/seller')
const getGoods = get('trade/goods')
const getRatings = get('trade/ratings')
const getCountryInfo = get('trade/country_info')
const getSenHadRes = get('trade/second_hand_resource')
const getAfricaMap = get('trade/africa_map')
const getNews = get('trade/news')
const getCompanyInfo = get('trade/company_info')
const login = post('trade/login')

export {
    getProducIndustry,
    getSeller,
    getGoods,
    getRatings,
    getCountryInfo,
    getSenHadRes,
    getAfricaMap,
    getNews,
    getCompanyInfo,
    login
}
