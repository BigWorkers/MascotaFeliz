import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Agenda, AgendaRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class AgendaRepository extends DefaultCrudRepository<
  Agenda,
  typeof Agenda.prototype.id,
  AgendaRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Agenda.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Agenda, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
