import { get,post } from './helpers'

// const getProducIndustry = get('trade/product_industry')
// const getProducIndustry = get('api/product_industry')
const getProducIndustry = get()
// const getCountryInfo = get('trade/country_info')
// const getSenHadRes = get('trade/second_hand_resource')
// const getSenHadRes = get('api/second_hand_resource')
const getSenHadRes = get()
// const getAfricaMap = get('trade/africa_map')
// const getNews = get('trade/news')
// const getNews = get('api/news')
const getNews = get()
// const getCompanyInfo = get('trade/company_info')
// const getCompanyInfo = get('api/company_info')
const getCompanyInfo = post()
// const login = post('trade/login')
const login = post()
const getCountryInfo = post()
// const getCountryInfo = post('trade/main_content/1/get_country_info')
const getAfricaMap = post()
// const getProdList = post('trade/main_content/1/get_prod_list')
const getProdList = post()
// const getProdVipPanel = post('trade/main_content/1/get_prod_vip_panel')
const getProdVipPanel = post()
const getEquipList = post()
const getCompanyDetail = post()
const validateStatus = post()

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
    getProdVipPanel,
    getEquipList,
    getCompanyDetail,
    validateStatus
}
