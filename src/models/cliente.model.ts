import {Entity, model, property, hasMany} from '@loopback/repository';
import {Servicio} from './servicio.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  idMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @hasMany(() => Servicio)
  servicios: Servicio[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
