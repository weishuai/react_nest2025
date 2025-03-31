"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class TranslateRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Translate).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Translate).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Translate).update(Ids[0], {
            isactived: '1',
        });
    }
    async getTranslatesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Translate).createQueryBuilder('translate');
        const fields = {
            id: 'translate.id',
            name: 'translate.name',
            description: 'translate.description',
            createdAt: 'translate.created_at',
            updatedAt: 'translate.updated_at',
            isactived: 'translate.isactived',
            islocked: 'translate.islocked',
            createUid: 'translate.create_uid',
            updatedUid: 'translate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'translate', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getTranslateAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Translate).createQueryBuilder('translate');
        const fields = {
            id: 'translate.id',
            name: 'translate.name',
            description: 'translate.description',
            createdAt: 'translate.created_at',
            updatedAt: 'translate.updated_at',
            isactived: 'translate.isactived',
            islocked: 'translate.islocked',
            createUid: 'translate.create_uid',
            updatedUid: 'translate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("translate.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['translate.name', 'translate.description'], search.search);
        qb.orderBy('translate.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getTranslateAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Translate).createQueryBuilder('translate');
        const fields = {
            id: 'translate.id',
            name: 'translate.name',
            description: 'translate.description',
            createdAt: 'translate.created_at',
            updatedAt: 'translate.updated_at',
            isactived: 'translate.isactived',
            islocked: 'translate.islocked',
            createUid: 'translate.create_uid',
            updatedUid: 'translate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getTranslate(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Translate).createQueryBuilder('translate');
        const fields = {
            id: 'translate.id',
            name: 'translate.name',
            description: 'translate.description',
            createdAt: 'translate.created_at',
            updatedAt: 'translate.updated_at',
            isactived: 'translate.isactived',
            islocked: 'translate.islocked',
            createUid: 'translate.create_uid',
            updatedUid: 'translate.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("translate.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['translate.name', 'translate.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.TranslateRepo = TranslateRepo;
//# sourceMappingURL=TranslateRepo.js.map