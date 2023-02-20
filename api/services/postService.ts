import { PostRepository } from "../repositories/post.repository";
import appDataSource from "../dataSource";

const getPostByFilter = async(filterBy) => {

    const postRepository = appDataSource.getCustomRepository(PostRepository);
    return postRepository.getPostByFilter(filterBy);
}

export default { getPostByFilter };