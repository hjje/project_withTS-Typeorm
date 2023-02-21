import productService from '../services/productService'
import { catchAsync } from '../utils/error'

const getProductById = catchAsync(async (req: { params: { productId: string | number } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: { productData: any; tradeAll: any; tradeLimit: any; chartData: any } }): void; new(): any } } }) => {
    const productId = +req.params.productId
    const result = await productService.getProductById(productId)
    res.status(200).json({ data : result })
})

const getAllProducts = catchAsync(async (req: { query: { categoryId: any; size: any; orderBy: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: any }): void; new(): any } } }) => {
    const {categoryId, size, orderBy} = req.query
        const data = await productService.getAllProducts(categoryId, size, orderBy)
        res.status(200).json({ data })
})

export default {
    getProductById,
    getAllProducts
}