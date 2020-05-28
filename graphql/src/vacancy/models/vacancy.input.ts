import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class VacancyInput {
    @Field({nullable: true})
    title: string;

    @Field({nullable: true})
    description: string;

    @Field({nullable: true})
    expiredAt: string;

    @Field({nullable: true})
    company_id: string;
}