import { EntityRepository, Repository } from 'typeorm';
import { options } from '../entities/option.entity'; 

@EntityRepository(options)
export class OptionRepository extends Repository<options> {}