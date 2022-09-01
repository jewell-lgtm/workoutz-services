import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Motivation {
  @Field(() => Int)
  motivationLevel: number;
  @Field(() => Boolean)
  shouldIWorkOutToday: boolean;
}
