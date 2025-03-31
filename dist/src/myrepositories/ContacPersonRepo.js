"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContacPersonRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
const Client_1 = require("../myentities/Client");
const lodash_1 = require("lodash");
class ContacPersonRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ContacPerson).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ContacPerson).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ContacPerson).update(Ids[0], {
            isactived: '1',
        });
    }
    async getContacPersonAllBydueDate() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ContacPerson).createQueryBuilder('contac_person');
        const fields = {
            id: 'contac_person.id',
            dateBirth: 'contac_person.date_birth',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getContacPersonById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ContacPerson).createQueryBuilder('contac_person');
        const fields = {
            id: 'contac_person.id',
            name: 'contac_person.name',
            client: 'contac_person.client',
            isAlert: 'contac_person.is_alert',
            no: 'contac_person.no',
            email: 'contac_person.email',
            islogin: 'contac_person.islogin',
            login: 'contac_person.login',
            password: 'contac_person.password',
            isnotification: 'contac_person.isnotification',
            isemail: 'contac_person.isemail',
            description: 'contac_person.description',
            jobTitle: 'contac_person.job_title',
            account: 'contac_person.account',
            phoneNumber: 'contac_person.phone_number',
            mobileNumber: 'contac_person.mobile_number',
            faxNumber: 'contac_person.fax_number',
            gender: 'contac_person.gender',
            dateBirth: 'contac_person.date_birth',
            language: 'contac_person.language',
            income: 'contac_person.income',
            marital: 'contac_person.marital',
            children: 'contac_person.children',
            street: 'contac_person.street',
            city: 'contac_person.city',
            state: 'contac_person.state',
            postCode: 'contac_person.post_code',
            country: 'contac_person.country',
            emergency: 'contac_person.emergency',
            securityCourse: 'contac_person.security_course',
            additionalField3: 'contac_person.additional_field3',
            additionalField4: 'contac_person.additional_field4',
            additionalField5: 'contac_person.additional_field5',
            createdAt: 'contac_person.created_at',
            updatedAt: 'contac_person.updated_at',
            isactived: 'contac_person.isactived',
            islocked: 'contac_person.islocked',
            createUid: 'contac_person.create_uid',
            updatedUid: 'contac_person.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'contac_person', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getContacPersonAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ContacPerson).createQueryBuilder('contac_person');
        const fields = {
            id: 'contac_person.id',
            name: 'contac_person.name',
            isAlert: 'contac_person.is_alert',
            client: 'contac_person.client',
            no: 'contac_person.no',
            email: 'contac_person.email',
            islogin: 'contac_person.islogin',
            login: 'contac_person.login',
            password: 'contac_person.password',
            isnotification: 'contac_person.isnotification',
            isemail: 'contac_person.isemail',
            description: 'contac_person.description',
            jobTitle: 'contac_person.job_title',
            account: 'contac_person.account',
            phoneNumber: 'contac_person.phone_number',
            mobileNumber: 'contac_person.mobile_number',
            faxNumber: 'contac_person.fax_number',
            gender: 'contac_person.gender',
            dateBirth: 'contac_person.date_birth',
            language: 'contac_person.language',
            income: 'contac_person.income',
            marital: 'contac_person.marital',
            children: 'contac_person.children',
            street: 'contac_person.street',
            city: 'contac_person.city',
            state: 'contac_person.state',
            postCode: 'contac_person.post_code',
            country: 'contac_person.country',
            emergency: 'contac_person.emergency',
            securityCourse: 'contac_person.security_course',
            additionalField3: 'contac_person.additional_field3',
            additionalField4: 'contac_person.additional_field4',
            additionalField5: 'contac_person.additional_field5',
            createdAt: 'contac_person.created_at',
            updatedAt: 'contac_person.updated_at',
            isactived: 'contac_person.isactived',
            islocked: 'contac_person.islocked',
            createUid: 'contac_person.create_uid',
            updatedUid: 'contac_person.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return { 'fhok': res };
    }
    async getContacPersonAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ContacPerson).createQueryBuilder('contac_person');
        qb.leftJoin(Client_1.Client, 'client', 'client.id=contac_person.client');
        const fields = {
            id: 'contac_person.id',
            name: 'contac_person.name',
            isAlert: 'contac_person.is_alert',
            client: 'client.name',
            no: 'contac_person.no',
            email: 'contac_person.email',
            islogin: 'contac_person.islogin',
            login: 'contac_person.login',
            password: 'contac_person.password',
            isnotification: 'contac_person.isnotification',
            isemail: 'contac_person.isemail',
            description: 'contac_person.description',
            jobTitle: 'contac_person.job_title',
            account: 'contac_person.account',
            phoneNumber: 'contac_person.phone_number',
            mobileNumber: 'contac_person.mobile_number',
            faxNumber: 'contac_person.fax_number',
            gender: 'contac_person.gender',
            dateBirth: 'contac_person.date_birth',
            language: 'contac_person.language',
            income: 'contac_person.income',
            marital: 'contac_person.marital',
            children: 'contac_person.children',
            street: 'contac_person.street',
            city: 'contac_person.city',
            state: 'contac_person.state',
            postCode: 'contac_person.post_code',
            country: 'contac_person.country',
            emergency: 'contac_person.emergency',
            securityCourse: 'contac_person.security_course',
            additionalField3: 'contac_person.additional_field3',
            additionalField4: 'contac_person.additional_field4',
            additionalField5: 'contac_person.additional_field5',
            createdAt: 'contac_person.created_at',
            updatedAt: 'contac_person.updated_at',
            isactived: 'contac_person.isactived',
            islocked: 'contac_person.islocked',
            createUid: 'contac_person.create_uid',
            updatedUid: 'contac_person.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("contac_person.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['contac_person.name', 'contac_person.description'], search.search);
        qb.orderBy('contac_person.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getContacPerson(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ContacPerson).createQueryBuilder('contac_person');
        const fields = {
            id: 'contac_person.id',
            name: 'contac_person.name',
            isAlert: 'contac_person.is_alert',
            client: 'contac_person.client',
            no: 'contac_person.no',
            email: 'contac_person.email',
            islogin: 'contac_person.islogin',
            login: 'contac_person.login',
            password: 'contac_person.password',
            isnotification: 'contac_person.isnotification',
            isemail: 'contac_person.isemail',
            description: 'contac_person.description',
            jobTitle: 'contac_person.job_title',
            account: 'contac_person.account',
            phoneNumber: 'contac_person.phone_number',
            mobileNumber: 'contac_person.mobile_number',
            faxNumber: 'contac_person.fax_number',
            gender: 'contac_person.gender',
            dateBirth: 'contac_person.date_birth',
            language: 'contac_person.language',
            income: 'contac_person.income',
            marital: 'contac_person.marital',
            children: 'contac_person.children',
            street: 'contac_person.street',
            city: 'contac_person.city',
            state: 'contac_person.state',
            postCode: 'contac_person.post_code',
            country: 'contac_person.country',
            emergency: 'contac_person.emergency',
            securityCourse: 'contac_person.security_course',
            additionalField3: 'contac_person.additional_field3',
            additionalField4: 'contac_person.additional_field4',
            additionalField5: 'contac_person.additional_field5',
            createdAt: 'contac_person.created_at',
            updatedAt: 'contac_person.updated_at',
            isactived: 'contac_person.isactived',
            islocked: 'contac_person.islocked',
            createUid: 'contac_person.create_uid',
            updatedUid: 'contac_person.updated_uid',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            if (search.mtable == 'client') {
                (0, my_utils_1.andWhereEqual)(qb, 'contac_person', 'client', search.mid);
            }
        }
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.ContacPersonRepo = ContacPersonRepo;
//# sourceMappingURL=ContacPersonRepo.js.map