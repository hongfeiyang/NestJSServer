import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';

@ObjectType()
export class Vacancy {
  @Field(type => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  expiredAt: String;

  @Field(type => ID)
  company_id: string;

  @Field(type => Company)
  company: Company;
}