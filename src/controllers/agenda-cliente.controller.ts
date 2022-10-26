import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Agenda,
  Cliente,
} from '../models';
import {AgendaRepository} from '../repositories';

export class AgendaClienteController {
  constructor(
    @repository(AgendaRepository)
    public agendaRepository: AgendaRepository,
  ) { }

  @get('/agenda/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Agenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Agenda.prototype.id,
  ): Promise<Cliente> {
    return this.agendaRepository.cliente(id);
  }
}
