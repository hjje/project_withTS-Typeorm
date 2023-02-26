import { EntityRepository, Repository } from 'typeorm';
import { orders } from '../entities/order.entity';

@EntityRepository(orders)
export class OrderRepository extends Repository<orders> {}