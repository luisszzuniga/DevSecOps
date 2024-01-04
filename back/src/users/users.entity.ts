import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 50 })
  public firstname!: string;

  @Column({ type: 'varchar', length: 50 })
  public lastname!: string;

  @Column({ type: 'date' })
  public birthdate!: Date;

  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar', length: 10 })
  public phone!: string;

  @Column({ type: 'text' })
  public address!: string;
}
