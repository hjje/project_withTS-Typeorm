import productDao from '../models/productDao'

const getProductById = async (productId: any) => {
    try {
        const productData = await productDao.getConstantProductDataById(productId)
        const tradeAll = await productDao.getProductTradeDataById(productId)
        const chartData = await productDao.getProductChartDataById(productId)

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

const getAllProducts = async (categoryId: any, size: any, orderBy: any) => {
    return await productDao.getAllProducts(categoryId, size, orderBy)
}

export default {
    getProductById,
    getAllProducts
}