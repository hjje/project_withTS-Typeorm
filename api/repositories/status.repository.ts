import { EntityRepository, Repository }from 'typeorm';
import { Status } from '../entities/status_entity'

@EntityRepository(Status)
export class StatusRepository extends Repository<Status> {}