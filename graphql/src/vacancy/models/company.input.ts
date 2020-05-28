import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CompanyInput {
    @Field()
    name: string;

    @Field()
    address: string;
}