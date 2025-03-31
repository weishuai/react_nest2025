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
  FHQuotationSearchVo,
  QuotationSearchVo,
  QuotationVo,
} from '../myvo/QuotationVo';
import { Quotation } from '../myentities';
import { QuotationItemRepo } from '.';

export class QuotationRepo {
  private quotationItemRepo: QuotationItemRepo;
  async create(accountTagVo: QuotationVo) {
    return await getRepository(Quotation).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: QuotationVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Quotation).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Quotation).update(Ids[0], {
      isactived: '1',
    });
  }
  async getquotationsById(id: string) {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      quotationName: 'quotation.quotation_name',
      discountType: 'quotation.discount_type',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'quotation', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getquotationAll(search: QuotationSearchVo) {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      discountType: 'quotation.discount_type',
      quotationName: 'quotation.quotation_name',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };
    selectFields(qb, fields);
    qb.where("quotation.isactived='0'");
    // andWhereEqual(qb, 'quotation', 'status', 'ClosedWon');
    multiSearch(
      qb,
      ['quotation.quotation_name', 'quotation.remark'],
      search.search,
    );
    qb.orderBy('quotation.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
 
  }

  async getquotationAllView() {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      discountType: 'quotation.discount_type',
      quotationName: 'quotation.quotation_name',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    ///andWhereEqual(qb, 'quotation', 'status', 'ClosedWon');
    const res = await qb.getRawMany();
    return res;
  }

  async getquotation(userId: string, search: QuotationSearchVo) {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      discountType: 'quotation.discount_type',
      quotationName: 'quotation.quotation_name',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };

    selectFields(qb, fields);
    ///qb.where("quotation.isactived='0'");
    const userIds = userId;
    qb.where(
      "quotation.isactived='0' and (quotation.create_uid = '" +
        userIds +
        "' or quotation.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    andWhereEqual(qb, 'quotation', 'status', search.fundType);

    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      if (search.mtable == 'client') {
        andWhereEqual(qb, 'quotation', 'client_id', search.mid);
      }

      if (search.mtable == 'contac_person') {
        andWhereEqual(qb, 'quotation', 'contact', search.mid);
      }
      if (search.mtable == 'opportunity') {
        andWhereEqual(qb, 'quotation', 'opportunity', search.mid);
      }

      if (search.mtable == 'product') {
        //andWhereEqual(qb, 'quotation_item', 'name', search.mid);
        ///const mid = '';
        const ojt = await this.quotationItemRepo.getQuotationItemByid(
          search.mid,
        );

        if (!_.isNil(ojt)) {
          andWhereEqual(qb, 'quotation', 'id', ojt.mid ? ojt.mid : '');
        }
      }
    }

    multiSearch(
      qb,
      ['quotation.quotation_name', 'quotation.remark'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }

  async getquotationSQL(userId: string, search: FHQuotationSearchVo) {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      discountType: 'quotation.discount_type',
      quotationName: 'quotation.quotation_name',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };

    selectFields(qb, fields);
    qb.where("quotation.isactived='0'");
    //const userIds = userId;
    ///qb.where("quotation.isactived='0' and (quotation.create_uid = '" + userIds + "' or quotation.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    if (!_.isNil(search.stageName)) {
      andWhereEqual(qb, 'quotation', 'status', search.stageName);
    }

    if (!_.isNil(search.startDate) && _.isNil(search.endDate)) {
      console.log('endsValue:' + search.startDate);
      qb.andWhere("quotation.created_at >='" + search.startDate + "'");
    }
    if (!_.isNil(search.endDate) && _.isNil(search.startDate)) {
      console.log('endsValue:' + search.endDate);
      qb.andWhere("quotation.created_at <='" + search.endDate + "'");
    }

    if (!_.isNil(search.endDate) && !_.isNil(search.startDate)) {
      console.log('endsValue:' + search.endDate);
      qb.andWhere(
        "(quotation.created_at >='" +
          search.startDate +
          "'" +
          " and quotation.created_at <='" +
          search.endDate +
          "')",
      );
    }

    if (!_.isNil(search.Owner)) {
      qb.andWhere("quotation.sales_person ='" + search.Owner + "'");
    }

    if (!_.isNil(search.month)) {
      qb.andWhere("quotation.created_at LIKE '%" + search.month + "%'");
    }
    if (!_.isNil(search.Client)) {
      qb.andWhere("quotation.client_id = '" + search.Client + "'");
    }
    ///qb.orderBy('project.createDate', 'DESC');
    ///qb.s('ORDER BY created_at  DESC');
    ///setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const raws = await qb.getRawMany();
    return { count: count, raws: raws };
  }

  async getquotationSQLList(userId: string, search: QuotationSearchVo) {
    const qb = getRepository(Quotation).createQueryBuilder('quotation');
    const fields: Record<string, string> = {
      id: 'quotation.id',
      clientId: 'quotation.client_id',
      quotationName: 'quotation.quotation_name',
      discountType: 'quotation.discount_type',
      salesPerson: 'quotation.sales_person',
      opportunity: 'quotation.opportunity',
      paymentTerms: 'quotation.payment_terms',
      contact: 'quotation.contact',
      taxes: 'quotation.taxes',
      expirationDate: 'quotation.expiration_date',
      currency: 'quotation.currency',
      cat: 'quotation.cat',
      test2: 'quotation.test2',
      additionalField3: 'quotation.additional_field3',
      additionalField4: 'quotation.additional_field4',
      termsConditions: 'quotation.terms_conditions',
      remark: 'quotation.remark',
      createdAt: 'quotation.created_at',
      updatedAt: 'quotation.updated_at',
      isactived: 'quotation.isactived',
      islocked: 'quotation.islocked',
      createUid: 'quotation.create_uid',
      updatedUid: 'quotation.updated_uid',
      status: 'quotation.status',
      amount: 'quotation.amount',
      percentage: 'quotation.percentage',
      discount: 'quotation.discount',
      totalDiscount: 'quotation.total_discount',
      name: 'quotation.name',
      test1: 'quotation.test1',
      refNumber: 'quotation.ref_number',
    };

    selectFields(qb, fields);
    ///qb.where("quotation.isactived='0'");
    const userIds = userId;
    qb.where(
      "quotation.isactived='0' and (quotation.create_uid = '" +
        userIds +
        "' or quotation.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" +
        userIds +
        "%') ) )",
    );

    if (!_.isNil(search.stageName)) {
      andWhereEqual(qb, 'quotation', 'status', search.stageName);
    }

    if (!_.isNil(search.startDate)) {
      console.log('endsValue:' + search.startDate);
      qb.andWhere("quotation.created_at >='" + search.startDate + "'");
    }
    if (!_.isNil(search.endDate)) {
      console.log('endsValue:' + search.endDate);
      qb.andWhere("quotation.created_at <='" + search.endDate + "'");
    }

    if (!_.isNil(search.Owner)) {
      qb.andWhere("quotation.sales_person ='" + search.Owner + "'");
    }

    if (!_.isNil(search.month)) {
      qb.andWhere("quotation.created_at LIKE '%" + search.month + "%'");
    }

    setSorts(qb, fields, search.sort);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
