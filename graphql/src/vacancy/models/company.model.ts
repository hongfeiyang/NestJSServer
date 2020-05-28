import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  address: string;


}