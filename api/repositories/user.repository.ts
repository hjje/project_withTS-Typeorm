import { users } from "../entities/user.entity";
import appDataSource from "../dataSource";

const userRepository = appDataSource.getRepository(users)

// test code for finding user info
const getUserInfo = async(userId) => {
	const userInfo = await appDataSource.getRepository(users)
    const result = userInfo.findOneBy({
        id: userId
    })
    return result
}

const getUserByKakaoId = async(id: number): Promise<users> => {
    const user = await userRepository.findOneBy(
        {
            social_id: id,
        }
    )
    return user
}

const checkRegisteredAlready = async(kakaoId: number): Promise<any> => {
        const user = await userRepository.findOneBy(
            {
                social_id: kakaoId
            }
        )
        return user
}

const createUser = async(kakaoId: number, email: string, profile_image: string, nickname: string): Promise<void> => {
    try{
        const user = userRepository.create(
            {
                social_id: kakaoId,
                email,
                profile_image_url: profile_image,
                name: nickname
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
