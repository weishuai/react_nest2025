"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsMemberRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TermsMemberRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.TermsMember).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.TermsMember).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.TermsMember).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTermsMembersById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermsMember).createQueryBuilder('terms_member');
        const fields = {
            id: 'terms_member.id',
            termsId: 'terms_member.terms_id',
            memberId: 'terms_member.member_id',
            createdAt: 'terms_member.created_at',
            updatedAt: 'terms_member.updated_at',
            isactived: 'terms_member.isactived',
            islocked: 'terms_member.islocked',
            createUid: 'terms_member.create_uid',
            updatedUid: 'terms_member.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'terms_member', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTermsMemberAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermsMember).createQueryBuilder('terms_member');
        const fields = {
            id: 'terms_member.id',
            termsId: 'terms_member.terms_id',
            memberId: 'terms_member.member_id',
            createdAt: 'terms_member.created_at',
            updatedAt: 'terms_member.updated_at',
            isactived: 'terms_member.isactived',
            islocked: 'terms_member.islocked',
            createUid: 'terms_member.create_uid',
            updatedUid: 'terms_member.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("terms_member.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['terms_member.name', 'terms_member.description'], search.search);
        qb.orderBy('terms_member.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTermsMemberAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermsMember).createQueryBuilder('terms_member');
        const fields = {
            id: 'terms_member.id',
            termsId: 'terms_member.terms_id',
            memberId: 'terms_member.member_id',
            createdAt: 'terms_member.created_at',
            updatedAt: 'terms_member.updated_at',
            isactived: 'terms_member.isactived',
            islocked: 'terms_member.islocked',
            createUid: 'terms_member.create_uid',
            updatedUid: 'terms_member.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getTermsMember(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.TermsMember).createQueryBuilder('terms_member');
        const fields = {
            id: 'terms_member.id',
            termsId: 'terms_member.terms_id',
            memberId: 'terms_member.member_id',
            createdAt: 'terms_member.created_at',
            updatedAt: 'terms_member.updated_at',
            isactived: 'terms_member.isactived',
            islocked: 'terms_member.islocked',
            createUid: 'terms_member.create_uid',
            updatedUid: 'terms_member.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("terms_member.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'terms_member', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['terms_member.name', 'terms_member.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TermsMemberRepo = TermsMemberRepo;
//# sourceMappingURL=TermsMemberRepo.js.map