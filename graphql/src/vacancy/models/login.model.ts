import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class AccessToken {

  @Field({nullable: true})
  user?: string;

  @Field({nullable: true})
  accessToken?: string;

}