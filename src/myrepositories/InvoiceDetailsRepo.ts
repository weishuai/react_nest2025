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
  InvoiceDetailsSearchVo,
  InvoiceDetailsVo,
} from '../myvo/InvoiceDetailsVo';
import { InvoiceDetails } from '../myentities';
import { User } from '../myentities/User';

export class InvoiceDetailsRepo {
  async create(accountTagVo: InvoiceDetailsVo) {
    return await getRepository(InvoiceDetails).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: InvoiceDetailsVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(InvoiceDetails).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(InvoiceDetails).update(Ids[0], {
      isactived: '1',
    });
  }

  async getinvoiceDetailsAllBydueDate() {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      dueDate: 'invoice_details.due_date',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    ///qb.where('invoice_details.due_date');
    ///andWhereEqual(qb, 'invoice_details', 'due_date', id);
    const res = await qb.getRawMany();
    return res;
  }

  async getinvoiceDetailssById(id: string) {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      linkedUotation: 'invoice_details.linked_uotation',
      invoiceNumber: 'invoice_details.invoice_number',
      invoiceStatus: 'invoice_details.invoice_status',
      invoiceName: 'invoice_details.invoice_name',
      account: 'invoice_details.account',
      salesPerson: 'invoice_details.sales_person',
      clientContact: 'invoice_details.client_contact',
      currency: 'invoice_details.currency',
      invoiceDate: 'invoice_details.invoice_date',
      dueDate: 'invoice_details.due_date',
      techName: 'invoice_details.tech_name',
      trackingNo: 'invoice_details.tracking_no',
      additionalField3: 'invoice_details.additional_field3',
      additionalField4: 'invoice_details.additional_field4',
      remark: 'invoice_details.remark',
      clientNumber: 'invoice_details.client_number',
      createdAt: 'invoice_details.created_at',
      updatedAt: 'invoice_details.updated_at',
      isactived: 'invoice_details.isactived',
      islocked: 'invoice_details.islocked',
      createUid: 'invoice_details.create_uid',
      updatedUid: 'invoice_details.updated_uid',
      tax: 'invoice_details.tax',
      overDate: 'invoice_details.over_date',
      isAlert: 'invoice_details.is_alert',
      totalAmount: 'invoice_details.total_amount',
      paidAmount: 'invoice_details.paid_amount',
      outstandingAmount: 'invoice_details.outstanding_amount',
      ///FHpaidAmount: '(SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      ///FHoutstandingAmount: 'total_amount - (SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      refNumber: 'invoice_details.ref_number',
      clientPoNumber: 'invoice_details.client_po_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'invoice_details', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getInvoiceDetailsById(id: string) {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      linkedUotation: 'invoice_details.linked_uotation',
      invoiceNumber: 'invoice_details.invoice_number',
      invoiceStatus: 'invoice_details.invoice_status',
      invoiceName: 'invoice_details.invoice_name',
      account: 'invoice_details.account',
      salesPerson: 'invoice_details.sales_person',
      clientContact: 'invoice_details.client_contact',
      currency: 'invoice_details.currency',
      invoiceDate: 'invoice_details.invoice_date',
      dueDate: 'invoice_details.due_date',
      techName: 'invoice_details.tech_name',
      trackingNo: 'invoice_details.tracking_no',
      additionalField3: 'invoice_details.additional_field3',
      additionalField4: 'invoice_details.additional_field4',
      remark: 'invoice_details.remark',
      clientNumber: 'invoice_details.client_number',
      createdAt: 'invoice_details.created_at',
      updatedAt: 'invoice_details.updated_at',
      isactived: 'invoice_details.isactived',
      islocked: 'invoice_details.islocked',
      createUid: 'invoice_details.create_uid',
      updatedUid: 'invoice_details.updated_uid',
      tax: 'invoice_details.tax',
      overDate: 'invoice_details.over_date',
      isAlert: 'invoice_details.is_alert',
      totalAmount: 'invoice_details.total_amount',
      paidAmount: 'invoice_details.paid_amount',
      outstandingAmount: 'invoice_details.outstanding_amount',
      ///FHpaidAmount: '(SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      ///FHoutstandingAmount: 'total_amount - (SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      refNumber: 'invoice_details.ref_number',
      clientPoNumber: 'invoice_details.client_po_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'invoice_details', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getinvoiceDetailsAll(search: InvoiceDetailsSearchVo) {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
      qb.leftJoin(User, 'user', 'invoice_details.client_contact=user.id');
      qb.leftJoin(User, 'user2', 'invoice_details.sales_person=user2.id');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      linkedUotation: 'invoice_details.linked_uotation',
      invoiceNumber: 'invoice_details.invoice_number',
      invoiceStatus: 'invoice_details.invoice_status',
      invoiceName: 'invoice_details.invoice_name',
      account: 'invoice_details.account',
      salesPerson: 'user2.userName',
      clientContact: 'user.userName',
      currency: 'invoice_details.currency',
      invoiceDate: 'invoice_details.invoice_date',
      dueDate: 'invoice_details.due_date',
      techName: 'invoice_details.tech_name',
      trackingNo: 'invoice_details.tracking_no',
      additionalField3: 'invoice_details.additional_field3',
      additionalField4: 'invoice_details.additional_field4',
      remark: 'invoice_details.remark',
      clientNumber: 'invoice_details.client_number',
      createdAt: 'invoice_details.created_at',
      updatedAt: 'invoice_details.updated_at',
      isactived: 'invoice_details.isactived',
      islocked: 'invoice_details.islocked',
      createUid: 'invoice_details.create_uid',
      updatedUid: 'invoice_details.updated_uid',
      tax: 'invoice_details.tax',
      overDate: 'invoice_details.over_date',
      isAlert: 'invoice_details.is_alert',
      totalAmount: 'invoice_details.total_amount',
      paidAmount: 'invoice_details.paid_amount',
      outstandingAmount: 'invoice_details.outstanding_amount',
      refNumber: 'invoice_details.ref_number',
      clientPoNumber: 'invoice_details.client_po_number',
    };
    selectFields(qb, fields);
    qb.where("invoice_details.isactived='0'");
    multiSearch(qb, ['invoice_details.account', 'invoice_details.remark'], search.search);
    qb.orderBy('invoice_details.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getinvoiceDetailsAllView() {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      linkedUotation: 'invoice_details.linked_uotation',
      invoiceNumber: 'invoice_details.invoice_number',
      invoiceStatus: 'invoice_details.invoice_status',
      invoiceName: 'invoice_details.invoice_name',
      account: 'invoice_details.account',
      salesPerson: 'invoice_details.sales_person',
      clientContact: 'invoice_details.client_contact',
      currency: 'invoice_details.currency',
      invoiceDate: 'invoice_details.invoice_date',
      dueDate: 'invoice_details.due_date',
      techName: 'invoice_details.tech_name',
      trackingNo: 'invoice_details.tracking_no',
      additionalField3: 'invoice_details.additional_field3',
      additionalField4: 'invoice_details.additional_field4',
      remark: 'invoice_details.remark',
      clientNumber: 'invoice_details.client_number',
      createdAt: 'invoice_details.created_at',
      updatedAt: 'invoice_details.updated_at',
      isactived: 'invoice_details.isactived',
      islocked: 'invoice_details.islocked',
      createUid: 'invoice_details.create_uid',
      updatedUid: 'invoice_details.updated_uid',
      tax: 'invoice_details.tax',
      overDate: 'invoice_details.over_date',
      isAlert: 'invoice_details.is_alert',
      totalAmount: 'invoice_details.total_amount',
      paidAmount: 'invoice_details.paid_amount',
      outstandingAmount: 'invoice_details.outstanding_amount',
      refNumber: 'invoice_details.ref_number',
      clientPoNumber: 'invoice_details.client_po_number',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return {"fhok":res};
  }

  async getinvoiceDetails(userId: string, search: InvoiceDetailsSearchVo) {
    const qb =
      getRepository(InvoiceDetails).createQueryBuilder('invoice_details');
    const fields: Record<string, string> = {
      id: 'invoice_details.id',
      linkedUotation: 'invoice_details.linked_uotation',
      invoiceNumber: 'invoice_details.invoice_number',
      invoiceStatus: 'invoice_details.invoice_status',
      invoiceName: 'invoice_details.invoice_name',
      account: 'invoice_details.account',
      salesPerson: 'invoice_details.sales_person',
      clientContact: 'invoice_details.client_contact',
      currency: 'invoice_details.currency',
      invoiceDate: 'invoice_details.invoice_date',
      dueDate: 'invoice_details.due_date',
      techName: 'invoice_details.tech_name',
      trackingNo: 'invoice_details.tracking_no',
      additionalField3: 'invoice_details.additional_field3',
      additionalField4: 'invoice_details.additional_field4',
      remark: 'invoice_details.remark',
      clientNumber: 'invoice_details.client_number',
      createdAt: 'invoice_details.created_at',
      updatedAt: 'invoice_details.updated_at',
      isactived: 'invoice_details.isactived',
      islocked: 'invoice_details.islocked',
      createUid: 'invoice_details.create_uid',
      updatedUid: 'invoice_details.updated_uid',
      tax: 'invoice_details.tax',
      overDate: 'invoice_details.over_date',
      isAlert: 'invoice_details.is_alert',
      totalAmount: 'invoice_details.total_amount',
      paidAmount: 'invoice_details.paid_amount',
      outstandingAmount: 'invoice_details.outstanding_amount',
      ///FHpaidAmount: '(SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      ///FHoutstandingAmount: 'total_amount - (SELECT  sum(payment_amount) from  invoice_payment where mid=invoice_details.id)',
      refNumber: 'invoice_details.ref_number',
      clientPoNumber: 'invoice_details.client_po_number',
    };

    selectFields(qb, fields);
    ///qb.where("invoice_details.isactived='0'");
    const userIds = userId;
    ///qb.where("invoice_details.isactived='0' and (invoice_details.create_uid = '" + userIds + "' or invoice_details.create_uid in (select login  from staff_list where role in (select id  from terms where leader_id LIKE '%" + userIds + "%') ) )");

    //andWhereEqual(qb, 'invoice_details', 'satus', search.fundType);

    if (!_.isNil(search.mtable) && !_.isEmpty(search.mtable)) {
      if (search.mtable == 'client') {
        andWhereEqual(qb, 'invoice_details', 'account', search.mid);
      }
    }

    ///multiSearch(qb, ['invoice_details.account', 'invoice_details.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
