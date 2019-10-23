import { get } from './helpers'

const getProducIndustry = get('api/product_industry')
const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')

export {
    getProducIndustry,
    getSeller,
    getGoods,
    getRatings
}
