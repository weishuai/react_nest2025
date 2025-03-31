"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTermRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
class PaymentTermRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).update(Ids[0], {
            isactived: '1',
        });
    }
    async getPaymentTermsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).createQueryBuilder('payment_term');
        const fields = {
            id: 'payment_term.id',
            name: 'payment_term.name',
            description: 'payment_term.description',
            createdAt: 'payment_term.created_at',
            updatedAt: 'payment_term.updated_at',
            isactived: 'payment_term.isactived',
            islocked: 'payment_term.islocked',
            createUid: 'payment_term.create_uid',
            updatedUid: 'payment_term.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'payment_term', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getPaymentTermAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).createQueryBuilder('payment_term');
        const fields = {
            id: 'payment_term.id',
            name: 'payment_term.name',
            description: 'payment_term.description',
            createdAt: 'payment_term.created_at',
            updatedAt: 'payment_term.updated_at',
            isactived: 'payment_term.isactived',
            islocked: 'payment_term.islocked',
            createUid: 'payment_term.create_uid',
            updatedUid: 'payment_term.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("payment_term.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['payment_term.name', 'payment_term.description'], search.search);
        qb.orderBy('payment_term.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getPaymentTermAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).createQueryBuilder('payment_term');
        const fields = {
            id: 'payment_term.id',
            name: 'payment_term.name',
            description: 'payment_term.description',
            createdAt: 'payment_term.created_at',
            updatedAt: 'payment_term.updated_at',
            isactived: 'payment_term.isactived',
            islocked: 'payment_term.islocked',
            createUid: 'payment_term.create_uid',
            updatedUid: 'payment_term.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getPaymentTerm(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.PaymentTerm).createQueryBuilder('payment_term');
        const fields = {
            id: 'payment_term.id',
            name: 'payment_term.name',
            description: 'payment_term.description',
            createdAt: 'payment_term.created_at',
            updatedAt: 'payment_term.updated_at',
            isactived: 'payment_term.isactived',
            islocked: 'payment_term.islocked',
            createUid: 'payment_term.create_uid',
            updatedUid: 'payment_term.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("payment_term.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'payment_term', 'name', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['payment_term.name', 'payment_term.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.PaymentTermRepo = PaymentTermRepo;
//# sourceMappingURL=PaymentTermRepo.js.map