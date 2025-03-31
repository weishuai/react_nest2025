"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
const User_1 = require("../myentities/User");
const lodash_1 = require("lodash");
class ClientRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Client).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        console.info("后台接收:2");
        return await (0, typeorm_1.getRepository)(myentities_1.Client).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Client).update(Ids[0], {
            isactived: '1',
        });
    }
    async getClientById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Client).createQueryBuilder('client');
        const fields = {
            id: 'client.id',
            name: 'client.name',
            accountTag: 'client.account_tag',
            clientState: 'client.client_state',
            accountsType: 'client.accounts_type',
            description: 'client.description',
            type: 'client.type',
            accountOwner: 'client.account_owner',
            regNumber: 'client.reg_number',
            industry: 'client.industry',
            phoneNumber: 'client.phone_number',
            website: 'client.website',
            faxNumber: 'client.fax_number',
            street: 'client.street',
            city: 'client.city',
            state: 'client.state',
            postCode: 'client.post_code',
            country: 'client.country',
            don: 'client.don',
            ref: 'client.ref',
            gender: 'client.gender',
            dateBirth: 'client.date_birth',
            language: 'client.language',
            income: 'client.income',
            marital: 'client.marital',
            children: 'client.children',
            additionalField4: 'client.additional_field4',
            additionalField5: 'client.additional_field5',
            createdAt: 'client.created_at',
            updatedAt: 'client.updated_at',
            isactived: 'client.isactived',
            islocked: 'client.islocked',
            createUid: 'client.create_uid',
            updatedUid: 'client.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'client', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getClientAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Client).createQueryBuilder('client');
        qb.leftJoin(User_1.User, 'user', 'client.account_owner=user.id');
        const fields = {
            id: 'client.id',
            name: 'client.name',
            accountTag: 'client.account_tag',
            clientState: 'client.client_state',
            accountsType: 'client.accounts_type',
            description: 'client.description',
            type: 'client.type',
            accountOwner: 'user.userName',
            regNumber: 'client.reg_number',
            industry: 'client.industry',
            phoneNumber: 'client.phone_number',
            website: 'client.website',
            faxNumber: 'client.fax_number',
            street: 'client.street',
            city: 'client.city',
            state: 'client.state',
            postCode: 'client.post_code',
            country: 'client.country',
            don: 'client.don',
            ref: 'client.ref',
            gender: 'client.gender',
            dateBirth: 'client.date_birth',
            language: 'client.language',
            income: 'client.income',
            marital: 'client.marital',
            children: 'client.children',
            additionalField4: 'client.additional_field4',
            additionalField5: 'client.additional_field5',
            createdAt: 'client.created_at',
            updatedAt: 'client.updated_at',
            isactived: 'client.isactived',
            islocked: 'client.islocked',
            createUid: 'client.create_uid',
            updatedUid: 'client.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("client.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['client.name', 'client.description'], search.search);
        qb.orderBy('client.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getClientAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Client).createQueryBuilder('client');
        const fields = {
            id: 'client.id',
            name: 'client.name',
            accountTag: 'client.account_tag',
            clientState: 'client.client_state',
            accountsType: 'client.accounts_type',
            description: 'client.description',
            type: 'client.type',
            accountOwner: 'client.account_owner',
            regNumber: 'client.reg_number',
            industry: 'client.industry',
            phoneNumber: 'client.phone_number',
            website: 'client.website',
            faxNumber: 'client.fax_number',
            street: 'client.street',
            city: 'client.city',
            state: 'client.state',
            postCode: 'client.post_code',
            country: 'client.country',
            don: 'client.don',
            ref: 'client.ref',
            gender: 'client.gender',
            dateBirth: 'client.date_birth',
            language: 'client.language',
            income: 'client.income',
            marital: 'client.marital',
            children: 'client.children',
            additionalField4: 'client.additional_field4',
            additionalField5: 'client.additional_field5',
            createdAt: 'client.created_at',
            updatedAt: 'client.updated_at',
            isactived: 'client.isactived',
            islocked: 'client.islocked',
            createUid: 'client.create_uid',
            updatedUid: 'client.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getClient(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Client).createQueryBuilder('client');
        const fields = {
            id: 'client.id',
            name: 'client.name',
            accountTag: 'client.account_tag',
            clientState: 'client.client_state',
            accountsType: 'client.accounts_type',
            description: 'client.description',
            type: 'client.type',
            accountOwner: 'client.account_owner',
            regNumber: 'client.reg_number',
            industry: 'client.industry',
            phoneNumber: 'client.phone_number',
            website: 'client.website',
            faxNumber: 'client.fax_number',
            street: 'client.street',
            city: 'client.city',
            state: 'client.state',
            postCode: 'client.post_code',
            country: 'client.country',
            don: 'client.don',
            ref: 'client.ref',
            gender: 'client.gender',
            dateBirth: 'client.date_birth',
            language: 'client.language',
            income: 'client.income',
            marital: 'client.marital',
            children: 'client.children',
            additionalField4: 'client.additional_field4',
            additionalField5: 'client.additional_field5',
            createdAt: 'client.created_at',
            updatedAt: 'client.updated_at',
            isactived: 'client.isactived',
            islocked: 'client.islocked',
            createUid: 'client.create_uid',
            updatedUid: 'client.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const userIds = userId;
        if (!lodash_1.default.isNil(search.fundType) && search.fundType != 'all') {
            (0, my_utils_1.andWhereEqual)(qb, 'client', 'type', search.fundType);
        }
        if (!lodash_1.default.isNil(search.accountsType)) {
            (0, my_utils_1.andWhereEqual)(qb, 'client', 'accounts_type', search.accountsType);
        }
        (0, my_utils_1.multiSearch)(qb, ['client.name', 'client.description'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
    async getClientSQL(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Client).createQueryBuilder('client');
        const fields = {
            id: 'client.id',
            name: 'client.name',
            accountTag: 'client.account_tag',
            clientState: 'client.client_state',
            accountsType: 'client.accounts_type',
            description: 'client.description',
            type: 'client.type',
            accountOwner: 'client.account_owner',
            regNumber: 'client.reg_number',
            industry: 'client.industry',
            phoneNumber: 'client.phone_number',
            website: 'client.website',
            faxNumber: 'client.fax_number',
            street: 'client.street',
            city: 'client.city',
            state: 'client.state',
            postCode: 'client.post_code',
            country: 'client.country',
            don: 'client.don',
            ref: 'client.ref',
            gender: 'client.gender',
            dateBirth: 'client.date_birth',
            language: 'client.language',
            income: 'client.income',
            marital: 'client.marital',
            children: 'client.children',
            additionalField4: 'client.additional_field4',
            additionalField5: 'client.additional_field5',
            createdAt: 'client.created_at',
            updatedAt: 'client.updated_at',
            isactived: 'client.isactived',
            islocked: 'client.islocked',
            createUid: 'client.create_uid',
            updatedUid: 'client.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const userIds = userId;
        if (!lodash_1.default.isNil(search.stageName)) {
            (0, my_utils_1.andWhereEqual)(qb, 'client', 'client_state', search.stageName);
        }
        if (!lodash_1.default.isNil(search.startDate) && lodash_1.default.isNil(search.endDate)) {
            qb.andWhere("client.created_at >='" + search.startDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && lodash_1.default.isNil(search.startDate)) {
            qb.andWhere("client.created_at <='" + search.endDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && !lodash_1.default.isNil(search.startDate)) {
        }
        if (!lodash_1.default.isNil(search.Owner)) {
            qb.andWhere("client.account_owner ='" + search.Owner + "'");
        }
        if (!lodash_1.default.isNil(search.month)) {
            qb.andWhere("client.created_at LIKE '%" + search.month + "%'");
        }
        if (!lodash_1.default.isNil(search.Client)) {
            qb.andWhere("client.id = '" + search.Client + "'");
        }
        const count = await qb.getCount();
        const raws = await qb.getRawMany();
        return { count: count, raws: raws };
    }
}
exports.ClientRepo = ClientRepo;
//# sourceMappingURL=ClientRepo.js.map