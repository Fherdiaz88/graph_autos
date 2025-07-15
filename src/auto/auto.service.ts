import { Injectable } from '@nestjs/common';
import { CreateAutoInput } from './dto/create-carro.input';
import { Auto } from './entities/carro.entity';

@Injectable()
export class AutoService {
  private autos: Auto[] = [];
  private idCounter = 1;

  create(createAutoInput: CreateAutoInput): Auto {
    const nuevoAuto: Auto = {
      id: this.idCounter++,
      ...createAutoInput,
    };
    this.autos.push(nuevoAuto);
    return nuevoAuto;
  }

  findAll(): Auto[] {
    return this.autos;
  }

  findOne(id: number): Auto {
    const auto = this.autos.find((a) => a.id === id);
    if (!auto) {
      throw new Error(`Auto with id ${id} not found`);
    }
    return auto;
  }
}
