import { EntityRepository, Repository }from 'typeorm';
import { Product }from '../entities/product.entity';

const whereSet = {
    DEFAULT : '',
    TRUE : 'WHERE'
}
const andSet = {
    DEFAULT : '',
    TRUE : 'AND'
}
const joinSet = {
    DEFAULT : '',
    OPTIONS : 'LEFT JOIN options AS op ON op.product_id = p.id',
    BIDS : 'LEFT JOIN bids AS b ON op.id = b.option_id'
}

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public async getAllProducts(categoryId, size, orderBy): Promise<Product> {
        try{
        if(!categoryId && !size) 
            {joinOption = 'DEFAULT'; where = 'DEFAULT'; categoryId = 'DEFAULT'; and = 'DEFAULT'; size = 'DEFAULT'; and2 = 'DEFAULT';}
        else if(categoryId && !size)
            {joinOption = 'DEFAULT'; where = 'TRUE'; categoryId; and = 'DEFAULT'; size = 'DEFAULT'; and2 = 'DEFAULT';}
        else if(size && !categoryId) 
            {joinOption = 'OPTIONS'; where = 'TRUE'; categoryId = 'DEFAULT'; and = 'DEFAULT'; size; and2 = 'TRUE';}
        else if(categoryId && size) 
            {joinOption = 'OPTIONS'; where = 'TRUE'; categoryId; and = 'TRUE'; size; and2 = 'TRUE';}
        }
    } catch {
        
    }
}