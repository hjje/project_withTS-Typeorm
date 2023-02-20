import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public async getUserByKakaoId(id: number): Promise<User> {
        const result = await this.findOne(
            {
                where: {
                    social_id: id
                }
            }
        )
        return result[0]
    }

    public async checkRegisteredAlready(kakaoId: number): Promise<User> {
        try{
            const user = await this.findOne(
                { 
                    where : {
                        social_id: kakaoId
                    }
                }
            )
            return user
        } catch {
            throw new Error('checkRegisteredAlreadyErr')
        }
    }

    public async createUser(kakaoId: number, email: string, profile_image: string, nickname: string): Promise<void> {
        try{
            await this.findOne(
                {
                    where: {
                        social_id: kakaoId,
                        email,
                        profile_image_url: profile_image,
                        nickname
                    }
                }
            )
        } catch {
            throw new Error('createUserErr')
        }
    }
}
