import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  FHOpportunitySearchVo,
  OpportunitySearchVo,
  OpportunityVo,
} from '../myvo/OpportunityVo';
import { Opportunity } from '../myentities';
import { User } from '../myentities/User';
export class OpportunityRepo {
  async create(accountTagVo: OpportunityVo) {
    return await getRepository(Opportunity).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: OpportunityVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Opportunity).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Opportunity).update(Ids[0], {
      isactived: '1',
    });
  }

  async getopportunitysById(id: string) {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    const fields: Record<string, string> = {
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
      closeProbabilitcloseProbability:
        'opportunity.close_probabilitclose_probability',
      forecastValue: 'opportunity.forecast_value',
      expectedCloseDate: 'opportunity.expected_close_date',
      refNumber: 'opportunity.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'opportunity', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getOpportunitysCountBystageName(stageName: string) {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    const fields: Record<string, string> = {
      id: 'opportunity.id',
    };
    selectFields(qb, fields);
    qb.where("opportunity.isactived='0'");
    andWhereEqual(qb, 'opportunity', 'stage_name', stageName);
    const count = await qb.getCount();
    return count;
  }

  async getopportunityAll(search: OpportunitySearchVo) {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    qb.leftJoin(User, 'user', 'opportunity.opportunity_owner=user.id');
    const fields: Record<string, string> = {
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
      closeProbabilitcloseProbability:
        'opportunity.close_probabilitclose_probability',
      forecastValue: 'opportunity.forecast_value',
      expectedCloseDate: 'opportunity.expected_close_date',
      refNumber: 'opportunity.ref_number',
    };
    selectFields(qb, fields);
    qb.where("opportunity.isactived='0'");
    multiSearch(
      qb,
      ['opportunity.account', 'opportunity.remark'],
      search.search,
    );
    qb.orderBy('opportunity.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getopportunityAllView() {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    const fields: Record<string, string> = {
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
      closeProbabilitcloseProbability:
        'opportunity.close_probabilitclose_probability',
      forecastValue: 'opportunity.forecast_value',
      expectedCloseDate: 'opportunity.expected_close_date',
      refNumber: 'opportunity.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getopportunity(userId: string, search: OpportunitySearchVo) {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    const fields: Record<string, string> = {
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
      closeProbabilitcloseProbability:
        'opportunity.close_probabilitclose_probability',
      forecastValue: 'opportunity.forecast_value',
      expectedCloseDate: 'opportunity.expected_close_date',
      refNumber: 'opportunity.ref_number',
    };

    selectFields(qb, fields);
    //qb.where("opportunity.isactived='0'");
    const userIds = userId;
    qb.where(
      "opportunity.isactived='0' and (opportunity.create_uid = '" +
        userIds +
        "' or opportunity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      if (search.mtable == 'client') {
        andWhereEqual(qb, 'opportunity', 'account', search.mid);
      }
    }

    multiSearch(
      qb,
      ['opportunity.account', 'opportunity.remark'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }

  async getopportunitySQL(userId: string, search: FHOpportunitySearchVo) {
    const qb = getRepository(Opportunity).createQueryBuilder('opportunity');
    const fields: Record<string, string> = {
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
      closeProbabilitcloseProbability:
        'opportunity.close_probabilitclose_probability',
      forecastValue: 'opportunity.forecast_value',
      expectedCloseDate: 'opportunity.expected_close_date',
      refNumber: 'opportunity.ref_number',
    };

    selectFields(qb, fields);
    qb.where("opportunity.isactived='0'");
    const userIds = userId;
    ///qb.where("opportunity.isactived='0' and (opportunity.create_uid = '" + userIds + "' or opportunity.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    if (!_.isNil(search.stageName)) {
      andWhereEqual(qb, 'opportunity', 'stageName', search.stageName);
    }
    if (!_.isNil(search.startDate) && _.isNil(search.endDate)) {
      qb.andWhere("opportunity.created_at >='" + search.startDate + "'");
    }

    if (!_.isNil(search.endDate) && _.isNil(search.startDate)) {
      qb.andWhere("opportunity.created_at <='" + search.endDate + "'");
    }
    if (!_.isNil(search.endDate) && !_.isNil(search.startDate)) {
      qb.andWhere(
        "(opportunity.created_at >='" +
          search.startDate +
          "'" +
          " and opportunity.created_at <='" +
          search.endDate +
          "')",
      );
    }
    if (!_.isNil(search.Owner)) {
      qb.andWhere("opportunity.opportunity_owner ='" + search.Owner + "'");
    }

    if (!_.isNil(search.month)) {
      qb.andWhere("opportunity.created_at LIKE '%" + search.month + "%'");
    }
    if (!_.isNil(search.Client)) {
      qb.andWhere("opportunity.account = '" + search.Client + "'");
    }
    ///qb.orderBy('project.createDate', 'DESC');
    ///setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    ///const { skip, take } = skipAndTake(count, search);
    const raws = await qb.getRawMany();

    return { count: count, raws: raws };
  }
}
