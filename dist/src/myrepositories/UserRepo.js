"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class UserRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.User).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.User).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.User).update(Ids, {});
    }
    async getUserBaseAll() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            name: 'user.user_name',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const raws = await qb.getRawMany();
        return raws;
    }
    async getUserBaseAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            name: 'user.user_name',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getUserBaseById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            userName: 'user.user_name',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'user', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=UserRepo.js.map