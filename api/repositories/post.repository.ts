import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import appDataSource from '../dataSource';

const styleFilterSet = {
    'trending' : 'p.likes',
    'newest'   : 'p.created_at'
  }

const postRepository = appDataSource.getRepository(Post)

const getPostByFilter = async(filterBy): Promise<Object> => {
 
  const post = await postRepository.createQueryBuilder('p')
    .select([
      'p.post_image_url',
      'u.profile_image_url',
      'u.nickname',
      'p.likes',
      'p.feed_text',
      'p.created_at'
    ])
    .leftJoin(User, 'u', 'p.user_id = u.id')
    .orderBy(styleFilterSet[filterBy], 'DESC')
    .getMany()
  return post;
}

export {
    getPostByFilter
}
