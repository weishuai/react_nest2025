import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';
import { InvoiceItem } from '../myentities';

export class InvoiceItemRepo {
  async create(accountTagVo: InvoiceItemVo) {
    return await getRepository(InvoiceItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: InvoiceItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(InvoiceItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(InvoiceItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateInvoiceItemVoByMid(mid: string, id: string) {
    const listItems = this.getInvoiceItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(InvoiceItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async updateToInvoiceItemVoByMid(mid: string) {
    const listItems = this.getInvoiceItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(InvoiceItem).update(Item.id, { isactived: '1' });
    });
    return 'ok';
  }

  async getInvoiceItemAllByMid(mid: string) {
    const qb = getRepository(InvoiceItem).createQueryBuilder('invoice_item');
    const fields: Record<string, string> = {
      id: 'invoice_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'invoice_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getinvoiceItemsById(id: string) {
    const qb = getRepository(InvoiceItem).createQueryBuilder('invoice_item');
    const fields: Record<string, string> = {
      id: 'invoice_item.id',
      mid: 'invoice_item.mid',
      name: 'invoice_item.name',
      description: 'invoice_item.description',
      qty: 'invoice_item.qty',
      unit: 'invoice_item.unit',
      unitPrice: 'invoice_item.unit_price',
      remark: 'invoice_item.remark',
      createdAt: 'invoice_item.created_at',
      updatedAt: 'invoice_item.updated_at',
      isactived: 'invoice_item.isactived',
      islocked: 'invoice_item.islocked',
      createUid: 'invoice_item.create_uid',
      updatedUid: 'invoice_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'invoice_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getinvoiceItemAll(search: InvoiceItemSearchVo) {
    const qb = getRepository(InvoiceItem).createQueryBuilder('invoice_item');
    const fields: Record<string, string> = {
      id: 'invoice_item.id',
      mid: 'invoice_item.mid',
      name: 'invoice_item.name',
      description: 'invoice_item.description',
      qty: 'invoice_item.qty',
      unit: 'invoice_item.unit',
      unitPrice: 'invoice_item.unit_price',
      remark: 'invoice_item.remark',
      createdAt: 'invoice_item.created_at',
      updatedAt: 'invoice_item.updated_at',
      isactived: 'invoice_item.isactived',
      islocked: 'invoice_item.islocked',
      createUid: 'invoice_item.create_uid',
      updatedUid: 'invoice_item.updated_uid',
    };
    selectFields(qb, fields);
    console.info('search.mid:'+search.mid);
    qb.where("invoice_item.isactived='0' and invoice_item.mid='"+search.mid+"'");
    //multiSearch(qb, ['invoice_item.mid'], search.mid);
    //andWhereEqual(qb, 'invoice_item', 'mid',search.mid);
    if(search.search!="")
    {
      multiSearch(qb, ['invoice_item.name'], search.search);
    }
    
    qb.orderBy('invoice_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getinvoiceItemAllView() {
    const qb = getRepository(InvoiceItem).createQueryBuilder('invoice_item');
    const fields: Record<string, string> = {
      id: 'invoice_item.id',
      mid: 'invoice_item.mid',
      name: 'invoice_item.name',
      description: 'invoice_item.description',
      qty: 'invoice_item.qty',
      unit: 'invoice_item.unit',
      unitPrice: 'invoice_item.unit_price',
      remark: 'invoice_item.remark',
      createdAt: 'invoice_item.created_at',
      updatedAt: 'invoice_item.updated_at',
      isactived: 'invoice_item.isactived',
      islocked: 'invoice_item.islocked',
      createUid: 'invoice_item.create_uid',
      updatedUid: 'invoice_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getinvoiceItem(search: InvoiceItemSearchVo) {
    const qb = getRepository(InvoiceItem).createQueryBuilder('invoice_item');
    const fields: Record<string, string> = {
      id: 'invoice_item.id',
      mid: 'invoice_item.mid',
      name: 'invoice_item.name',
      description: 'invoice_item.description',
      qty: 'invoice_item.qty',
      unit: 'invoice_item.unit',
      unitPrice: 'invoice_item.unit_price',
      remark: 'invoice_item.remark',
      createdAt: 'invoice_item.created_at',
      updatedAt: 'invoice_item.updated_at',
      isactived: 'invoice_item.isactived',
      islocked: 'invoice_item.islocked',
      createUid: 'invoice_item.create_uid',
      updatedUid: 'invoice_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("invoice_item.isactived='0'");
    ///andWhereEqual(qb, 'invoice_item', 'satus', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'invoice_item', 'mid', search.mid);
    }

    ///multiSearch(qb, ['invoice_item.name', 'invoice_item.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
