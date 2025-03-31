"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhinspectionRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const fhinspection_1 = require("../myentities/fhinspection");
class FhinspectionRepo {
    async create(fhinspectionVo) {
        return await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).insert(fhinspectionVo);
    }
    async update(Id, user_id, fhinspectionVo) {
        fhinspectionVo.updatedAt = new Date();
        fhinspectionVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).update(Id, fhinspectionVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).update(Ids[0], {
            isactived: '1',
        });
    }
    async getFhinspectionsById(id) {
        const qb = await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).createQueryBuilder('fhinspection');
        const fields = {
            id: 'fhinspection.id',
            name: 'fhinspection.name',
            fhname: 'fhinspection.fhname',
            fhF1: 'fhinspection.fhF1',
            fhF2: 'fhinspection.fhF2',
            fhF3: 'fhinspection.fhF3',
            fhF4: 'fhinspection.fhF4',
            fhF5: 'fhinspection.fhF5',
            fhF6: 'fhinspection.fhF6',
            description: 'fhinspection.description',
            createdAt: 'fhinspection.created_at',
            updatedAt: 'fhinspection.updated_at',
            isactived: 'fhinspection.isactived',
            islocked: 'fhinspection.islocked',
            createUid: 'fhinspection.create_uid',
            updatedUid: 'fhinspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'fhinspection', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFhinspectionAll() {
        const qb = (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).createQueryBuilder('fhinspection');
        const fields = {
            id: 'fhinspection.id',
            name: 'fhinspection.name',
            description: 'fhinspection.description',
            fhname: 'fhinspection.fhname',
            fhF1: 'fhinspection.fhF1',
            fhF2: 'fhinspection.fhF2',
            fhF3: 'fhinspection.fhF3',
            fhF4: 'fhinspection.fhF4',
            fhF5: 'fhinspection.fhF5',
            fhF6: 'fhinspection.fhF6',
            createdAt: 'fhinspection.created_at',
            updatedAt: 'fhinspection.updated_at',
            isactived: 'fhinspection.isactived',
            islocked: 'fhinspection.islocked',
            createUid: 'fhinspection.create_uid',
            updatedUid: 'fhinspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhinspection.isactived='0'");
        qb.orderBy('fhinspection.created_at', 'DESC');
        return qb.getRawMany();
    }
    async getFhinspectionAllView() {
        const qb = await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).createQueryBuilder('fhinspection');
        const fields = {
            id: 'fhinspection.id',
            name: 'fhinspection.name',
            description: 'fhinspection.description',
            fhname: 'fhinspection.fhname',
            fhF1: 'fhinspection.fhF1',
            fhF2: 'fhinspection.fhF2',
            fhF3: 'fhinspection.fhF3',
            fhF4: 'fhinspection.fhF4',
            fhF5: 'fhinspection.fhF5',
            fhF6: 'fhinspection.fhF6',
            createdAt: 'fhinspection.created_at',
            updatedAt: 'fhinspection.updated_at',
            isactived: 'fhinspection.isactived',
            islocked: 'fhinspection.islocked',
            createUid: 'fhinspection.create_uid',
            updatedUid: 'fhinspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('fhinspection.created_at', 'DESC');
        const res = await qb.getRawMany();
        return res;
    }
    async getFhinspectionList(search) {
        const qb = await (0, typeorm_1.getRepository)(fhinspection_1.Fhinspection).createQueryBuilder('fhinspection');
        const fields = {
            id: 'fhinspection.id',
            name: 'fhinspection.name',
            description: 'fhinspection.description',
            fhname: 'fhinspection.fhname',
            fhF1: 'fhinspection.fhF1',
            fhF2: 'fhinspection.fhF2',
            fhF3: 'fhinspection.fhF3',
            fhF4: 'fhinspection.fhF4',
            fhF5: 'fhinspection.fhF5',
            fhF6: 'fhinspection.fhF6',
            createdAt: 'fhinspection.created_at',
            updatedAt: 'fhinspection.updated_at',
            isactived: 'fhinspection.isactived',
            islocked: 'fhinspection.islocked',
            createUid: 'fhinspection.create_uid',
            updatedUid: 'fhinspection.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("fhinspection.isactived='0'");
        qb.orderBy('fhinspection.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FhinspectionRepo = FhinspectionRepo;
//# sourceMappingURL=fhinspection_repo.js.map