"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const Leads_1 = require("../myentities/Leads");
const Client_1 = require("../myentities/Client");
class LeadsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(Leads_1.Leads).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(Leads_1.Leads).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(Leads_1.Leads).update(Ids[0], {
            isactived: '1',
        });
    }
    async getleadssById(id) {
        const qb = (0, typeorm_1.getRepository)(Leads_1.Leads).createQueryBuilder('leads');
        const fields = {
            id: 'leads.id',
            name: 'leads.name',
            jobTitle: 'leads.job_title',
            company: 'leads.company',
            industry: 'leads.industry',
            website: 'leads.website',
            email: 'leads.email',
            phoneNumber: 'leads.phone_number',
            mobileNumber: 'leads.mobile_number',
            faxNumber: 'leads.fax_number',
            remark: 'leads.remark',
            leadOwner: 'leads.lead_owner',
            leadPool: 'leads.lead_pool',
            campaign: 'leads.campaign',
            source: 'leads.source',
            streetRoad: 'leads.street_road',
            city: 'leads.city',
            ctate: 'leads.ctate',
            postCode: 'leads.post_code',
            country: 'leads.country',
            createdAt: 'leads.created_at',
            updatedAt: 'leads.updated_at',
            isactived: 'leads.isactived',
            islocked: 'leads.islocked',
            createUid: 'leads.create_uid',
            updatedUid: 'leads.updated_uid',
            satus: 'leads.satus',
            linkedIn: 'leads.linked_in',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'leads', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getLeadsAll(search) {
        const qb = (0, typeorm_1.getRepository)(Leads_1.Leads).createQueryBuilder('leads');
        qb.leftJoin(Client_1.Client, 'client', 'leads.company = client.id');
        const fields = {
            id: 'leads.id',
            name: 'leads.name',
            jobTitle: 'leads.job_title',
            company: 'client.name',
            industry: 'leads.industry',
            website: 'leads.website',
            email: 'leads.email',
            phoneNumber: 'leads.phone_number',
            mobileNumber: 'leads.mobile_number',
            faxNumber: 'leads.fax_number',
            remark: 'leads.remark',
            leadOwner: 'leads.lead_owner',
            leadPool: 'leads.lead_pool',
            campaign: 'leads.campaign',
            source: 'leads.source',
            streetRoad: 'leads.street_road',
            city: 'leads.city',
            ctate: 'leads.ctate',
            postCode: 'leads.post_code',
            country: 'leads.country',
            createdAt: 'leads.created_at',
            updatedAt: 'leads.updated_at',
            isactived: 'leads.isactived',
            islocked: 'leads.islocked',
            createUid: 'leads.create_uid',
            updatedUid: 'leads.updated_uid',
            satus: 'leads.satus',
            linkedIn: 'leads.linked_in',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("leads.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['leads.name', 'leads.remark'], search.search);
        qb.orderBy('leads.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getLeadsAllView() {
        const qb = (0, typeorm_1.getRepository)(Leads_1.Leads).createQueryBuilder('leads');
        const fields = {
            id: 'leads.id',
            name: 'leads.name',
            jobTitle: 'leads.job_title',
            company: 'leads.company',
            industry: 'leads.industry',
            website: 'leads.website',
            email: 'leads.email',
            phoneNumber: 'leads.phone_number',
            mobileNumber: 'leads.mobile_number',
            faxNumber: 'leads.fax_number',
            remark: 'leads.remark',
            leadOwner: 'leads.lead_owner',
            leadPool: 'leads.lead_pool',
            campaign: 'leads.campaign',
            source: 'leads.source',
            streetRoad: 'leads.street_road',
            city: 'leads.city',
            ctate: 'leads.ctate',
            postCode: 'leads.post_code',
            country: 'leads.country',
            createdAt: 'leads.created_at',
            updatedAt: 'leads.updated_at',
            isactived: 'leads.isactived',
            islocked: 'leads.islocked',
            createUid: 'leads.create_uid',
            updatedUid: 'leads.updated_uid',
            satus: 'leads.satus',
            linkedIn: 'leads.linked_in',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getleads(userId, search) {
        const qb = (0, typeorm_1.getRepository)(Leads_1.Leads).createQueryBuilder('leads');
        const fields = {
            id: 'leads.id',
            name: 'leads.name',
            jobTitle: 'leads.job_title',
            company: 'leads.company',
            industry: 'leads.industry',
            website: 'leads.website',
            email: 'leads.email',
            phoneNumber: 'leads.phone_number',
            mobileNumber: 'leads.mobile_number',
            faxNumber: 'leads.fax_number',
            remark: 'leads.remark',
            leadOwner: 'leads.lead_owner',
            leadPool: 'leads.lead_pool',
            campaign: 'leads.campaign',
            source: 'leads.source',
            streetRoad: 'leads.street_road',
            city: 'leads.city',
            ctate: 'leads.ctate',
            postCode: 'leads.post_code',
            country: 'leads.country',
            createdAt: 'leads.created_at',
            updatedAt: 'leads.updated_at',
            isactived: 'leads.isactived',
            islocked: 'leads.islocked',
            createUid: 'leads.create_uid',
            updatedUid: 'leads.updated_uid',
            satus: 'leads.satus',
            linkedIn: 'leads.linked_in',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        (0, my_utils_1.andWhereEqual)(qb, 'leads', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['leads.name', 'leads.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.LeadsRepo = LeadsRepo;
//# sourceMappingURL=LeadsRepo.js.map