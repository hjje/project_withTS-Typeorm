import { EntityRepository, Repository } from "typeorm";
import { types } from "../entities/type.entity";

@EntityRepository(types)
export class TypeRepository extends Repository<types> {

}