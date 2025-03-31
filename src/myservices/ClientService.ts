import { ClientRepo } from '../myrepositories';
import { ClientSearchVo, ClientVo, FHClientSearchVo } from '../myvo/ClientVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ClientService {
  private clientRepo = new ClientRepo();

  async findOneclient(Id: string) {
    ///const issue = new Fhtest();
    return this.clientRepo.getClientById(Id);
  }

  async createClient(clientVo: ClientVo) {
    return this.clientRepo.create(clientVo);
  }

  async updateaClient(Id: string, user_id: string, clientVo: ClientVo) {
    clientVo.updatedAt = new Date();

    clientVo.updatedUid = user_id;
    return this.clientRepo.update(Id, user_id, clientVo);
  }

  async removeClient(Ids: string[]) {
    return this.clientRepo.remove(Ids);
  }

  async getClientById(id: string) {
    return this.clientRepo.getClientById(id);
  }

  async getClient(userId: string, search: ClientSearchVo) {
    return this.clientRepo.getClient(userId, search);
  }

  async getClientSQL(userId: string, search: FHClientSearchVo) {
    return this.clientRepo.getClientSQL(userId, search);
  }

  async getClientAll(search: ClientSearchVo) {
    return this.clientRepo.getClientAll(search);
  }

  async getClientAllView() {
    return this.clientRepo.getClientAllView();
  }
}
