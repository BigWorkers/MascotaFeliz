import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Producto} from './producto.model';

@model()
export class Servicio extends Entity {
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
  id_producto: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'number',
    required: true,
  })
  valortotal: number;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasMany(() => Producto)
  productos: Producto[];

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
