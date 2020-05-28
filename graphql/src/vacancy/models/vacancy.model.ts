import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';

@ObjectType()
export class Vacancy {
  @Field(type => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  expiredAt?: Date;

  @Field(type => ID, {nullable: true})
  company_id: string;

  @Field(type => Company, {nullable: true})
  company: Company;
}