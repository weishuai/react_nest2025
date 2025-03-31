import { TicketRepo } from '../myrepositories';
import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TicketService {
  private ticketRepo = new TicketRepo();
  async findOneTicket(Id: string) {
    ///const issue = new Fhtest();
    return this.ticketRepo.getTicketsById(Id);
  }

  async createTicket(ticketVo: TicketVo) {
    ///ticketVo.id = id();
    return this.ticketRepo.create(ticketVo);
  }

  async updateaTicket(Id: string, user_id: string, ticketVo: TicketVo) {
    ticketVo.updatedAt = new Date();

    ticketVo.updatedUid = user_id;
    return this.ticketRepo.update(Id, user_id, ticketVo);
  }

  async removeTicket(Ids: string[]) {
    return this.ticketRepo.remove(Ids);
  }

  async getTicketById(id: string) {
    return this.ticketRepo.getTicketsById(id);
  }

  async getTicket(search: TicketSearchVo) {
    return this.ticketRepo.getTicket(search);
  }

  async getTicketAll(search: TicketSearchVo) {
    return this.ticketRepo.getTicketAll(search);
  }

  async getTicketAllView() {
    return this.ticketRepo.getTicketAllView();
  }
}
