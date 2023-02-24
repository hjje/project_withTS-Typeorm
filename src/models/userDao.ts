import { AppDataSource as dataSource } from './data-source'


const getUserByKakaoId = async (id: string) => {
	const result = await dataSource.query(`
		SELECT 
			id,
            nickname,
            email
		FROM users
		WHERE social_id = ?
        `, [id]
	)
	return result[0]
}

const checkRegisteredAlready = async (kakaoId: string) => {
    try{
        const [res] = await dataSource.query(`
            SELECT EXISTS(
                SELECT id FROM users
                WHERE social_id = ?
            ) AS registered
            `, [kakaoId]
        )

        return !!parseInt(res.registered)
    } catch {
        throw new Error('checkRegisteredAlreadyErr')
    }
}

const createUser = async (kakaoId: string, email:string, profileImage: string, nickname: string) => {
    try {
        await dataSource.query(`
            INSERT INTO users(
                social_id,
                email,
                profile_image_url,
                nickname
            ) VALUES (
                ?,
                ?,
                ?,
                ?
            )`, [kakaoId, email, profileImage, nickname]
        )
    } catch {
        throw new Error('createUserErr')
    }
}

export default {
    getUserByKakaoId,
    checkRegisteredAlready,
    createUser
}