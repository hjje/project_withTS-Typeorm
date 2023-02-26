import { EntityRepository, Repository }  from 'typeorm';
import { product_images } from '../entities/product_image.entity';

@EntityRepository(product_images)
export class Prouduct_ImageRepository extends Repository<product_images> {}