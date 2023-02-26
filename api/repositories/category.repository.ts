import { EntityRepository, Repository } from 'typeorm';
import { categories } from '../entities/category.entity';

@EntityRepository(categories)
export class CategoryRepository extends Repository<categories> {}