"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbaftersaleRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const tbaftersale_1 = require("../myentities/tbaftersale");
class TbaftersaleRepo {
    async create(tbaftersaleVo) {
        return await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).insert(tbaftersaleVo);
    }
    async update(Id, user_id, tbaftersaleVo) {
        tbaftersaleVo.updatedAt = new Date();
        tbaftersaleVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).update(Id, tbaftersaleVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTbaftersalesById(id) {
        const qb = await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).createQueryBuilder('tbaftersale');
        const fields = {
            id: 'tbaftersale.id',
            name: 'tbaftersale.name',
            mid: 'tbaftersale.mid',
            project: 'tbaftersale.project',
            fhdate: 'tbaftersale.fhdate',
            location: 'tbaftersale.location',
            contacts: 'tbaftersale.contacts',
            contactInformation: 'tbaftersale.contactInformation',
            VisitDescription: 'tbaftersale.VisitDescription',
            problemHandling: 'tbaftersale.problemHandling',
            remainingProblems: 'tbaftersale.remainingProblems',
            afterSalesType: 'tbaftersale.afterSalesType',
            annex: 'tbaftersale.annex',
            processedBy: 'tbaftersale.processedBy',
            description: 'tbaftersale.description',
            createdAt: 'tbaftersale.created_at',
            updatedAt: 'tbaftersale.updated_at',
            isactived: 'tbaftersale.isactived',
            islocked: 'tbaftersale.islocked',
            createUid: 'tbaftersale.create_uid',
            updatedUid: 'tbaftersale.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'tbaftersale', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTbaftersaleAll() {
        const qb = (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).createQueryBuilder('tbaftersale');
        const fields = {
            id: 'tbaftersale.id',
            name: 'tbaftersale.name',
            description: 'tbaftersale.description',
            mid: 'tbaftersale.mid',
            project: 'tbaftersale.project',
            fhdate: 'tbaftersale.fhdate',
            location: 'tbaftersale.location',
            contacts: 'tbaftersale.contacts',
            contactInformation: 'tbaftersale.contactInformation',
            VisitDescription: 'tbaftersale.VisitDescription',
            problemHandling: 'tbaftersale.problemHandling',
            remainingProblems: 'tbaftersale.remainingProblems',
            afterSalesType: 'tbaftersale.afterSalesType',
            annex: 'tbaftersale.annex',
            processedBy: 'tbaftersale.processedBy',
            createdAt: 'tbaftersale.created_at',
            updatedAt: 'tbaftersale.updated_at',
            isactived: 'tbaftersale.isactived',
            islocked: 'tbaftersale.islocked',
            createUid: 'tbaftersale.create_uid',
            updatedUid: 'tbaftersale.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbaftersale.isactived='0'");
        qb.orderBy('tbaftersale.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getTbaftersaleAllView() {
        const qb = await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).createQueryBuilder('tbaftersale');
        const fields = {
            id: 'tbaftersale.id',
            name: 'tbaftersale.name',
            description: 'tbaftersale.description',
            mid: 'tbaftersale.mid',
            project: 'tbaftersale.project',
            fhdate: 'tbaftersale.fhdate',
            location: 'tbaftersale.location',
            contacts: 'tbaftersale.contacts',
            contactInformation: 'tbaftersale.contactInformation',
            VisitDescription: 'tbaftersale.VisitDescription',
            problemHandling: 'tbaftersale.problemHandling',
            remainingProblems: 'tbaftersale.remainingProblems',
            afterSalesType: 'tbaftersale.afterSalesType',
            annex: 'tbaftersale.annex',
            processedBy: 'tbaftersale.processedBy',
            createdAt: 'tbaftersale.created_at',
            updatedAt: 'tbaftersale.updated_at',
            isactived: 'tbaftersale.isactived',
            islocked: 'tbaftersale.islocked',
            createUid: 'tbaftersale.create_uid',
            updatedUid: 'tbaftersale.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('tbaftersale.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getTbaftersaleList(search) {
        const qb = await (0, typeorm_1.getRepository)(tbaftersale_1.Tbaftersale).createQueryBuilder('tbaftersale');
        const fields = {
            id: 'tbaftersale.id',
            name: 'tbaftersale.name',
            description: 'tbaftersale.description',
            mid: 'tbaftersale.mid',
            project: 'tbaftersale.project',
            fhdate: 'tbaftersale.fhdate',
            location: 'tbaftersale.location',
            contacts: 'tbaftersale.contacts',
            contactInformation: 'tbaftersale.contactInformation',
            VisitDescription: 'tbaftersale.VisitDescription',
            problemHandling: 'tbaftersale.problemHandling',
            remainingProblems: 'tbaftersale.remainingProblems',
            afterSalesType: 'tbaftersale.afterSalesType',
            annex: 'tbaftersale.annex',
            processedBy: 'tbaftersale.processedBy',
            createdAt: 'tbaftersale.created_at',
            updatedAt: 'tbaftersale.updated_at',
            isactived: 'tbaftersale.isactived',
            islocked: 'tbaftersale.islocked',
            createUid: 'tbaftersale.create_uid',
            updatedUid: 'tbaftersale.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbaftersale.isactived='0'");
        qb.orderBy('tbaftersale.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.TbaftersaleRepo = TbaftersaleRepo;
//# sourceMappingURL=tbaftersale_repo.js.map