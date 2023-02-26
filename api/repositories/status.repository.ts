import { EntityRepository, Repository }from 'typeorm';
import { statuses } from '../entities/status_entity'

@EntityRepository(statuses)
export class StatusRepository extends Repository<statuses> {}