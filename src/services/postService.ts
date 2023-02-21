import postDao from '../models/postDao'
const getPostByFilter = async (filterBy: any) => {
  return await postDao.getPostByFilter(filterBy)
}
const getPostDetail = async(postId: any) => {
  return await postDao.getPostDetail(postId)
}
export default {
  getPostByFilter,
  getPostDetail
 };
