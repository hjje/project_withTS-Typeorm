import * as postRepository from '../repositories/post.repository'

const getPostByFilter = async(filterBy): Promise<Object> => {
    return postRepository.getPostByFilter(filterBy);
}

export { getPostByFilter };