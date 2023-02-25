// import { Request, Response } from 'express'
// import productService from '../services/productService'
// import { catchAsync } from '../utils/error'
// interface Data {
// }
// interface Result {
// }
// interface Product {
//     categoryId: number,
//     size: string,
//     orderBy: string
// }
// const getAllProducts = catchAsync(async(req: Request, res:Response): Promise<void> => {
//     const {categoryId, size, orderBy} = req.query;
//     const data = await productService.getAllProducts(categoryId, size, orderBy)
//     res.status(200).json({data})    
// })
// const getProductById = catchAsync(async(req:Request, res:Response): Promise<void> => {
//     const productId = +req.params.productId
//     const result = await productService.getProductById(productId)
//     res.status(200).json({ data: result })
// })
// export default {
//     getAllProducts,
//     getProductById
// }
