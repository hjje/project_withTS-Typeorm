import { EntityRepository, Repository }  from 'typeorm';
import { Product_Image } from '../entities/product_image.entity';

@EntityRepository(Product_Image)
export class Prouduct_ImageRepository extends Repository<Product_Image> {}