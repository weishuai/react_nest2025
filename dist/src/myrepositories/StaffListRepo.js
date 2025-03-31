"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffListRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class StaffListRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.StaffList).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.StaffList).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.StaffList).update(Ids[0], {
            isactived: '1',
        });
    }
    async getStaffListsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.StaffList).createQueryBuilder('staff_list');
        const fields = {
            id: 'staff_list.id',
            fullName: 'staff_list.full_name',
            name: 'staff_list.name',
            description: 'staff_list.description',
            contactNo: 'staff_list.contact_no',
            email: 'staff_list.email',
            role: 'staff_list.role',
            clients: 'staff_list.clients',
            type: 'staff_list.type',
            login: 'staff_list.login',
            createdAt: 'staff_list.created_at',
            updatedAt: 'staff_list.updated_at',
            isactived: 'staff_list.isactived',
            islocked: 'staff_list.islocked',
            createUid: 'staff_list.create_uid',
            updatedUid: 'staff_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'staff_list', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getStaffListAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.StaffList).createQueryBuilder('staff_list');
        const fields = {
            id: 'staff_list.id',
            name: 'staff_list.name',
            description: 'staff_list.description',
            fullName: 'staff_list.full_name',
            contactNo: 'staff_list.contact_no',
            email: 'staff_list.email',
            role: 'staff_list.role',
            clients: 'staff_list.clients',
            type: 'staff_list.type',
            login: 'staff_list.login',
            createdAt: 'staff_list.created_at',
            updatedAt: 'staff_list.updated_at',
            isactived: 'staff_list.isactived',
            islocked: 'staff_list.islocked',
            createUid: 'staff_list.create_uid',
            updatedUid: 'staff_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("staff_list.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['staff_list.fullName', 'staff_list.contactNo'], search.search);
        qb.orderBy('staff_list.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getStaffListAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.StaffList).createQueryBuilder('staff_list');
        const fields = {
            id: 'staff_list.id',
            name: 'staff_list.name',
            description: 'staff_list.description',
            fullName: 'staff_list.full_name',
            contactNo: 'staff_list.contact_no',
            email: 'staff_list.email',
            role: 'staff_list.role',
            clients: 'staff_list.clients',
            type: 'staff_list.type',
            login: 'staff_list.login',
            createdAt: 'staff_list.created_at',
            updatedAt: 'staff_list.updated_at',
            isactived: 'staff_list.isactived',
            islocked: 'staff_list.islocked',
            createUid: 'staff_list.create_uid',
            updatedUid: 'staff_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getStaffList(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.StaffList).createQueryBuilder('staff_list');
        const fields = {
            id: 'staff_list.id',
            name: 'staff_list.name',
            description: 'staff_list.description',
            fullName: 'staff_list.full_name',
            contactNo: 'staff_list.contact_no',
            email: 'staff_list.email',
            role: 'staff_list.role',
            clients: 'staff_list.clients',
            type: 'staff_list.type',
            login: 'staff_list.login',
            createdAt: 'staff_list.created_at',
            updatedAt: 'staff_list.updated_at',
            isactived: 'staff_list.isactived',
            islocked: 'staff_list.islocked',
            createUid: 'staff_list.create_uid',
            updatedUid: 'staff_list.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("staff_list.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'staff_list', 'contactNo', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['staff_list.fullName', 'staff_list.contactNo'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.StaffListRepo = StaffListRepo;
//# sourceMappingURL=StaffListRepo.js.map