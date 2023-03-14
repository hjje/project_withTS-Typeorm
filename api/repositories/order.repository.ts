import dataSource from '../dataSource'
const queryRunner = dataSource.createQueryRunner()

const addBuyOrder = async (productId: number, size: string, price: number, userId: number) => {
    try {
        await queryRunner.connect()
        await queryRunner.startTransaction()

        const getBidData = await queryRunner.manager.createQueryBuilder()
            .select('b.id', 'id')
            .addSelect('b.user_id', 'user_id')
            .from('bids', 'b')
            .leftJoin('b.options', 'op')
            .leftJoin('op.product', 'p')
            .where('b.price = :price', { price })
            .andWhere('b.type_id = 2')
            .andWhere('op.size = :size', { size })
            .andWhere('p.id = :productId', { productId })
            .andWhere('b.id NOT IN (SELECT bid_id FROM orders)')
            .orderBy('b.created_at', 'ASC')
            .getRawOne()

        if (getBidData.user_id == userId) {
            throw new Error('sameUserErr')
        }
        
        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into('orders')
            .values({
                buyer_id: userId,
                seller_id: getBidData.user_id,
                bid_id: getBidData.id,
                amount: price,
                status_id: 3
            })
            .execute()
            
        await queryRunner.commitTransaction()
    } catch (err) {
        await queryRunner.rollbackTransaction()
        if (err.message == 'sameUserErr') throw err
        throw new Error('addBuyOrderErr')
    }
}

const addBuyBid = async (productId: number, size: string, price: number, userId: number) => {

    try {
        const getOptionId = await dataSource.manager.createQueryBuilder()
            .select('op.id', 'id')
            .from('options', 'op')
            .leftJoin('op.product', 'p')
            .where('p.id = :productId', { productId })
            .andWhere('op.size = :size', { size })
            .getRawOne()

        await dataSource.manager.createQueryBuilder()
            .insert()
            .into('bids')
            .values({
                user_id: userId,
                type_id: 1,
                option_id: getOptionId.id,
                price: price
            })
            .execute()
    } catch {
        throw new Error('addBuyBidErr')
    }
}
const addSellOrder = async (productId: number, size: string, price: number, userId: number) => {
    try {
        await queryRunner.connect()
        await queryRunner.startTransaction()

        const getBidData = await queryRunner.manager.createQueryBuilder()
            .select('b.id', 'id')
            .addSelect('b.user_id', 'user_id')
            .from('bids', 'b')
            .leftJoin('b.options', 'op')
            .leftJoin('op.product', 'p')
            .where('b.price = :price', { price })
            .andWhere('b.type_id = 1')
            .andWhere('op.size = :size', { size })
            .andWhere('p.id = :productId', { productId })
            .andWhere('b.id NOT IN (SELECT bid_id FROM orders)')
            .orderBy('b.created_at', 'ASC')
            .getRawOne()

        if (getBidData.user_id == userId) {
            throw new Error('sameUserErr')
        }
        
        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into('orders')
            .values({
                buyer_id: getBidData.user_id,
                seller_id: userId,
                bid_id: getBidData.id,
                amount: price
            })
            .execute()
            
        await queryRunner.commitTransaction()
    } catch (err) {
        await queryRunner.rollbackTransaction()
        if (err.message == 'sameUserErr') throw err
        throw new Error('addSellOrderErr')
    }
}

const addSellBid = async (productId: number, size: string, price: number, userId: number) => {
    try {
        const getOptionId = await dataSource.manager.createQueryBuilder()
            .select('op.id', 'id')
            .from('options', 'op')
            .leftJoin('op.product', 'p')
            .where('p.id = :productId', { productId })
            .andWhere('op.size = :size', { size })
            .getRawOne()

        await dataSource.manager.createQueryBuilder()
            .insert()
            .into('bids')
            .values({
                user_id: userId,
                type_id: 2,
                option_id: getOptionId.id,
                price: price
            })
            .execute()
    } catch {
        throw new Error('addSellBidErr')
    }
}


export {
    addBuyBid,
    addBuyOrder,
    addSellOrder,
    addSellBid
}