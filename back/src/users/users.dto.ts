import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  public readonly firstname!: string;

  @IsNotEmpty()
  @IsString()
  public readonly lastname!: string;

  @IsNotEmpty()
  @IsDateString()
  public readonly birthdate!: Date;

  @IsNotEmpty()
  @IsEmail()
  public readonly email!: string;

  @IsNotEmpty()
  @IsString()
  public readonly phone!: string;

  @IsNotEmpty()
  @IsString()
  public readonly address!: string;
}
