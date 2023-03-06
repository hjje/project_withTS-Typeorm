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

// test code for user info by kakao id
const getUserByKakaoId = async(id: number): Promise<users> => {
    const user = await userRepository.findOneBy(
        {
            social_id: id,
        }
    )
    return user
}

const checkRegisteredAlready = async(socialId: number|string, socialTypeId: number): Promise<any> => {

    const user = await userRepository.find(
        {
            where: {
                social_id: socialId,
                social_type_id: socialTypeId
            }    
        }
    )
    return user
}

const createUser = async(socialId: number, socialTypeId: number, email: string, profile_image: string, nickname: string): Promise<void> => {
    try{
        const user = userRepository.create(
            {
                social_id: socialId,
                social_type_id: socialTypeId,
                email,
                profile_image_url: profile_image,
                nickname: nickname
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
