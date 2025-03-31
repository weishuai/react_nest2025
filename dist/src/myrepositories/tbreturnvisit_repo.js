"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbreturnvisitRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const tbreturnvisit_1 = require("../myentities/tbreturnvisit");
class TbreturnvisitRepo {
    async create(tbreturnvisitVo) {
        return await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).insert(tbreturnvisitVo);
    }
    async update(Id, user_id, tbreturnvisitVo) {
        tbreturnvisitVo.updatedAt = new Date();
        tbreturnvisitVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).update(Id, tbreturnvisitVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTbreturnvisitsById(id) {
        const qb = await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).createQueryBuilder('tbreturnvisit');
        const fields = {
            id: 'tbreturnvisit.id',
            name: 'tbreturnvisit.name',
            mid: 'tbreturnvisit.mid',
            project: 'tbreturnvisit.project',
            fhdate: 'tbreturnvisit.fhdate',
            location: 'tbreturnvisit.location',
            contacts: 'tbreturnvisit.contacts',
            contactInformation: 'tbreturnvisit.contactInformation',
            rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription',
            annex: 'tbreturnvisit.annex',
            description: 'tbreturnvisit.description',
            createdAt: 'tbreturnvisit.created_at',
            updatedAt: 'tbreturnvisit.updated_at',
            isactived: 'tbreturnvisit.isactived',
            islocked: 'tbreturnvisit.islocked',
            createUid: 'tbreturnvisit.create_uid',
            updatedUid: 'tbreturnvisit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'tbreturnvisit', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTbreturnvisitAll() {
        const qb = (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).createQueryBuilder('tbreturnvisit');
        const fields = {
            id: 'tbreturnvisit.id',
            name: 'tbreturnvisit.name',
            description: 'tbreturnvisit.description',
            mid: 'tbreturnvisit.mid',
            project: 'tbreturnvisit.project',
            fhdate: 'tbreturnvisit.fhdate',
            location: 'tbreturnvisit.location',
            contacts: 'tbreturnvisit.contacts',
            contactInformation: 'tbreturnvisit.contactInformation',
            rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription',
            annex: 'tbreturnvisit.annex',
            createdAt: 'tbreturnvisit.created_at',
            updatedAt: 'tbreturnvisit.updated_at',
            isactived: 'tbreturnvisit.isactived',
            islocked: 'tbreturnvisit.islocked',
            createUid: 'tbreturnvisit.create_uid',
            updatedUid: 'tbreturnvisit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbreturnvisit.isactived='0'");
        qb.orderBy('tbreturnvisit.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getTbreturnvisitAllView() {
        const qb = await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).createQueryBuilder('tbreturnvisit');
        const fields = {
            id: 'tbreturnvisit.id',
            name: 'tbreturnvisit.name',
            description: 'tbreturnvisit.description',
            mid: 'tbreturnvisit.mid',
            project: 'tbreturnvisit.project',
            fhdate: 'tbreturnvisit.fhdate',
            location: 'tbreturnvisit.location',
            contacts: 'tbreturnvisit.contacts',
            contactInformation: 'tbreturnvisit.contactInformation',
            rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription',
            annex: 'tbreturnvisit.annex',
            createdAt: 'tbreturnvisit.created_at',
            updatedAt: 'tbreturnvisit.updated_at',
            isactived: 'tbreturnvisit.isactived',
            islocked: 'tbreturnvisit.islocked',
            createUid: 'tbreturnvisit.create_uid',
            updatedUid: 'tbreturnvisit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('tbreturnvisit.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getTbreturnvisitList(search) {
        const qb = await (0, typeorm_1.getRepository)(tbreturnvisit_1.Tbreturnvisit).createQueryBuilder('tbreturnvisit');
        const fields = {
            id: 'tbreturnvisit.id',
            name: 'tbreturnvisit.name',
            description: 'tbreturnvisit.description',
            mid: 'tbreturnvisit.mid',
            project: 'tbreturnvisit.project',
            fhdate: 'tbreturnvisit.fhdate',
            location: 'tbreturnvisit.location',
            contacts: 'tbreturnvisit.contacts',
            contactInformation: 'tbreturnvisit.contactInformation',
            rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription',
            annex: 'tbreturnvisit.annex',
            createdAt: 'tbreturnvisit.created_at',
            updatedAt: 'tbreturnvisit.updated_at',
            isactived: 'tbreturnvisit.isactived',
            islocked: 'tbreturnvisit.islocked',
            createUid: 'tbreturnvisit.create_uid',
            updatedUid: 'tbreturnvisit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("tbreturnvisit.isactived='0'");
        qb.orderBy('tbreturnvisit.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.TbreturnvisitRepo = TbreturnvisitRepo;
//# sourceMappingURL=tbreturnvisit_repo.js.map