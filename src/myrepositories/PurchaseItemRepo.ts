import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';
import { PurchaseItem } from '../myentities';

export class PurchaseItemRepo {
  async create(accountTagVo: PurchaseItemVo) {
    return await getRepository(PurchaseItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: PurchaseItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(PurchaseItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(PurchaseItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updatepurchaseItemVoByMid(mid: string, id: string) {
    const listItems = this.getpurchaseItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(PurchaseItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getpurchaseItemAllByMid(mid: string) {
    const qb = getRepository(PurchaseItem).createQueryBuilder('purchase_item');
    const fields: Record<string, string> = {
      id: 'purchase_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'purchase_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getpurchaseItemsById(id: string) {
    const qb = getRepository(PurchaseItem).createQueryBuilder('purchase_item');
    const fields: Record<string, string> = {
      id: 'purchase_item.id',
      mid: 'purchase_item.mid',
      detailsId: 'purchase_item.details_id',
      name: 'purchase_item.name',
      description: 'purchase_item.description',
      qty: 'purchase_item.qty',
      balanceQty: 'purchase_item.balance_qty',
      unit: 'purchase_item.unit',
      remarks: 'purchase_item.remarks',
      createdAt: 'purchase_item.created_at',
      updatedAt: 'purchase_item.updated_at',
      isactived: 'purchase_item.isactived',
      islocked: 'purchase_item.islocked',
      createUid: 'purchase_item.create_uid',
      updatedUid: 'purchase_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'purchase_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getpurchaseItemAll(search: PurchaseItemSearchVo) {
    const qb = getRepository(PurchaseItem).createQueryBuilder('purchase_item');
    const fields: Record<string, string> = {
      id: 'purchase_item.id',
      mid: 'purchase_item.mid',
      detailsId: 'purchase_item.details_id',
      name: 'purchase_item.name',
      description: 'purchase_item.description',
      qty: 'purchase_item.qty',
      balanceQty: 'purchase_item.balance_qty',
      unit: 'purchase_item.unit',
      remarks: 'purchase_item.remarks',
      createdAt: 'purchase_item.created_at',
      updatedAt: 'purchase_item.updated_at',
      isactived: 'purchase_item.isactived',
      islocked: 'purchase_item.islocked',
      createUid: 'purchase_item.create_uid',
      updatedUid: 'purchase_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("purchase_item.isactived='0'");
    multiSearch(
      qb,
      ['purchase_item.name', 'purchase_item.remarks'],
      search.search,
    );
    qb.orderBy('purchase_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getpurchaseItemAllView() {
    const qb = getRepository(PurchaseItem).createQueryBuilder('purchase_item');
    const fields: Record<string, string> = {
      id: 'purchase_item.id',
      mid: 'purchase_item.mid',
      detailsId: 'purchase_item.details_id',
      name: 'purchase_item.name',
      description: 'purchase_item.description',
      qty: 'purchase_item.qty',
      balanceQty: 'purchase_item.balance_qty',
      unit: 'purchase_item.unit',
      remarks: 'purchase_item.remarks',
      createdAt: 'purchase_item.created_at',
      updatedAt: 'purchase_item.updated_at',
      isactived: 'purchase_item.isactived',
      islocked: 'purchase_item.islocked',
      createUid: 'purchase_item.create_uid',
      updatedUid: 'purchase_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getpurchaseItem(search: PurchaseItemSearchVo) {
    const qb = getRepository(PurchaseItem).createQueryBuilder('purchase_item');
    const fields: Record<string, string> = {
      id: 'purchase_item.id',
      mid: 'purchase_item.mid',
      detailsId: 'purchase_item.details_id',
      name: 'purchase_item.name',
      description: 'purchase_item.description',
      qty: 'purchase_item.qty',
      balanceQty: 'purchase_item.balance_qty',
      unit: 'purchase_item.unit',
      remarks: 'purchase_item.remarks',
      createdAt: 'purchase_item.created_at',
      updatedAt: 'purchase_item.updated_at',
      isactived: 'purchase_item.isactived',
      islocked: 'purchase_item.islocked',
      createUid: 'purchase_item.create_uid',
      updatedUid: 'purchase_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("purchase_item.isactived='0'");
    ///andWhereEqual(qb, 'purchase_item', 'satus', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'purchase_item', 'mid', search.mid);
    }
    multiSearch(
      qb,
      ['purchase_item.name', 'purchase_item.remarks'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
