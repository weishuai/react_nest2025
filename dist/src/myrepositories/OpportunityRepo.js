"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const lodash_1 = require("lodash");
const myentities_1 = require("../myentities");
const User_1 = require("../myentities/User");
class OpportunityRepo {
    async create(accountTagVo) {
        return await (0, typeorm_1.getRepository)(myentities_1.Opportunity).insert(accountTagVo);
    }
    async update(Id, user_id, accountTagVo) {
        accountTagVo.updatedAt = new Date();
        accountTagVo.updatedUid = user_id;
        console.log(Id);
        return await (0, typeorm_1.getRepository)(myentities_1.Opportunity).update(Id, accountTagVo);
    }
    async remove(Ids) {
        console.log(Ids);
        return await (0, typeorm_1.getRepository)(myentities_1.Opportunity).update(Ids[0], {
            isactived: '1',
        });
    }
    async getopportunitysById(id) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        const fields = {
            id: 'opportunity.id',
            opportunityName: 'opportunity.opportunity_name',
            account: 'opportunity.account',
            opportunityOwner: 'opportunity.opportunity_owner',
            expiryDate: 'opportunity.expiry_date',
            stageName: 'opportunity.stage_name',
            probability: 'opportunity.probability',
            currency: 'opportunity.currency',
            salesValue: 'opportunity.sales_value',
            cost: 'opportunity.cost',
            remark: 'opportunity.remark',
            createdAt: 'opportunity.created_at',
            updatedAt: 'opportunity.updated_at',
            isactived: 'opportunity.isactived',
            islocked: 'opportunity.islocked',
            createUid: 'opportunity.create_uid',
            updatedUid: 'opportunity.updated_uid',
            stage: 'opportunity.stage',
            priority: 'opportunity.priority',
            dealAge: 'opportunity.deal_age',
            closeProbabilitcloseProbability: 'opportunity.close_probabilitclose_probability',
            forecastValue: 'opportunity.forecast_value',
            expectedCloseDate: 'opportunity.expected_close_date',
            refNumber: 'opportunity.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'opportunity', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async getOpportunitysCountBystageName(stageName) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        const fields = {
            id: 'opportunity.id',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("opportunity.isactived='0'");
        (0, my_utils_1.andWhereEqual)(qb, 'opportunity', 'stage_name', stageName);
        const count = await qb.getCount();
        return count;
    }
    async getopportunityAll(search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        qb.leftJoin(User_1.User, 'user', 'opportunity.opportunity_owner=user.id');
        const fields = {
            id: 'opportunity.id',
            opportunityName: 'opportunity.opportunity_name',
            account: 'opportunity.account',
            opportunityOwner: 'user.userName',
            expiryDate: 'opportunity.expiry_date',
            stageName: 'opportunity.stage_name',
            probability: 'opportunity.probability',
            currency: 'opportunity.currency',
            salesValue: 'opportunity.sales_value',
            cost: 'opportunity.cost',
            remark: 'opportunity.remark',
            createdAt: 'opportunity.created_at',
            updatedAt: 'opportunity.updated_at',
            isactived: 'opportunity.isactived',
            islocked: 'opportunity.islocked',
            createUid: 'opportunity.create_uid',
            updatedUid: 'opportunity.updated_uid',
            stage: 'opportunity.stage',
            priority: 'opportunity.priority',
            dealAge: 'opportunity.deal_age',
            closeProbabilitcloseProbability: 'opportunity.close_probabilitclose_probability',
            forecastValue: 'opportunity.forecast_value',
            expectedCloseDate: 'opportunity.expected_close_date',
            refNumber: 'opportunity.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("opportunity.isactived='0'");
        (0, my_utils_1.multiSearch)(qb, ['opportunity.account', 'opportunity.remark'], search.search);
        qb.orderBy('opportunity.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getopportunityAllView() {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        const fields = {
            id: 'opportunity.id',
            opportunityName: 'opportunity.opportunity_name',
            account: 'opportunity.account',
            opportunityOwner: 'opportunity.opportunity_owner',
            expiryDate: 'opportunity.expiry_date',
            stageName: 'opportunity.stage_name',
            probability: 'opportunity.probability',
            currency: 'opportunity.currency',
            salesValue: 'opportunity.sales_value',
            cost: 'opportunity.cost',
            remark: 'opportunity.remark',
            createdAt: 'opportunity.created_at',
            updatedAt: 'opportunity.updated_at',
            isactived: 'opportunity.isactived',
            islocked: 'opportunity.islocked',
            createUid: 'opportunity.create_uid',
            updatedUid: 'opportunity.updated_uid',
            stage: 'opportunity.stage',
            priority: 'opportunity.priority',
            dealAge: 'opportunity.deal_age',
            closeProbabilitcloseProbability: 'opportunity.close_probabilitclose_probability',
            forecastValue: 'opportunity.forecast_value',
            expectedCloseDate: 'opportunity.expected_close_date',
            refNumber: 'opportunity.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getopportunity(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        const fields = {
            id: 'opportunity.id',
            opportunityName: 'opportunity.opportunity_name',
            account: 'opportunity.account',
            opportunityOwner: 'opportunity.opportunity_owner',
            expiryDate: 'opportunity.expiry_date',
            stageName: 'opportunity.stage_name',
            probability: 'opportunity.probability',
            currency: 'opportunity.currency',
            salesValue: 'opportunity.sales_value',
            cost: 'opportunity.cost',
            remark: 'opportunity.remark',
            createdAt: 'opportunity.created_at',
            updatedAt: 'opportunity.updated_at',
            isactived: 'opportunity.isactived',
            islocked: 'opportunity.islocked',
            createUid: 'opportunity.create_uid',
            updatedUid: 'opportunity.updated_uid',
            stage: 'opportunity.stage',
            priority: 'opportunity.priority',
            dealAge: 'opportunity.deal_age',
            closeProbabilitcloseProbability: 'opportunity.close_probabilitclose_probability',
            forecastValue: 'opportunity.forecast_value',
            expectedCloseDate: 'opportunity.expected_close_date',
            refNumber: 'opportunity.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        const userIds = userId;
        qb.where("opportunity.isactived='0' and (opportunity.create_uid = '" +
            userIds +
            "' or opportunity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
            userIds +
            "%') ) )");
        if (!lodash_1.default.isNil(search.mtable) && !lodash_1.default.isEmpty(search.mtable)) {
            if (search.mtable == 'client') {
                (0, my_utils_1.andWhereEqual)(qb, 'opportunity', 'account', search.mid);
            }
        }
        (0, my_utils_1.multiSearch)(qb, ['opportunity.account', 'opportunity.remark'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        const res = raws;
        return res;
    }
    async getopportunitySQL(userId, search) {
        const qb = (0, typeorm_1.getRepository)(myentities_1.Opportunity).createQueryBuilder('opportunity');
        const fields = {
            id: 'opportunity.id',
            opportunityName: 'opportunity.opportunity_name',
            account: 'opportunity.account',
            opportunityOwner: 'opportunity.opportunity_owner',
            expiryDate: 'opportunity.expiry_date',
            stageName: 'opportunity.stage_name',
            probability: 'opportunity.probability',
            currency: 'opportunity.currency',
            salesValue: 'opportunity.sales_value',
            cost: 'opportunity.cost',
            remark: 'opportunity.remark',
            createdAt: 'opportunity.created_at',
            updatedAt: 'opportunity.updated_at',
            isactived: 'opportunity.isactived',
            islocked: 'opportunity.islocked',
            createUid: 'opportunity.create_uid',
            updatedUid: 'opportunity.updated_uid',
            stage: 'opportunity.stage',
            priority: 'opportunity.priority',
            dealAge: 'opportunity.deal_age',
            closeProbabilitcloseProbability: 'opportunity.close_probabilitclose_probability',
            forecastValue: 'opportunity.forecast_value',
            expectedCloseDate: 'opportunity.expected_close_date',
            refNumber: 'opportunity.ref_number',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where("opportunity.isactived='0'");
        const userIds = userId;
        if (!lodash_1.default.isNil(search.stageName)) {
            (0, my_utils_1.andWhereEqual)(qb, 'opportunity', 'stageName', search.stageName);
        }
        if (!lodash_1.default.isNil(search.startDate) && lodash_1.default.isNil(search.endDate)) {
            qb.andWhere("opportunity.created_at >='" + search.startDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && lodash_1.default.isNil(search.startDate)) {
            qb.andWhere("opportunity.created_at <='" + search.endDate + "'");
        }
        if (!lodash_1.default.isNil(search.endDate) && !lodash_1.default.isNil(search.startDate)) {
            qb.andWhere("(opportunity.created_at >='" +
                search.startDate +
                "'" +
                " and opportunity.created_at <='" +
                search.endDate +
                "')");
        }
        if (!lodash_1.default.isNil(search.Owner)) {
            qb.andWhere("opportunity.opportunity_owner ='" + search.Owner + "'");
        }
        if (!lodash_1.default.isNil(search.month)) {
            qb.andWhere("opportunity.created_at LIKE '%" + search.month + "%'");
        }
        if (!lodash_1.default.isNil(search.Client)) {
            qb.andWhere("opportunity.account = '" + search.Client + "'");
        }
        const count = await qb.getCount();
        const raws = await qb.getRawMany();
        return { count: count, raws: raws };
    }
}
exports.OpportunityRepo = OpportunityRepo;
//# sourceMappingURL=OpportunityRepo.js.map