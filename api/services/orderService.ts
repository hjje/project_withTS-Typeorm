import * as orderRepository from '../repositories/order.repository'

const addBuyOrder = async (productId, size, price, userId) => {
    if (size == '') {
        size = 'na'
    }
    return await orderRepository.addBuyOrder(productId, size, price, userId)
}

const addBuyBid = async (productId, size, price, userId) => {
    if (size == '') {
            size = 'na'
        }
    return await orderRepository.addBuyBid(productId, size, price, userId)
}

const addSellOrder = async (productId, size, price, userId) => {
    if (size == '') {
        size = 'na'
    }
    return await orderRepository.addSellOrder(productId, size, price, userId)
}

const addSellBid = async (productId, size, price, userId) => {
    if (size == '') {
        size = 'na'
    }
    return await orderRepository.addSellBid(productId, size, price, userId)
}

export {
    addBuyOrder,
    addBuyBid,
    addSellOrder,
    addSellBid
}