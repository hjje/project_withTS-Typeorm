import { EntityRepository, Repository } from 'typeorm';
import { bids } from '../entities/bid.entity';

@EntityRepository(bids)
export class BidRepository extends Repository<bids> {}