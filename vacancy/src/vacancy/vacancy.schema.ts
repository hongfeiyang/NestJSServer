import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Vacancy extends Document {
    @Prop({ required: true, })
    title: string;

    @Prop({ required: true, })
    description: string;

    @Prop({ required: true, })
    expiredAt: string;
    
    @Prop({ required: true, })
    company_id: Types.ObjectId;

}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
