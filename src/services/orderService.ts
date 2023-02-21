import orderDao from '../models/orderDao'

const addBuyOrder = async (productId: any, size: string, price: any, userId: any) => {
    if (size == '') {
        size = 'na'
    }
    return await orderDao.addBuyOrder(productId, size, price, userId)
}

const addBuyBid = async (productId: any, size: string, price: any, userId: any) => {
    if (size == '') {
            size = 'na'
        }
    return await orderDao.addBuyBid(productId, size, price, userId)
}

const addSellOrder = async (productId: any, size: string, price: any, userId: any) => {
    if (size == '') {
        size = 'na'
    }
    return await orderDao.addSellOrder(productId, size, price, userId)
}

const addSellBid = async (productId: any, size: string, price: any, userId: any) => {
    if (size == '') {
        size = 'na'
    }
    return await orderDao.addSellBid(productId, size, price, userId)
}

export default {
    addBuyOrder,
    addBuyBid,
    addSellOrder,
    addSellBid
}