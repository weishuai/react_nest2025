"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TicketRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Ticket).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Ticket).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Ticket).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTicketsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Ticket).createQueryBuilder('ticket');
        const fields = {
            id: 'ticket.id',
            name: 'ticket.name',
            rate: 'ticket.rate',
            source: 'ticket.source',
            description: 'ticket.description',
            createdAt: 'ticket.created_at',
            updatedAt: 'ticket.updated_at',
            isactived: 'ticket.isactived',
            islocked: 'ticket.islocked',
            createUid: 'ticket.create_uid',
            updatedUid: 'ticket.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'ticket', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTicketAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Ticket).createQueryBuilder('ticket');
        const fields = {
            id: 'ticket.id',
            name: 'ticket.name',
            rate: 'ticket.rate',
            source: 'ticket.source',
            description: 'ticket.description',
            createdAt: 'ticket.created_at',
            updatedAt: 'ticket.updated_at',
            isactived: 'ticket.isactived',
            islocked: 'ticket.islocked',
            createUid: 'ticket.create_uid',
            updatedUid: 'ticket.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("ticket.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['ticket.name', 'ticket.description'], search.search);
        qb.orderBy('ticket.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTicketAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Ticket).createQueryBuilder('ticket');
        const fields = {
            id: 'ticket.id',
            name: 'ticket.name',
            rate: 'ticket.rate',
            source: 'ticket.source',
            description: 'ticket.description',
            createdAt: 'ticket.created_at',
            updatedAt: 'ticket.updated_at',
            isactived: 'ticket.isactived',
            islocked: 'ticket.islocked',
            createUid: 'ticket.create_uid',
            updatedUid: 'ticket.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getTicket(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Ticket).createQueryBuilder('ticket');
        const fields = {
            id: 'ticket.id',
            name: 'ticket.name',
            rate: 'ticket.rate',
            source: 'ticket.source',
            description: 'ticket.description',
            createdAt: 'ticket.created_at',
            updatedAt: 'ticket.updated_at',
            isactived: 'ticket.isactived',
            islocked: 'ticket.islocked',
            createUid: 'ticket.create_uid',
            updatedUid: 'ticket.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("ticket.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'ticket', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['ticket.name', 'ticket.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TicketRepo = TicketRepo;
//# sourceMappingURL=TicketRepo.js.map