import { User } from "../entities/user.entity";
import appDataSource from "../dataSource";

const userRepository = appDataSource.getRepository(User)

// test code for finding user info
const getUserInfo = async(userId) => {
	const userInfo = await appDataSource.getRepository(User)
    const result = userInfo.findOneBy({
        id: userId
    })
    console.log(result)
    return result
}

const getUserByKakaoId = async(id: string): Promise<User> => {
    const user = await userRepository.findOneBy(
        
        {
            social_id: id,
        }
    )
    return user
}

const checkRegisteredAlready = async(kakaoId: string): Promise<any> => {
        const user = await userRepository.findOneBy(
            {
                social_id: kakaoId
            }
        )
        console.log(user)
        return user
}

const createUser = async(kakaoId: string, email: string, profile_image: string, nickname: string): Promise<void> => {
    try{
        const user = userRepository.create(
            
            {
                social_id: kakaoId,
                email,
                profile_image_url: profile_image,
                nickname
            }
        )
        await userRepository.save(user)
    } catch {
        throw new Error('createUserErr')
    }
}

export {
    getUserInfo,
    getUserByKakaoId,
    checkRegisteredAlready,
    createUser
}
