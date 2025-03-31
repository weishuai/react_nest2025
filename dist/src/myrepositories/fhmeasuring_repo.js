"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhmeasuringRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhmeasuring_1 = require("../myentities/fhmeasuring");
class FhmeasuringRepo {
    async create(fhmeasuringVo) {
        return await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).insert(fhmeasuringVo);
    }
    async update(Id, user_id, fhmeasuringVo) {
        fhmeasuringVo.updatedAt = new Date();
        fhmeasuringVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).update(Id, fhmeasuringVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhmeasuringsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).createQueryBuilder('fhmeasuring');
        const fields = {
            id: 'fhmeasuring.id',
            name: 'fhmeasuring.name',
            fhname: 'fhmeasuring.fhname',
            fhF1: 'fhmeasuring.fhF1',
            fhF2: 'fhmeasuring.fhF2',
            fhF3: 'fhmeasuring.fhF3',
            fhF4: 'fhmeasuring.fhF4',
            fhF5: 'fhmeasuring.fhF5',
            fhF6: 'fhmeasuring.fhF6',
            fhF7: 'fhmeasuring.fhF7',
            fhF8: 'fhmeasuring.fhF8',
            fhF9: 'fhmeasuring.fhF9',
            description: 'fhmeasuring.description',
            createdAt: 'fhmeasuring.created_at',
            updatedAt: 'fhmeasuring.updated_at',
            isactived: 'fhmeasuring.isactived',
            islocked: 'fhmeasuring.islocked',
            createUid: 'fhmeasuring.create_uid',
            updatedUid: 'fhmeasuring.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhmeasuring', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhmeasuringAll() {
        const qb = (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).createQueryBuilder('fhmeasuring');
        const fields = {
            id: 'fhmeasuring.id',
            name: 'fhmeasuring.name',
            description: 'fhmeasuring.description',
            fhname: 'fhmeasuring.fhname',
            fhF1: 'fhmeasuring.fhF1',
            fhF2: 'fhmeasuring.fhF2',
            fhF3: 'fhmeasuring.fhF3',
            fhF4: 'fhmeasuring.fhF4',
            fhF5: 'fhmeasuring.fhF5',
            fhF6: 'fhmeasuring.fhF6',
            fhF7: 'fhmeasuring.fhF7',
            fhF8: 'fhmeasuring.fhF8',
            fhF9: 'fhmeasuring.fhF9',
            createdAt: 'fhmeasuring.created_at',
            updatedAt: 'fhmeasuring.updated_at',
            isactived: 'fhmeasuring.isactived',
            islocked: 'fhmeasuring.islocked',
            createUid: 'fhmeasuring.create_uid',
            updatedUid: 'fhmeasuring.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhmeasuring.isactived='0'");
        qb.orderBy('fhmeasuring.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhmeasuringAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).createQueryBuilder('fhmeasuring');
        const fields = {
            id: 'fhmeasuring.id',
            name: 'fhmeasuring.name',
            description: 'fhmeasuring.description',
            fhname: 'fhmeasuring.fhname',
            fhF1: 'fhmeasuring.fhF1',
            fhF2: 'fhmeasuring.fhF2',
            fhF3: 'fhmeasuring.fhF3',
            fhF4: 'fhmeasuring.fhF4',
            fhF5: 'fhmeasuring.fhF5',
            fhF6: 'fhmeasuring.fhF6',
            fhF7: 'fhmeasuring.fhF7',
            fhF8: 'fhmeasuring.fhF8',
            fhF9: 'fhmeasuring.fhF9',
            createdAt: 'fhmeasuring.created_at',
            updatedAt: 'fhmeasuring.updated_at',
            isactived: 'fhmeasuring.isactived',
            islocked: 'fhmeasuring.islocked',
            createUid: 'fhmeasuring.create_uid',
            updatedUid: 'fhmeasuring.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhmeasuring.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhmeasuringList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhmeasuring_1.Fhmeasuring).createQueryBuilder('fhmeasuring');
        const fields = {
            id: 'fhmeasuring.id',
            name: 'fhmeasuring.name',
            description: 'fhmeasuring.description',
            fhname: 'fhmeasuring.fhname',
            fhF1: 'fhmeasuring.fhF1',
            fhF2: 'fhmeasuring.fhF2',
            fhF3: 'fhmeasuring.fhF3',
            fhF4: 'fhmeasuring.fhF4',
            fhF5: 'fhmeasuring.fhF5',
            fhF6: 'fhmeasuring.fhF6',
            fhF7: 'fhmeasuring.fhF7',
            fhF8: 'fhmeasuring.fhF8',
            fhF9: 'fhmeasuring.fhF9',
            createdAt: 'fhmeasuring.created_at',
            updatedAt: 'fhmeasuring.updated_at',
            isactived: 'fhmeasuring.isactived',
            islocked: 'fhmeasuring.islocked',
            createUid: 'fhmeasuring.create_uid',
            updatedUid: 'fhmeasuring.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhmeasuring.isactived='0'");
        qb.orderBy('fhmeasuring.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhmeasuringRepo = FhmeasuringRepo;
//# sourceMappingURL=fhmeasuring_repo.js.map