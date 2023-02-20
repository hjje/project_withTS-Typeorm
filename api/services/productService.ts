import appDataSource from "../dataSource";
import { ProductRepository } from "../repositories/product.repository";

const productRepository = appDataSource.getCustomRepository(ProductRepository)

const getProductById = async(productId): Promise<Object> => {
    
    try{
        const productData = await productRepository.getConstantProductDataById(productId)
        const tradeAll = await productRepository.getProductTradeDataById(productId)
        const chartData = await productRepository.getProductChartDataById(productId)

        return {
            productData,
            tradeAll: tradeAll[0],
            tradeLimit: tradeAll[1],
            chartData
        }
    } catch {
        throw new Error('getProductByIdErr')
    }
}

const getAllProducts = async(categoryId, size, orderBy): Promise<Array> => {
    return await productRepository.getAllProducts(categoryId, size, orderBy)
}

export default {
    getProductById,
    getAllProducts
}
