import { IsString, IsNotEmpty } from "class-validator";

export class CreateTaskDto {

  id_user: number;

  @IsNotEmpty()
  @IsString()
  task_name: string;
  
  @IsNotEmpty()
  @IsString()
  task_description: string;

}
