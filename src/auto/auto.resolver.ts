import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AutoService } from './auto.service';
import { Auto } from './entities/carro.entity';
import { CreateAutoInput } from './dto/create-carro.input';

@Resolver(() => Auto)
export class AutoResolver {
  constructor(private readonly autoService: AutoService) {}

  @Mutation(() => Auto)
  createAuto(@Args('createAutoInput') createAutoInput: CreateAutoInput) {
    return this.autoService.create(createAutoInput);
  }

  @Query(() => [Auto], { name: 'autos' })
  findAll() {
    return this.autoService.findAll();
  }

  @Query(() => Auto, { name: 'auto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.autoService.findOne(id);
  }
}
