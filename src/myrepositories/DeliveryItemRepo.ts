import dayjs from 'dayjs';
import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';
import { DeliveryItem } from '../myentities';

export class DeliveryItemRepo {
  async create(accountTagVo: DeliveryItemVo) {
    return await getRepository(DeliveryItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: DeliveryItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(DeliveryItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(DeliveryItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updatedeliveryItemVoByMid(mid: string, id: string) {
    const listItems = this.getdeliveryItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(DeliveryItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getdeliveryItemAllByMid(mid: string) {
    const qb = getRepository(DeliveryItem).createQueryBuilder('delivery_item');
    const fields: Record<string, string> = {
      id: 'delivery_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'delivery_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getdeliveryItemsById(id: string) {
    const qb = getRepository(DeliveryItem).createQueryBuilder('delivery_item');
    const fields: Record<string, string> = {
      id: 'delivery_item.id',
      mid: 'delivery_item.mid',
      detailsId: 'delivery_item.details_id',
      name: 'delivery_item.name',
      description: 'delivery_item.description',
      qty: 'delivery_item.qty',
      balanceQty: 'delivery_item.balance_qty',
      unit: 'delivery_item.unit',
      remarks: 'delivery_item.remarks',
      createdAt: 'delivery_item.created_at',
      updatedAt: 'delivery_item.updated_at',
      isactived: 'delivery_item.isactived',
      islocked: 'delivery_item.islocked',
      createUid: 'delivery_item.create_uid',
      updatedUid: 'delivery_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'delivery_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getdeliveryItemAll(search: DeliveryItemSearchVo) {
    const qb = getRepository(DeliveryItem).createQueryBuilder('delivery_item');
    const fields: Record<string, string> = {
      id: 'delivery_item.id',
      mid: 'delivery_item.mid',
      detailsId: 'delivery_item.details_id',
      name: 'delivery_item.name',
      description: 'delivery_item.description',
      qty: 'delivery_item.qty',
      balanceQty: 'delivery_item.balance_qty',
      unit: 'delivery_item.unit',
      remarks: 'delivery_item.remarks',
      createdAt: 'delivery_item.created_at',
      updatedAt: 'delivery_item.updated_at',
      isactived: 'delivery_item.isactived',
      islocked: 'delivery_item.islocked',
      createUid: 'delivery_item.create_uid',
      updatedUid: 'delivery_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("delivery_item.isactived='0'");
    multiSearch(qb, ['delivery_item.name', 'delivery_item.remarks'], search.search);
    qb.orderBy('delivery_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getdeliveryItemAllView() {
    const qb = getRepository(DeliveryItem).createQueryBuilder('delivery_item');
    const fields: Record<string, string> = {
      id: 'delivery_item.id',
      mid: 'delivery_item.mid',
      detailsId: 'delivery_item.details_id',
      name: 'delivery_item.name',
      description: 'delivery_item.description',
      qty: 'delivery_item.qty',
      balanceQty: 'delivery_item.balance_qty',
      unit: 'delivery_item.unit',
      remarks: 'delivery_item.remarks',
      createdAt: 'delivery_item.created_at',
      updatedAt: 'delivery_item.updated_at',
      isactived: 'delivery_item.isactived',
      islocked: 'delivery_item.islocked',
      createUid: 'delivery_item.create_uid',
      updatedUid: 'delivery_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getdeliveryItem(search: DeliveryItemSearchVo) {
    const qb = getRepository(DeliveryItem).createQueryBuilder('delivery_item');
    const fields: Record<string, string> = {
      id: 'delivery_item.id',
      mid: 'delivery_item.mid',
      detailsId: 'delivery_item.details_id',
      name: 'delivery_item.name',
      description: 'delivery_item.description',
      qty: 'delivery_item.qty',
      balanceQty: 'delivery_item.balance_qty',
      unit: 'delivery_item.unit',
      remarks: 'delivery_item.remarks',
      createdAt: 'delivery_item.created_at',
      updatedAt: 'delivery_item.updated_at',
      isactived: 'delivery_item.isactived',
      islocked: 'delivery_item.islocked',
      createUid: 'delivery_item.create_uid',
      updatedUid: 'delivery_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("delivery_item.isactived='0'");
    ///andWhereEqual(qb, 'delivery_item', 'satus', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'delivery_item', 'mid', search.mid);
    }
    ///multiSearch(qb, ['delivery_item.name', 'delivery_item.remarks'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
