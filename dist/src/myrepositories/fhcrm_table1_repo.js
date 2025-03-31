"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHcrmTable1Repo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhcrm_table1_1 = require("../myentities/fhcrm_table1");
class FHcrmTable1Repo {
    async create(fhcrmTable1Vo) {
        return await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).insert(fhcrmTable1Vo);
    }
    async update(Id, user_id, fhcrmTable1Vo) {
        fhcrmTable1Vo.updatedAt = new Date();
        fhcrmTable1Vo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).update(Id, fhcrmTable1Vo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFHcrmTable1sById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).createQueryBuilder('fhcrm_table1');
        const fields = {
            id: 'fhcrm_table1.id',
            name: 'fhcrm_table1.name',
            fhF1: 'fhcrm_table1.fh_f1',
            fhF2: 'fhcrm_table1.fh_f2',
            fhF3: 'fhcrm_table1.fh_f3',
            fhF4: 'fhcrm_table1.fh_f4',
            fhF5: 'fhcrm_table1.fh_f5',
            fhF6: 'fhcrm_table1.fh_f6',
            fhF7: 'fhcrm_table1.fh_f7',
            fhF8: 'fhcrm_table1.fh_f8',
            fhF9: 'fhcrm_table1.fh_f9',
            fhF10: 'fhcrm_table1.fh_f10',
            description: 'fhcrm_table1.description',
            createdAt: 'fhcrm_table1.created_at',
            updatedAt: 'fhcrm_table1.updated_at',
            isactived: 'fhcrm_table1.isactived',
            islocked: 'fhcrm_table1.islocked',
            createUid: 'fhcrm_table1.create_uid',
            updatedUid: 'fhcrm_table1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhcrm_table1', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFHcrmTable1All(search) {
        const qb = (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).createQueryBuilder('fhcrm_table1');
        const fields = {
            id: 'fhcrm_table1.id',
            name: 'fhcrm_table1.name',
            description: 'fhcrm_table1.description',
            fhF1: 'fhcrm_table1.fh_f1',
            fhF2: 'fhcrm_table1.fh_f2',
            fhF3: 'fhcrm_table1.fh_f3',
            fhF4: 'fhcrm_table1.fh_f4',
            fhF5: 'fhcrm_table1.fh_f5',
            fhF6: 'fhcrm_table1.fh_f6',
            fhF7: 'fhcrm_table1.fh_f7',
            fhF8: 'fhcrm_table1.fh_f8',
            fhF9: 'fhcrm_table1.fh_f9',
            fhF10: 'fhcrm_table1.fh_f10',
            createdAt: 'fhcrm_table1.created_at',
            updatedAt: 'fhcrm_table1.updated_at',
            isactived: 'fhcrm_table1.isactived',
            islocked: 'fhcrm_table1.islocked',
            createUid: 'fhcrm_table1.create_uid',
            updatedUid: 'fhcrm_table1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhcrm_table1.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['fhcrm_table1.name', 'fhcrm_table1.description'], search.search);
        qb.orderBy('fhcrm_table1.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getFHcrmTable1AllView() {
        const qb = await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).createQueryBuilder('fhcrm_table1');
        const fields = {
            id: 'fhcrm_table1.id',
            name: 'fhcrm_table1.name',
            description: 'fhcrm_table1.description',
            fhF1: 'fhcrm_table1.fh_f1',
            fhF2: 'fhcrm_table1.fh_f2',
            fhF3: 'fhcrm_table1.fh_f3',
            fhF4: 'fhcrm_table1.fh_f4',
            fhF5: 'fhcrm_table1.fh_f5',
            fhF6: 'fhcrm_table1.fh_f6',
            fhF7: 'fhcrm_table1.fh_f7',
            fhF8: 'fhcrm_table1.fh_f8',
            fhF9: 'fhcrm_table1.fh_f9',
            fhF10: 'fhcrm_table1.fh_f10',
            createdAt: 'fhcrm_table1.created_at',
            updatedAt: 'fhcrm_table1.updated_at',
            isactived: 'fhcrm_table1.isactived',
            islocked: 'fhcrm_table1.islocked',
            createUid: 'fhcrm_table1.create_uid',
            updatedUid: 'fhcrm_table1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhcrm_table1.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFHcrmTable1List(search) {
        const qb = await (0, typeorm_1.getRepository)(fhcrm_table1_1.FHcrmTable1).createQueryBuilder('fhcrm_table1');
        const fields = {
            id: 'fhcrm_table1.id',
            name: 'fhcrm_table1.name',
            description: 'fhcrm_table1.description',
            fhF1: 'fhcrm_table1.fh_f1',
            fhF2: 'fhcrm_table1.fh_f2',
            fhF3: 'fhcrm_table1.fh_f3',
            fhF4: 'fhcrm_table1.fh_f4',
            fhF5: 'fhcrm_table1.fh_f5',
            fhF6: 'fhcrm_table1.fh_f6',
            fhF7: 'fhcrm_table1.fh_f7',
            fhF8: 'fhcrm_table1.fh_f8',
            fhF9: 'fhcrm_table1.fh_f9',
            fhF10: 'fhcrm_table1.fh_f10',
            createdAt: 'fhcrm_table1.created_at',
            updatedAt: 'fhcrm_table1.updated_at',
            isactived: 'fhcrm_table1.isactived',
            islocked: 'fhcrm_table1.islocked',
            createUid: 'fhcrm_table1.create_uid',
            updatedUid: 'fhcrm_table1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhcrm_table1.isactived='0'");
        qb.orderBy('fhcrm_table1.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FHcrmTable1Repo = FHcrmTable1Repo;
//# sourceMappingURL=fhcrm_table1_repo.js.map