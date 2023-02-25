import { DataSource } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
import { Option } from './entities/option.entity';
import { Order } from './entities/order.entity';
import { Post } from './entities/post.entity';
import { Product } from './entities/product.entity';
import { Product_Image } from './entities/product_image.entity';
import { Status } from './entities/status_entity';
import { Type } from './entities/type.entity';
import { User } from './entities/user.entity';

const appDataSource = new DataSource(
    {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'jung4038',
        database: 'icecream',
        entities: [User, Post, Type, Status, Product, Product_Image, Order, Option, Category, Brand, Bid],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        migrationsRun: true
    }
)

export default appDataSource;