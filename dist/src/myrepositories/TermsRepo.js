"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TermsRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Terms).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Terms).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Terms).update(Ids[0], {
            isactived: '1',
        });
    }
    async gettermssById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Terms).createQueryBuilder('terms');
        const fields = {
            id: 'terms.id',
            name: 'terms.name',
            backgroundColor: 'terms.background_color',
            description: 'terms.description',
            leaderId: 'terms.leader_id',
            roleId: 'terms.role_id',
            createdAt: 'terms.created_at',
            updatedAt: 'terms.updated_at',
            isactived: 'terms.isactived',
            islocked: 'terms.islocked',
            createUid: 'terms.create_uid',
            updatedUid: 'terms.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'terms', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async gettermsAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Terms).createQueryBuilder('terms');
        const fields = {
            id: 'terms.id',
            name: 'terms.name',
            backgroundColor: 'terms.background_color',
            description: 'terms.description',
            leaderId: 'terms.leader_id',
            roleId: 'terms.role_id',
            createdAt: 'terms.created_at',
            updatedAt: 'terms.updated_at',
            isactived: 'terms.isactived',
            islocked: 'terms.islocked',
            createUid: 'terms.create_uid',
            updatedUid: 'terms.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("terms.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['terms.name', 'terms.description'], search.search);
        qb.orderBy('terms.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async gettermsAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Terms).createQueryBuilder('terms');
        const fields = {
            id: 'terms.id',
            name: 'terms.name',
            backgroundColor: 'terms.background_color',
            description: 'terms.description',
            leaderId: 'terms.leader_id',
            roleId: 'terms.role_id',
            createdAt: 'terms.created_at',
            updatedAt: 'terms.updated_at',
            isactived: 'terms.isactived',
            islocked: 'terms.islocked',
            createUid: 'terms.create_uid',
            updatedUid: 'terms.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getterms(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Terms).createQueryBuilder('terms');
        const fields = {
            id: 'terms.id',
            name: 'terms.name',
            backgroundColor: 'terms.background_color',
            description: 'terms.description',
            leaderId: 'terms.leader_id',
            roleId: 'terms.role_id',
            createdAt: 'terms.created_at',
            updatedAt: 'terms.updated_at',
            isactived: 'terms.isactived',
            islocked: 'terms.islocked',
            createUid: 'terms.create_uid',
            updatedUid: 'terms.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("terms.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['terms.name', 'terms.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TermsRepo = TermsRepo;
//# sourceMappingURL=TermsRepo.js.map