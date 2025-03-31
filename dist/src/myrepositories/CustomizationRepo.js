"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationRepo = void 0;
const dayjs_1 = require("dayjs");
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
class CustomizationRepo {
    async nextVal(name, table) {
        const seq = await (0, typeorm_1.getRepository)(myentities_1.Customization).findOneBy({
            name,
        });
        if (lodash_1.default.isNil(seq)) {
            const value = 1;
            await (0, typeorm_1.getRepository)(myentities_1.Customization).insert({
                name: name,
                table: table,
                value: value,
                isactived: '0',
            });
            const fhday = (0, dayjs_1.default)().format('YYYYMM');
            return { No: name + fhday + String(value) };
        }
        else {
            let value = 0;
            if (!lodash_1.default.isNull(seq.value)) {
                value = seq.value + 1;
            }
            await (0, typeorm_1.getRepository)(myentities_1.Customization).update({ name }, { value: value });
            const fhday = (0, dayjs_1.default)().format('YYYYMM');
            return { No: name + fhday + String(value) };
        }
    }
    async nextGetNo(name, table) {
        return this.nextVal(name, table);
    }
    async getCustomizationsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Customization).createQueryBuilder('customization');
        const fields = {
            id: 'customization.id',
            name: 'customization.name',
            format: 'customization.format',
            value: 'customization.value',
            table: 'customization.table',
            rate: 'customization.rate',
            source: 'customization.source',
            description: 'customization.description',
            createdAt: 'customization.created_at',
            updatedAt: 'customization.updated_at',
            isactived: 'customization.isactived',
            islocked: 'customization.islocked',
            createUid: 'customization.create_uid',
            updatedUid: 'customization.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'customization', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getCustomizationAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Customization).createQueryBuilder('customization');
        const fields = {
            id: 'customization.id',
            name: 'customization.name',
            format: 'customization.format',
            value: 'customization.value',
            table: 'customization.table',
            rate: 'customization.rate',
            source: 'customization.source',
            description: 'customization.description',
            createdAt: 'customization.created_at',
            updatedAt: 'customization.updated_at',
            isactived: 'customization.isactived',
            islocked: 'customization.islocked',
            createUid: 'customization.create_uid',
            updatedUid: 'customization.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("customization.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['customization.name', 'customization.description'], search.search);
        qb.orderBy('customization.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getCustomizationAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Customization).createQueryBuilder('customization');
        const fields = {
            id: 'customization.id',
            name: 'customization.name',
            format: 'customization.format',
            value: 'customization.value',
            table: 'customization.table',
            rate: 'customization.rate',
            source: 'customization.source',
            description: 'customization.description',
            createdAt: 'customization.created_at',
            updatedAt: 'customization.updated_at',
            isactived: 'customization.isactived',
            islocked: 'customization.islocked',
            createUid: 'customization.create_uid',
            updatedUid: 'customization.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getCustomization(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Customization).createQueryBuilder('customization');
        const fields = {
            id: 'customization.id',
            name: 'customization.name',
            format: 'customization.format',
            value: 'customization.value',
            table: 'customization.table',
            rate: 'customization.rate',
            source: 'customization.source',
            description: 'customization.description',
            createdAt: 'customization.created_at',
            updatedAt: 'customization.updated_at',
            isactived: 'customization.isactived',
            islocked: 'customization.islocked',
            createUid: 'customization.create_uid',
            updatedUid: 'customization.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("customization.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'customization', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['customization.name', 'customization.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.CustomizationRepo = CustomizationRepo;
//# sourceMappingURL=CustomizationRepo.js.map