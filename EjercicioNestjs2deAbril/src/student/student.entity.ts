import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Student extends Document{
    @Prop()
    userName: string;
    @Prop()
    password: string;
  static userName: any;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
