"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHRoleRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class FHRoleRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Role).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Role).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Role).update(Ids, { isDel: 1 });
    }
    async getFHRolesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Role).createQueryBuilder('role');
        const fields = {
            id: 'role.id',
            name: 'role.name',
            app: 'role.app',
            isDefault: 'role.is_default',
            isDel: 'role.is_del',
            createdAt: 'role.created_at',
            updatedAt: 'role.updated_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'role', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getFHRoleAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Role).createQueryBuilder('role');
        const fields = {
            id: 'role.id',
            name: 'role.name',
            app: 'role.app',
            isDefault: 'role.is_default',
            isDel: 'role.is_del',
            createdAt: 'role.created_at',
            updatedAt: 'role.updated_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('role.is_del=0');
        (0, my_utils_1.multiSearch)(qb, ['role.name'], search.search);
        qb.orderBy('role.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getFHRoleAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Role).createQueryBuilder('role');
        const fields = {
            id: 'role.id',
            name: 'role.name',
            app: 'role.app',
            isDefault: 'role.is_default',
            isDel: 'role.is_del',
            createdAt: 'role.created_at',
            updatedAt: 'role.updated_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getFHRole(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Role).createQueryBuilder('role');
        const fields = {
            id: 'role.id',
            name: 'role.name',
            app: 'role.app',
            isDefault: 'role.is_default',
            isDel: 'role.is_del',
            createdAt: 'role.created_at',
            updatedAt: 'role.updated_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('role.is_del=0');
        (0, my_utils_1.multiSearch)(qb, ['role.name'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.FHRoleRepo = FHRoleRepo;
//# sourceMappingURL=FHRoleRepo.js.map