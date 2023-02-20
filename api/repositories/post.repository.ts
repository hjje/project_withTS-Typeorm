import { EntityRepository, Repository }  from 'typeorm';
import { Post } from '../entities/post.entity';

enum StyleFilterSet {
    trending = 'order by p.likes DESC',
    newest   = 'order by p.created_at DESC'
  }

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    public async getPostByFilter(filterBy: keyof StyleFilterSet): Promise<Post> {

        const options: Object = {
            relations: ["user"],
            select: [
                "post_image_url",
                "profile_image_url",
                "nickname",
                "likes",
                "feed_text",
                "created_at"
            ],
            order: {
                [StyleFilterSet[filterBy]]: 'DESC'
            }
        }
        return await this.findOneBy(options)
    }
}