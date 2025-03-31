"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttenceRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class AttenceRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Attence).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Attence).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Attence).update(Ids[0], {
            isactived: '1',
        });
    }
    async getAttencesById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Attence).createQueryBuilder('attence');
        const fields = {
            id: 'attence.id',
            name: 'attence.name',
            date: 'attence.date',
            checkInTime: 'attence.check_in_time',
            checkInTemperature: 'attence.check_in_temperature',
            checkInPlace: 'attence.check_in_place',
            checkInAddress: 'attence.check_in_address',
            checkInNotes: 'attence.check_in_notes',
            checkOutTime: 'attence.check_out_time',
            checkOutTemperature: 'attence.check_out_temperature',
            checkOutPlace: 'attence.check_out_place',
            checkOutAddress: 'attence.check_out_address',
            checkOutNotes: 'attence.check_out_notes',
            createdAt: 'attence.created_at',
            updatedAt: 'attence.updated_at',
            isactived: 'attence.isactived',
            islocked: 'attence.islocked',
            createUid: 'attence.create_uid',
            updatedUid: 'attence.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'attence', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getAttenceAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Attence).createQueryBuilder('attence');
        const fields = {
            id: 'attence.id',
            name: 'attence.name',
            date: 'attence.date',
            checkInTime: 'attence.check_in_time',
            checkInTemperature: 'attence.check_in_temperature',
            checkInPlace: 'attence.check_in_place',
            checkInAddress: 'attence.check_in_address',
            checkInNotes: 'attence.check_in_notes',
            checkOutTime: 'attence.check_out_time',
            checkOutTemperature: 'attence.check_out_temperature',
            checkOutPlace: 'attence.check_out_place',
            checkOutAddress: 'attence.check_out_address',
            checkOutNotes: 'attence.check_out_notes',
            createdAt: 'attence.created_at',
            updatedAt: 'attence.updated_at',
            isactived: 'attence.isactived',
            islocked: 'attence.islocked',
            createUid: 'attence.create_uid',
            updatedUid: 'attence.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("attence.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['attence.name', 'attence.date'], search.search);
        qb.orderBy('attence.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getAttenceAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Attence).createQueryBuilder('attence');
        const fields = {
            id: 'attence.id',
            name: 'attence.name',
            date: 'attence.date',
            checkInTime: 'attence.check_in_time',
            checkInTemperature: 'attence.check_in_temperature',
            checkInPlace: 'attence.check_in_place',
            checkInAddress: 'attence.check_in_address',
            checkInNotes: 'attence.check_in_notes',
            checkOutTime: 'attence.check_out_time',
            checkOutTemperature: 'attence.check_out_temperature',
            checkOutPlace: 'attence.check_out_place',
            checkOutAddress: 'attence.check_out_address',
            checkOutNotes: 'attence.check_out_notes',
            createdAt: 'attence.created_at',
            updatedAt: 'attence.updated_at',
            isactived: 'attence.isactived',
            islocked: 'attence.islocked',
            createUid: 'attence.create_uid',
            updatedUid: 'attence.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getAttence(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Attence).createQueryBuilder('attence');
        const fields = {
            id: 'attence.id',
            name: 'attence.name',
            date: 'attence.date',
            checkInTime: 'attence.check_in_time',
            checkInTemperature: 'attence.check_in_temperature',
            checkInPlace: 'attence.check_in_place',
            checkInAddress: 'attence.check_in_address',
            checkInNotes: 'attence.check_in_notes',
            checkOutTime: 'attence.check_out_time',
            checkOutTemperature: 'attence.check_out_temperature',
            checkOutPlace: 'attence.check_out_place',
            checkOutAddress: 'attence.check_out_address',
            checkOutNotes: 'attence.check_out_notes',
            createdAt: 'attence.created_at',
            updatedAt: 'attence.updated_at',
            isactived: 'attence.isactived',
            islocked: 'attence.islocked',
            createUid: 'attence.create_uid',
            updatedUid: 'attence.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("attence.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'attence', 'date', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['attence.name', 'attence.date'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.AttenceRepo = AttenceRepo;
//# sourceMappingURL=AttenceRepo.js.map