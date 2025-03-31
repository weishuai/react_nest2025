"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class ParameterRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Parameter).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Parameter).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Parameter).update(Ids[0], {
            isactived: '1',
        });
    }
    async getParametersById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Parameter).createQueryBuilder('parameter');
        const fields = {
            id: 'parameter.id',
            name: 'parameter.name',
            key: 'parameter.key',
            description: 'parameter.description',
            createdAt: 'parameter.created_at',
            updatedAt: 'parameter.updated_at',
            isactived: 'parameter.isactived',
            islocked: 'parameter.islocked',
            createUid: 'parameter.create_uid',
            updatedUid: 'parameter.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'parameter', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getParameterAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Parameter).createQueryBuilder('parameter');
        const fields = {
            id: 'parameter.id',
            name: 'parameter.name',
            key: 'parameter.key',
            description: 'parameter.description',
            createdAt: 'parameter.created_at',
            updatedAt: 'parameter.updated_at',
            isactived: 'parameter.isactived',
            islocked: 'parameter.islocked',
            createUid: 'parameter.create_uid',
            updatedUid: 'parameter.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("parameter.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['parameter.name', 'parameter.description'], search.search);
        qb.orderBy('parameter.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getParameterAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Parameter).createQueryBuilder('parameter');
        const fields = {
            id: 'parameter.id',
            name: 'parameter.name',
            key: 'parameter.key',
            description: 'parameter.description',
            createdAt: 'parameter.created_at',
            updatedAt: 'parameter.updated_at',
            isactived: 'parameter.isactived',
            islocked: 'parameter.islocked',
            createUid: 'parameter.create_uid',
            updatedUid: 'parameter.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getParameter(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Parameter).createQueryBuilder('parameter');
        const fields = {
            id: 'parameter.id',
            name: 'parameter.name',
            key: 'parameter.key',
            description: 'parameter.description',
            createdAt: 'parameter.created_at',
            updatedAt: 'parameter.updated_at',
            isactived: 'parameter.isactived',
            islocked: 'parameter.islocked',
            createUid: 'parameter.create_uid',
            updatedUid: 'parameter.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("parameter.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['parameter.name', 'parameter.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ParameterRepo = ParameterRepo;
//# sourceMappingURL=ParameterRepo.js.map