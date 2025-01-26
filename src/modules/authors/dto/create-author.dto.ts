import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
