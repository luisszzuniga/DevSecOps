import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1704374384256 implements MigrationInterface {
  name = 'Init1704374384256';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NOT NULL, \`lastname\` varchar(50) NOT NULL, \`birthdate\` date NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(10) NOT NULL, \`address\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
