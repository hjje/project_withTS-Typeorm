import { EntityRepository, Repository } from 'typeorm';
import { brands } from '../entities/brand.entity';

@EntityRepository(brands)
export class BrandRepository extends Repository<brands> {}