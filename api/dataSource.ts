import { DataSource } from 'typeorm';
import { bids} from './entities/bid.entity';
import { brands } from './entities/brand.entity';
import { categories } from './entities/category.entity';
import { options } from './entities/option.entity';
import { orders } from './entities/order.entity';
import { posts } from './entities/post.entity';
import { products } from './entities/product.entity';
import { product_images } from './entities/product_image.entity';
import { statuses } from './entities/status_entity';
import { types } from './entities/type.entity';
import { users } from './entities/user.entity';

const appDataSource = new DataSource(
    {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'Qwer!234',
        database: 'icecream',
        entities: [users, posts, types, statuses, products, product_images, orders, options, categories, brands, bids],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        migrationsRun: false
    }
)

export default appDataSource;