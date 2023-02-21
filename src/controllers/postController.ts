import postService from '../services/postService';
import { catchAsync } from '../utils/error';

const getPostByFilter = catchAsync(async (req: { query: { filterBy: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { posts: any; }): void; new(): any; }; }; }) => {
    const filterBy = req.query.filterBy;

      if (!filterBy) throw new Error('keyErr')

    const posts = await postService.getPostByFilter(filterBy);

    res.status(200).json({ posts });
})

const getPostDetail = catchAsync(async (req: { params: { postId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: any; }): void; new(): any; }; }; }) => {
  const postId = req.params.postId;
  const result = await postService.getPostDetail(postId)
  res.status(200).json({ data : result });
})

export default { 
  getPostByFilter,
  getPostDetail

};