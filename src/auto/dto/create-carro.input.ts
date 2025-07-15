import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAutoInput {
  @Field()
  marca: string;

  @Field(() => Int)
  potencia: number;
}
