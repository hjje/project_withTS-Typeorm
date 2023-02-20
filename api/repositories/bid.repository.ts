import { EntityRepository, Repository } from 'typeorm';
import { Bid } from '../entities/bid.entity';

@EntityRepository(Bid)
export class BidRepository extends Repository<Bid> {}