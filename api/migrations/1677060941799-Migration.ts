import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1677060941799 implements MigrationInterface {
    name = 'Migration1677060941799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`bids\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`user_id\` int NOT NULL,
                \`type_id\` int NOT NULL,
                \`option_id\` int NOT NULL,
                \`price\` decimal(10, 2) NULL,
                \`created_at\` timestamp NOT NULL,
                \`updated_at\` timestamp NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`brands\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(20) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`categories\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(100) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`options\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`size\` varchar(50) NULL,
                \`product_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`orders\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`status_id\` int NOT NULL,
                \`buyer_id\` int NOT NULL,
                \`seller_id\` int NOT NULL,
                \`bid_id\` int NOT NULL,
                \`amount\` decimal(10, 2) NULL,
                \`created_at\` timestamp NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`posts\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`user_id\` int NOT NULL,
                \`post_image_url\` varchar(1000) NULL,
                \`product_id\` int NOT NULL,
                \`likes\` int NULL,
                \`created_at\` timestamp NOT NULL,
                \`feed_text\` varchar(1000) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`products\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`brand_id\` int NOT NULL,
                \`en_name\` varchar(100) NULL,
                \`kr_name\` varchar(100) NULL,
                \`thumbnail_image\` varchar(1000) NULL,
                \`recent_trade_price\` decimal(10, 2) NULL,
                \`model_number\` varchar(100) NULL,
                \`release_date\` timestamp NOT NULL,
                \`color\` varchar(100) NULL,
                \`category_id\` int NOT NULL,
                \`original_price\` decimal(10, 2) NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`product_images\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`imgae_url\` varchar(1000) NULL,
                \`product_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`statuses\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(200) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`types\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(50) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nickname\` varchar(100) NOT NULL,
                \`email\` varchar(100) NULL,
                \`password\` int NOT NULL,
                \`profile_image_url\` varchar(1000) NULL,
                \`address\` varchar(500) NULL,
                \`point\` decimal(10, 2) NULL,
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
            DROP TABLE \`users\`
        `);
        await queryRunner.query(`
            DROP TABLE \`types\`
        `);
        await queryRunner.query(`
            DROP TABLE \`statuses\`
        `);
        await queryRunner.query(`
            DROP TABLE \`product_images\`
        `);
        await queryRunner.query(`
            DROP TABLE \`products\`
        `);
        await queryRunner.query(`
            DROP TABLE \`posts\`
        `);
        await queryRunner.query(`
            DROP TABLE \`orders\`
        `);
        await queryRunner.query(`
            DROP TABLE \`options\`
        `);
        await queryRunner.query(`
            DROP TABLE \`categories\`
        `);
        await queryRunner.query(`
            DROP TABLE \`brands\`
        `);
        await queryRunner.query(`
            DROP TABLE \`bids\`
        `);
    }

}
