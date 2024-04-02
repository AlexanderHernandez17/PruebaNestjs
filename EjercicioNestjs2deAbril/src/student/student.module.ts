import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
      name: Student.userName,
      schema: StudentSchema
      }

    ])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
