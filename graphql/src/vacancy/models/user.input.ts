import { InputType, Field, registerEnumType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  customerId: string;

  @Field(type => AllowedUserRole)
  role: AllowedUserRole;

  @Field()
  username: string;

  @Field()
  password: string;
}

export enum AllowedUserRole {
  user = 'user',
  admin = 'admin',
}

registerEnumType(AllowedUserRole, {
  name: 'AllowedUserRole',
});
