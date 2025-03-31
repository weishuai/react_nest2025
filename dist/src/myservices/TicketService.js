"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const myrepositories_1 = require("../myrepositories");
class TicketService {
    constructor() {
        this.ticketRepo = new myrepositories_1.TicketRepo();
    }
    async findOneTicket(Id) {
        return this.ticketRepo.getTicketsById(Id);
    }
    async createTicket(ticketVo) {
        return this.ticketRepo.create(ticketVo);
    }
    async updateaTicket(Id, user_id, ticketVo) {
        ticketVo.updatedAt = new Date();
        ticketVo.updatedUid = user_id;
        return this.ticketRepo.update(Id, user_id, ticketVo);
    }
    async removeTicket(Ids) {
        return this.ticketRepo.remove(Ids);
    }
    async getTicketById(id) {
        return this.ticketRepo.getTicketsById(id);
    }
    async getTicket(search) {
        return this.ticketRepo.getTicket(search);
    }
    async getTicketAll(search) {
        return this.ticketRepo.getTicketAll(search);
    }
    async getTicketAllView() {
        return this.ticketRepo.getTicketAllView();
    }
}
exports.TicketService = TicketService;
//# sourceMappingURL=TicketService.js.map