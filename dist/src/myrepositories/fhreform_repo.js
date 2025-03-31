"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhreformRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhreform_1 = require("../myentities/fhreform");
class FhreformRepo {
    async create(fhreformVo) {
        return await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).insert(fhreformVo);
    }
    async update(Id, user_id, fhreformVo) {
        fhreformVo.updatedAt = new Date();
        fhreformVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).update(Id, fhreformVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhreformsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).createQueryBuilder('fhreform');
        const fields = {
            id: 'fhreform.id',
            name: 'fhreform.name',
            fhname: 'fhreform.fhname',
            fhF1: 'fhreform.fhF1',
            fhF2: 'fhreform.fhF2',
            fhF3: 'fhreform.fhF3',
            fhF4: 'fhreform.fhF4',
            fhF5: 'fhreform.fhF5',
            description: 'fhreform.description',
            createdAt: 'fhreform.created_at',
            updatedAt: 'fhreform.updated_at',
            isactived: 'fhreform.isactived',
            islocked: 'fhreform.islocked',
            createUid: 'fhreform.create_uid',
            updatedUid: 'fhreform.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhreform', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhreformAll() {
        const qb = (0, typeorm_1.getRepository)(fhreform_1.Fhreform).createQueryBuilder('fhreform');
        const fields = {
            id: 'fhreform.id',
            name: 'fhreform.name',
            description: 'fhreform.description',
            fhname: 'fhreform.fhname',
            fhF1: 'fhreform.fhF1',
            fhF2: 'fhreform.fhF2',
            fhF3: 'fhreform.fhF3',
            fhF4: 'fhreform.fhF4',
            fhF5: 'fhreform.fhF5',
            createdAt: 'fhreform.created_at',
            updatedAt: 'fhreform.updated_at',
            isactived: 'fhreform.isactived',
            islocked: 'fhreform.islocked',
            createUid: 'fhreform.create_uid',
            updatedUid: 'fhreform.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhreform.isactived='0'");
        qb.orderBy('fhreform.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhreformAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).createQueryBuilder('fhreform');
        const fields = {
            id: 'fhreform.id',
            name: 'fhreform.name',
            description: 'fhreform.description',
            fhname: 'fhreform.fhname',
            fhF1: 'fhreform.fhF1',
            fhF2: 'fhreform.fhF2',
            fhF3: 'fhreform.fhF3',
            fhF4: 'fhreform.fhF4',
            fhF5: 'fhreform.fhF5',
            createdAt: 'fhreform.created_at',
            updatedAt: 'fhreform.updated_at',
            isactived: 'fhreform.isactived',
            islocked: 'fhreform.islocked',
            createUid: 'fhreform.create_uid',
            updatedUid: 'fhreform.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhreform.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhreformList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhreform_1.Fhreform).createQueryBuilder('fhreform');
        const fields = {
            id: 'fhreform.id',
            name: 'fhreform.name',
            description: 'fhreform.description',
            fhname: 'fhreform.fhname',
            fhF1: 'fhreform.fhF1',
            fhF2: 'fhreform.fhF2',
            fhF3: 'fhreform.fhF3',
            fhF4: 'fhreform.fhF4',
            fhF5: 'fhreform.fhF5',
            createdAt: 'fhreform.created_at',
            updatedAt: 'fhreform.updated_at',
            isactived: 'fhreform.isactived',
            islocked: 'fhreform.islocked',
            createUid: 'fhreform.create_uid',
            updatedUid: 'fhreform.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhreform.isactived='0'");
        qb.orderBy('fhreform.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhreformRepo = FhreformRepo;
//# sourceMappingURL=fhreform_repo.js.map