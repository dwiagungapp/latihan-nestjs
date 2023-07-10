import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService){}
  
  /**
   * Create a new school
   * @param createSchoolDto 
   * @returns 
   */
  async create(createSchoolDto: CreateSchoolDto) {
    const CreateSchool = await this.prisma.schools.create({
      data: createSchoolDto
    });
    if(CreateSchool){
      return{
        statusCode:200,
        data: CreateSchool
      }
    }
  }

  /**
   * Get all data school
   * @returns 
   */
  async findAll() {
    const dataSchool = await this.prisma.schools.findMany();
    return {
      statusCode: 200,
      data: dataSchool
    }
  }

  /**
   * Get school by ID
   * @param id 
   * @returns 
   */
  async findOne(id: number) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        id,
      }
    });
    return {
      statusCode: 200,
      data: dataSchool
    }
  }


  /**
   * Update School
   * @param id 
   * @param updateSchoolDto 
   * @returns 
   */
  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updateSchool = await this.prisma.schools.update({
      where: {
        id
      },
      data: updateSchoolDto
    })
    if(updateSchool){
      return {
        statusCode: 200,
        data: updateSchool
      };
    }
  }

  /**
   * Delete school
   * @param id 
   * @returns 
   */
  async remove(id: number) {
    const deleteSchool = await this.prisma.schools.delete({
      where: {
        id
      }
    });
    if(deleteSchool){
      return {
        statusCode: 200,
        data: deleteSchool,
        message: 'Berhasil hapus data sekolah'
      };
    }
  }
}
