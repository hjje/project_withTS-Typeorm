import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1677488502655 implements MigrationInterface {
    name = 'Migration1677488502655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(100) NULL,
                \`email\` varchar(100) NULL,
                \`password\` binary NULL,
                \`profile_image_url\` varchar(1000) NULL,
                \`address\` varchar(1000) NULL,
                \`point\` decimal(10, 2) NULL,
                \`social_id\` bigint NULL,
                \`social_type_id\` int NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`types\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(100) NULL,
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
            CREATE TABLE \`products\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`en_name\` varchar(100) NULL,
                \`kr_name\` varchar(100) NULL,
                \`thumbnail_image_url\` varchar(1000) NULL,
                \`recent_trade_price\` decimal(10, 2) NULL,
                \`model_number\` varchar(100) NULL,
                \`release_date\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`color\` varchar(100) NULL,
                \`original_price\` decimal(10, 2) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`category_id\` int NOT NULL,
                \`brand_id\` int NOT NULL,
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
            CREATE TABLE \`bids\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`price\` decimal(10, 2) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`user_id\` int NOT NULL,
                \`type_id\` int NOT NULL,
                \`option_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`statuses\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(100) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`orders\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`amount\` decimal(10, 2) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`status_id\` int NOT NULL,
                \`buyer_id\` int NOT NULL,
                \`seller_id\` int NOT NULL,
                \`bid_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`posts\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`post_image_url\` varchar(1000) NULL,
                \`likes\` int NULL,
                \`feed_text\` varchar(1000) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`user_id\` int NOT NULL,
                \`product_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`product_images\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`image_url\` varchar(1000) NULL,
                \`product_id\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`products\`
            ADD CONSTRAINT \`FK_9a5f6868c96e0069e699f33e124\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`products\`
            ADD CONSTRAINT \`FK_1530a6f15d3c79d1b70be98f2be\` FOREIGN KEY (\`brand_id\`) REFERENCES \`brands\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`options\`
            ADD CONSTRAINT \`FK_8f509b13eba74e88f50da0d1133\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\`
            ADD CONSTRAINT \`FK_cd7b0cdcb890ad457b676c0dfe8\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\`
            ADD CONSTRAINT \`FK_186875b708ebd6a758f9f8b7903\` FOREIGN KEY (\`type_id\`) REFERENCES \`types\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\`
            ADD CONSTRAINT \`FK_ac457757859b88457fd4f927987\` FOREIGN KEY (\`option_id\`) REFERENCES \`options\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\`
            ADD CONSTRAINT \`FK_03a801095cb90cf148e474cfcb7\` FOREIGN KEY (\`status_id\`) REFERENCES \`statuses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\`
            ADD CONSTRAINT \`FK_5e90e93d0e036c3fadbaefa4d0a\` FOREIGN KEY (\`buyer_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\`
            ADD CONSTRAINT \`FK_ef6710c78c6fbc26d1ba58268ab\` FOREIGN KEY (\`seller_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\`
            ADD CONSTRAINT \`FK_a0eb11d4dfa04571479629bce22\` FOREIGN KEY (\`bid_id\`) REFERENCES \`bids\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`posts\`
            ADD CONSTRAINT \`FK_c4f9a7bd77b489e711277ee5986\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`posts\`
            ADD CONSTRAINT \`FK_99d199d28eae97030d856614bdc\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`product_images\`
            ADD CONSTRAINT \`FK_4f166bb8c2bfcef2498d97b4068\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_4f166bb8c2bfcef2498d97b4068\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_99d199d28eae97030d856614bdc\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_c4f9a7bd77b489e711277ee5986\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_a0eb11d4dfa04571479629bce22\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_ef6710c78c6fbc26d1ba58268ab\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_5e90e93d0e036c3fadbaefa4d0a\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_03a801095cb90cf148e474cfcb7\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\` DROP FOREIGN KEY \`FK_ac457757859b88457fd4f927987\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\` DROP FOREIGN KEY \`FK_186875b708ebd6a758f9f8b7903\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`bids\` DROP FOREIGN KEY \`FK_cd7b0cdcb890ad457b676c0dfe8\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`options\` DROP FOREIGN KEY \`FK_8f509b13eba74e88f50da0d1133\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_1530a6f15d3c79d1b70be98f2be\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9a5f6868c96e0069e699f33e124\`
        `);
        await queryRunner.query(`
            DROP TABLE \`product_images\`
        `);
        await queryRunner.query(`
            DROP TABLE \`posts\`
        `);
        await queryRunner.query(`
            DROP TABLE \`orders\`
        `);
        await queryRunner.query(`
            DROP TABLE \`statuses\`
        `);
        await queryRunner.query(`
            DROP TABLE \`bids\`
        `);
        await queryRunner.query(`
            DROP TABLE \`options\`
        `);
        await queryRunner.query(`
            DROP TABLE \`products\`
        `);
        await queryRunner.query(`
            DROP TABLE \`categories\`
        `);
        await queryRunner.query(`
            DROP TABLE \`brands\`
        `);
        await queryRunner.query(`
            DROP TABLE \`types\`
        `);
        await queryRunner.query(`
            DROP TABLE \`users\`
        `);
    }

}
