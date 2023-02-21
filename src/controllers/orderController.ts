import orderService from '../services/orderService';
import { catchAsync } from '../utils/error';

const addBuyOrder = catchAsync(async (req: { body: { productId: any; size: any; price: any; }; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: string; }): void; new(): any; }; }; }) => {
    const {productId, size, price} = req.body;
    if (!productId || !price) { 
        throw new Error('keyErr')
    }
    const userId = req.user.id
    await orderService.addBuyOrder(productId, size, price, userId)
    res.status(201).json({ data : "ORDER_COMPLETE" })
})

const addBuyBid = catchAsync(async (req: { body: { productId: any; size: any; price: any; }; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: string; }): void; new(): any; }; }; }) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addBuyBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

const addSellOrder = catchAsync(async (req: { body: { productId: any; size: any; price: any; }; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: string; }): void; new(): any; }; }; }) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellOrder(productId, size, price, userId)
    res.status(201).json({ data : "SELL_COMPLETE" })
})

const addSellBid = catchAsync(async (req: { body: { productId: any; size: any; price: any; }; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: string; }): void; new(): any; }; }; }) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

export default {
    addBuyOrder,
    addBuyBid,
    addSellOrder,
    addSellBid
}