"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTagRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const account_tag_1 = require("../myentities/account.tag");
class AccountTagRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).update(Ids[0], {
            isactived: '1',
        });
    }
    async getAccountTagsById(id) {
        const qb = await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).createQueryBuilder('account_tag');
        const fields = {
            id: 'account_tag.id',
            name: 'account_tag.name',
            description: 'account_tag.description',
            createdAt: 'account_tag.created_at',
            updatedAt: 'account_tag.updated_at',
            isactived: 'account_tag.isactived',
            islocked: 'account_tag.islocked',
            createUid: 'account_tag.create_uid',
            updatedUid: 'account_tag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'account_tag', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getAccountTagAll(search) {
        const qb = (0, typeorm_1.getRepository)(account_tag_1.AccountTag).createQueryBuilder('account_tag');
        const fields = {
            id: 'account_tag.id',
            name: 'account_tag.name',
            description: 'account_tag.description',
            createdAt: 'account_tag.created_at',
            updatedAt: 'account_tag.updated_at',
            isactived: 'account_tag.isactived',
            islocked: 'account_tag.islocked',
            createUid: 'account_tag.create_uid',
            updatedUid: 'account_tag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("account_tag.isactived='0'");
        qb.orderBy('account_tag.created_at', 'DESC');
        (0, my_utils_1.multiSearch)(qb, ['account_tag.name', 'account_tag.description'], search.search);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getAccountTagAllView() {
        const qb = await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).createQueryBuilder('account_tag');
        const fields = {
            id: 'account_tag.id',
            name: 'account_tag.name',
            description: 'account_tag.description',
            createdAt: 'account_tag.created_at',
            updatedAt: 'account_tag.updated_at',
            isactived: 'account_tag.isactived',
            islocked: 'account_tag.islocked',
            createUid: 'account_tag.create_uid',
            updatedUid: 'account_tag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('account_tag.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getAccountTagList(search) {
        const qb = await (0, typeorm_1.getRepository)(account_tag_1.AccountTag).createQueryBuilder('account_tag');
        const fields = {
            id: 'account_tag.id',
            name: 'account_tag.name',
            description: 'account_tag.description',
            createdAt: 'account_tag.created_at',
            updatedAt: 'account_tag.updated_at',
            isactived: 'account_tag.isactived',
            islocked: 'account_tag.islocked',
            createUid: 'account_tag.create_uid',
            updatedUid: 'account_tag.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("account_tag.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['account_tag.name', 'account_tag.description'], search.search);
        qb.orderBy('account_tag.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.AccountTagRepo = AccountTagRepo;
//# sourceMappingURL=account.tag.repo.js.map