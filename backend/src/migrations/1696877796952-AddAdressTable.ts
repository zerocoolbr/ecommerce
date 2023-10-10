import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdressTable1696877796952 implements MigrationInterface {
    name = 'AddAdressTable1696877796952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zip_code" text NOT NULL, "country" text NOT NULL, "state" text NOT NULL, "city" text NOT NULL, "adress_line_1" text NOT NULL, "adress_line_2" text, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "user_id" integer, CONSTRAINT "PK_ADDRESS" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_USER_ID_ON_ADDRESS" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_USER_ID_ON_ADDRESS"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
