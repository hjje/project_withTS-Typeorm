import * as productRepository from '../repositories/product.repository'

const getProductById = async(productId): Promise<Object> => {
    const productData = await productRepository.getConstantProductDataById(productId)
    const tradeAll = await productRepository.getProductTradeDateById(productId)
    const chartData = await productRepository.getProductChartDataById(productId)
    
    return {
        productData,
        tradeAll: tradeAll[0],
        tradeLimit: tradeAll[1],
        chartData
    }
}

const getAllProducts = async(categoryId, size, orderBy) => {
    return await productRepository.getAllProducts(categoryId, size, orderBy)
}

export {
    getProductById,
    getAllProducts
}
