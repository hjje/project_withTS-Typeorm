import { Request, Response } from 'express';
import postService from '../services/postService';
import { catchAsync } from '../utils/error';

// 'trending', 'newest'
interface Filter {

}

const getPostByFilter = catchAsync(async(req: Request, res: Response) => {
    // array?
    const filterBy = req.query.filterBy;

    if(!filterBy) throw new Error('keyErr')

    const posts = await postService.getPostByFilter(filterBy);
    return res.status(200).json({posts})
})

export default { getPostByFilter };