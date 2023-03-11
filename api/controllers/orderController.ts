import { Request, Response } from 'express';
import * as orderService from '../services/orderService';
import { catchAsync } from '../utils/error';

interface userType extends Request {
    user : {id : number }
    
}

const addBuyOrder = catchAsync(async (req:userType, res:Response): Promise<void> => {
    const {productId, size, price} = req.body;
    if (!productId || !price) { 
        throw new Error('keyErr')
    }
    const userId = req.user.id
    await orderService.addBuyOrder(productId, size, price, userId)
    res.status(201).json({ data : "ORDER_COMPLETE" })
})

const addBuyBid = catchAsync(async (req:userType, res:Response): Promise<void> => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addBuyBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

const addSellOrder = catchAsync(async (req:userType, res:Response): Promise<void> => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellOrder(productId, size, price, userId)
    res.status(201).json({ data : "SELL_COMPLETE" })
})

const addSellBid = catchAsync(async (req:userType, res:Response): Promise<void> => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

export {
    addBuyOrder,
    addBuyBid,
    addSellOrder,
    addSellBid
}