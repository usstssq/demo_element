import { get,post } from './helpers'

const getProducIndustry = get('trade/product_industry')
const getSeller = get('trade/seller')
const getGoods = get('trade/goods')
const getRatings = get('trade/ratings')
// const getCountryInfo = get('trade/country_info')
const getSenHadRes = get('trade/second_hand_resource')
// const getAfricaMap = get('trade/africa_map')
const getNews = get('trade/news')
const getCompanyInfo = get('trade/company_info')
const login = post('trade/login')
const getCountryInfo = post('trade/main_content/1/get_country_info')
const getAfricaMap = post('trade/get_map')
const getProdList = post('trade/main_content/1/get_prod_list')
const getProdVipPanel = post('trade/main_content/1/get_prod_vip_panel')
const getEquipList = post('trade/main_content/1/get_equip_list')

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
    login,
    getProdList,
    getProdVipPanel
}
