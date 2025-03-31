"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContractRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const myentities_1 = require("../myentities");
const Client_1 = require("../myentities/Client");
class ServiceContractRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceContract).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceContract).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.ServiceContract).update(Ids[0], {
            isactived: '1',
        });
    }
    async getserviceContractsById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceContract).createQueryBuilder('service_contract');
        const fields = {
            id: 'service_contract.id',
            contractRef: 'service_contract.contract_ref',
            createdBy: 'service_contract.created_by',
            contractName: 'service_contract.contract_name',
            status: 'service_contract.status',
            account: 'service_contract.account',
            contractValues: 'service_contract.contract_values',
            startDate: 'service_contract.start_date',
            endDate: 'service_contract.end_date',
            sla: 'service_contract.sla',
            period: 'service_contract.period',
            contractValue: 'service_contract.contract_value',
            clientPo: 'service_contract.client_po',
            additionalField5: 'service_contract.additional_field5',
            termsConditions: 'service_contract.terms_conditions',
            remark: 'service_contract.remark',
            createdAt: 'service_contract.created_at',
            updatedAt: 'service_contract.updated_at',
            isactived: 'service_contract.isactived',
            islocked: 'service_contract.islocked',
            createUid: 'service_contract.create_uid',
            updatedUid: 'service_contract.updated_uid',
            currency: 'service_contract.currency',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'service_contract', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getserviceContractAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceContract).createQueryBuilder('service_contract');
        qb.leftJoin(Client_1.Client, 'client', 'service_contract.account=client.id');
        const fields = {
            id: 'service_contract.id',
            contractRef: 'service_contract.contract_ref',
            createdBy: 'service_contract.created_by',
            contractName: 'service_contract.contract_name',
            status: 'service_contract.status',
            account: 'client.name',
            contractValues: 'service_contract.contract_values',
            startDate: 'service_contract.start_date',
            endDate: 'service_contract.end_date',
            sla: 'service_contract.sla',
            period: 'service_contract.period',
            contractValue: 'service_contract.contract_value',
            clientPo: 'service_contract.client_po',
            additionalField5: 'service_contract.additional_field5',
            termsConditions: 'service_contract.terms_conditions',
            remark: 'service_contract.remark',
            createdAt: 'service_contract.created_at',
            updatedAt: 'service_contract.updated_at',
            isactived: 'service_contract.isactived',
            islocked: 'service_contract.islocked',
            createUid: 'service_contract.create_uid',
            updatedUid: 'service_contract.updated_uid',
            currency: 'service_contract.currency',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.distinct(true);
        qb.where("service_contract.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['service_contract.contract_ref', 'service_contract.remark'], search.search);
        qb.orderBy('service_contract.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getserviceContractAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceContract).createQueryBuilder('service_contract');
        const fields = {
            id: 'service_contract.id',
            contractRef: 'service_contract.contract_ref',
            createdBy: 'service_contract.created_by',
            contractName: 'service_contract.contract_name',
            status: 'service_contract.status',
            account: 'service_contract.account',
            contractValues: 'service_contract.contract_values',
            startDate: 'service_contract.start_date',
            endDate: 'service_contract.end_date',
            sla: 'service_contract.sla',
            period: 'service_contract.period',
            contractValue: 'service_contract.contract_value',
            clientPo: 'service_contract.client_po',
            additionalField5: 'service_contract.additional_field5',
            termsConditions: 'service_contract.terms_conditions',
            remark: 'service_contract.remark',
            createdAt: 'service_contract.created_at',
            updatedAt: 'service_contract.updated_at',
            isactived: 'service_contract.isactived',
            islocked: 'service_contract.islocked',
            createUid: 'service_contract.create_uid',
            updatedUid: 'service_contract.updated_uid',
            currency: 'service_contract.currency',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getserviceContract(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.ServiceContract).createQueryBuilder('service_contract');
        const fields = {
            id: 'service_contract.id',
            contractRef: 'service_contract.contract_ref',
            createdBy: 'service_contract.created_by',
            contractName: 'service_contract.contract_name',
            status: 'service_contract.status',
            account: 'service_contract.account',
            contractValues: 'service_contract.contract_values',
            startDate: 'service_contract.start_date',
            endDate: 'service_contract.end_date',
            sla: 'service_contract.sla',
            period: 'service_contract.period',
            contractValue: 'service_contract.contract_value',
            clientPo: 'service_contract.client_po',
            additionalField5: 'service_contract.additional_field5',
            termsConditions: 'service_contract.terms_conditions',
            remark: 'service_contract.remark',
            createdAt: 'service_contract.created_at',
            updatedAt: 'service_contract.updated_at',
            isactived: 'service_contract.isactived',
            islocked: 'service_contract.islocked',
            createUid: 'service_contract.create_uid',
            updatedUid: 'service_contract.updated_uid',
            currency: 'service_contract.currency',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("service_contract.isactived='0' and (service_contract.create_uid = '" +
            userIds +
            "' or service_contract.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        (0, my_utils_1.andWhereEqual)(qb, 'service_contract', 'satus', search.fundType);
        (0, my_utils_1.multiSearch)(qb, ['service_contract.contract_ref', 'service_contract.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
}
exports.ServiceContractRepo = ServiceContractRepo;
//# sourceMappingURL=ServiceContractRepo.js.map