"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class UnitRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Unit).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Unit).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Unit).update(Ids[0], {
            isactived: '1',
        });
    }
    async getUnitsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Unit).createQueryBuilder('unit');
        const fields = {
            id: 'unit.id',
            name: 'unit.name',
            description: 'unit.description',
            createdAt: 'unit.created_at',
            updatedAt: 'unit.updated_at',
            isactived: 'unit.isactived',
            islocked: 'unit.islocked',
            createUid: 'unit.create_uid',
            updatedUid: 'unit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'unit', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getUnitAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Unit).createQueryBuilder('unit');
        const fields = {
            id: 'unit.id',
            name: 'unit.name',
            description: 'unit.description',
            createdAt: 'unit.created_at',
            updatedAt: 'unit.updated_at',
            isactived: 'unit.isactived',
            islocked: 'unit.islocked',
            createUid: 'unit.create_uid',
            updatedUid: 'unit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("unit.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['unit.name', 'unit.description'], search.search);
        qb.orderBy('unit.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getUnitAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Unit).createQueryBuilder('unit');
        const fields = {
            id: 'unit.id',
            name: 'unit.name',
            description: 'unit.description',
            createdAt: 'unit.created_at',
            updatedAt: 'unit.updated_at',
            isactived: 'unit.isactived',
            islocked: 'unit.islocked',
            createUid: 'unit.create_uid',
            updatedUid: 'unit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getUnit(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Unit).createQueryBuilder('unit');
        const fields = {
            id: 'unit.id',
            name: 'unit.name',
            description: 'unit.description',
            createdAt: 'unit.created_at',
            updatedAt: 'unit.updated_at',
            isactived: 'unit.isactived',
            islocked: 'unit.islocked',
            createUid: 'unit.create_uid',
            updatedUid: 'unit.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("unit.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'unit', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['unit.name', 'unit.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.UnitRepo = UnitRepo;
//# sourceMappingURL=UnitRepo.js.map