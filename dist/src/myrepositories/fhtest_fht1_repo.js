"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestFht1Repo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhtest_fht1_1 = require("../myentities/fhtest_fht1");
class FhtestFht1Repo {
    async create(fhtestFht1Vo) {
        return await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).insert(fhtestFht1Vo);
    }
    async update(Id, user_id, fhtestFht1Vo) {
        fhtestFht1Vo.updatedAt = new Date();
        fhtestFht1Vo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).update(Id, fhtestFht1Vo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhtestFht1sById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).createQueryBuilder('fhtest_fht1');
        const fields = {
            id: 'fhtest_fht1.id',
            name: 'fhtest_fht1.name',
            fhname: 'fhtest_fht1.fhname',
            fhF1: 'fhtest_fht1.fhF1',
            fhF2: 'fhtest_fht1.fhF2',
            fhF3: 'fhtest_fht1.fhF3',
            fhF4: 'fhtest_fht1.fhF4',
            fhF5: 'fhtest_fht1.fhF5',
            fhF6: 'fhtest_fht1.fhF6',
            fhF7: 'fhtest_fht1.fhF7',
            fhF8: 'fhtest_fht1.fhF8',
            fhF9: 'fhtest_fht1.fhF9',
            fhF10: 'fhtest_fht1.fhF10',
            fhF11: 'fhtest_fht1.fhF11',
            fhF12: 'fhtest_fht1.fhF12',
            fhF13: 'fhtest_fht1.fhF13',
            fhF14: 'fhtest_fht1.fhF14',
            fhF15: 'fhtest_fht1.fhF15',
            fhF16: 'fhtest_fht1.fhF16',
            fhF17: 'fhtest_fht1.fhF17',
            description: 'fhtest_fht1.description',
            createdAt: 'fhtest_fht1.created_at',
            updatedAt: 'fhtest_fht1.updated_at',
            isactived: 'fhtest_fht1.isactived',
            islocked: 'fhtest_fht1.islocked',
            createUid: 'fhtest_fht1.create_uid',
            updatedUid: 'fhtest_fht1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhtest_fht1', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhtestFht1All() {
        const qb = (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).createQueryBuilder('fhtest_fht1');
        const fields = {
            id: 'fhtest_fht1.id',
            name: 'fhtest_fht1.name',
            description: 'fhtest_fht1.description',
            fhname: 'fhtest_fht1.fhname',
            fhF1: 'fhtest_fht1.fhF1',
            fhF2: 'fhtest_fht1.fhF2',
            fhF3: 'fhtest_fht1.fhF3',
            fhF4: 'fhtest_fht1.fhF4',
            fhF5: 'fhtest_fht1.fhF5',
            fhF6: 'fhtest_fht1.fhF6',
            fhF7: 'fhtest_fht1.fhF7',
            fhF8: 'fhtest_fht1.fhF8',
            fhF9: 'fhtest_fht1.fhF9',
            fhF10: 'fhtest_fht1.fhF10',
            fhF11: 'fhtest_fht1.fhF11',
            fhF12: 'fhtest_fht1.fhF12',
            fhF13: 'fhtest_fht1.fhF13',
            fhF14: 'fhtest_fht1.fhF14',
            fhF15: 'fhtest_fht1.fhF15',
            fhF16: 'fhtest_fht1.fhF16',
            fhF17: 'fhtest_fht1.fhF17',
            createdAt: 'fhtest_fht1.created_at',
            updatedAt: 'fhtest_fht1.updated_at',
            isactived: 'fhtest_fht1.isactived',
            islocked: 'fhtest_fht1.islocked',
            createUid: 'fhtest_fht1.create_uid',
            updatedUid: 'fhtest_fht1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhtest_fht1.isactived='0'");
        qb.orderBy('fhtest_fht1.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhtestFht1AllView() {
        const qb = await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).createQueryBuilder('fhtest_fht1');
        const fields = {
            id: 'fhtest_fht1.id',
            name: 'fhtest_fht1.name',
            description: 'fhtest_fht1.description',
            fhname: 'fhtest_fht1.fhname',
            fhF1: 'fhtest_fht1.fhF1',
            fhF2: 'fhtest_fht1.fhF2',
            fhF3: 'fhtest_fht1.fhF3',
            fhF4: 'fhtest_fht1.fhF4',
            fhF5: 'fhtest_fht1.fhF5',
            fhF6: 'fhtest_fht1.fhF6',
            fhF7: 'fhtest_fht1.fhF7',
            fhF8: 'fhtest_fht1.fhF8',
            fhF9: 'fhtest_fht1.fhF9',
            fhF10: 'fhtest_fht1.fhF10',
            fhF11: 'fhtest_fht1.fhF11',
            fhF12: 'fhtest_fht1.fhF12',
            fhF13: 'fhtest_fht1.fhF13',
            fhF14: 'fhtest_fht1.fhF14',
            fhF15: 'fhtest_fht1.fhF15',
            fhF16: 'fhtest_fht1.fhF16',
            fhF17: 'fhtest_fht1.fhF17',
            createdAt: 'fhtest_fht1.created_at',
            updatedAt: 'fhtest_fht1.updated_at',
            isactived: 'fhtest_fht1.isactived',
            islocked: 'fhtest_fht1.islocked',
            createUid: 'fhtest_fht1.create_uid',
            updatedUid: 'fhtest_fht1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhtest_fht1.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhtestFht1List(search) {
        const qb = await (0, typeorm_1.getRepository)(fhtest_fht1_1.FhtestFht1).createQueryBuilder('fhtest_fht1');
        const fields = {
            id: 'fhtest_fht1.id',
            name: 'fhtest_fht1.name',
            description: 'fhtest_fht1.description',
            fhname: 'fhtest_fht1.fhname',
            fhF1: 'fhtest_fht1.fhF1',
            fhF2: 'fhtest_fht1.fhF2',
            fhF3: 'fhtest_fht1.fhF3',
            fhF4: 'fhtest_fht1.fhF4',
            fhF5: 'fhtest_fht1.fhF5',
            fhF6: 'fhtest_fht1.fhF6',
            fhF7: 'fhtest_fht1.fhF7',
            fhF8: 'fhtest_fht1.fhF8',
            fhF9: 'fhtest_fht1.fhF9',
            fhF10: 'fhtest_fht1.fhF10',
            fhF11: 'fhtest_fht1.fhF11',
            fhF12: 'fhtest_fht1.fhF12',
            fhF13: 'fhtest_fht1.fhF13',
            fhF14: 'fhtest_fht1.fhF14',
            fhF15: 'fhtest_fht1.fhF15',
            fhF16: 'fhtest_fht1.fhF16',
            fhF17: 'fhtest_fht1.fhF17',
            createdAt: 'fhtest_fht1.created_at',
            updatedAt: 'fhtest_fht1.updated_at',
            isactived: 'fhtest_fht1.isactived',
            islocked: 'fhtest_fht1.islocked',
            createUid: 'fhtest_fht1.create_uid',
            updatedUid: 'fhtest_fht1.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhtest_fht1.isactived='0'");
        qb.orderBy('fhtest_fht1.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhtestFht1Repo = FhtestFht1Repo;
//# sourceMappingURL=fhtest_fht1_repo.js.map