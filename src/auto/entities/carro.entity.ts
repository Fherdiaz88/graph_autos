import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auto {
  @Field(() => Int)
  id: number;

  @Field()
  marca: string;

  @Field(() => Int)
  potencia: number;
}
