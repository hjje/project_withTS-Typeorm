const orderService = require('../services/orderService')
const { catchAsync } = require('../utils/error')
const datasource = require('../models/data-source')

const addBuyOrder = catchAsync(async (req, res) => {
    const {productId, size, price} = req.body;
    console.log(req.body)
    if (!productId || !price) { 
        throw new Error('keyErr')
    }
    const userId = req.user.id
    await orderService.addBuyOrder(productId, size, price, userId)
    res.status(201).json({ data : "ORDER_COMPLETE" })

    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
      }
    await res.writehead(200,headers)

    const data = `data: ${JSON.stringify(result.rows[0])}\n\n`
    
    setInterval(() => {
        // Query the database for updated data
       datasource.query(
            'SELECT * FROM order where status_id = 3 and user_id = ?'
            ,[userId]
            ,(err, result) => {
          if (err) {
            console.error(err)
          } else if(result) {
            // Send SSE event to client with updated data
            res.write(data)
          }
        })
      }, 1000)
    })



const addBuyBid = catchAsync(async (req, res) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addBuyBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

const addSellOrder = catchAsync(async (req, res) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellOrder(productId, size, price, userId)
    res.status(201).json({ data : "SELL_COMPLETE" })
})

const addSellBid = catchAsync(async (req, res) => {
    const {productId, size, price} = req.body;
    const userId = req.user.id
    await orderService.addSellBid(productId, size, price, userId)
    res.status(201).json({ data : "BID_ADDED" })
})

module.exports = {
    addBuyOrder,
    addBuyBid,
    addSellOrder,
    addSellBid
}