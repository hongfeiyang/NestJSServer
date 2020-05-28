import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class AccessToken {

  @Field()
  user: string;

  @Field()
  accessToken: string;

}