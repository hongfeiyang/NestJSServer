import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  _id: string;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  username: string;

  @Field({nullable: true})
  password: string;
  
  @Field({nullable: true})
  role: string;

  @Field({nullable: true})
  customerId: string;

}