import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1677051715691 implements MigrationInterface {
    name = 'Migration1677051715691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nickname\` varchar(100) NOT NULL,
                \`email\` varchar(100) NOT NULL,
                \`password\` int NOT NULL,
                \`profile_image_url\` varchar(1000) NOT NULL,
                \`address\` varchar(500) NOT NULL,
                \`point\` decimal(10, 2) NOT NULL,
                \`social_id\` bigint NOT NULL,
                \`social_type_id\` int NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    }

}
