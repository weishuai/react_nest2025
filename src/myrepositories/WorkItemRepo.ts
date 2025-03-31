import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { WorkItemSearchVo, WorkItemVo } from '../myvo/WorkItemVo';
import { WorkItem } from '../myentities';
export class WorkItemRepo {
  async create(accountTagVo: WorkItemVo) {
    return await getRepository(WorkItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: WorkItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(WorkItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(WorkItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateWorkItemVoByMid(mid: string, id: string) {
    const listItems = this.getWorkItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(WorkItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async updateToWorkItemsVoByMid(mid: string) {
    const listItems = this.getWorkItemsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(WorkItem).update(Item.id, { isactived: '1' });
    });
    return 'ok';
  }

  async WorkItemUpdateMid(mid: string, MID: string) {
    const listItems = this.getWorkItemsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(WorkItem).update(Item.id, { mid: MID });
    });
    return 'ok';
  }

  async getWorkItemsAllByMid(mid: string) {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'work_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getWorkItemsById(id: string) {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
      name: 'work_item.name',
      description: 'work_item.description',
      qty: 'work_item.qty',
      unit: 'work_item.unit',
      unitPrice: 'work_item.unit_price',
      discount: 'work_item.discount',
      total: 'work_item.total',
      createdAt: 'work_item.created_at',
      updatedAt: 'work_item.updated_at',
      isactived: 'work_item.isactived',
      islocked: 'work_item.islocked',
      createUid: 'work_item.create_uid',
      updatedUid: 'work_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'work_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getWorkItemAll(search: WorkItemSearchVo) {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
      name: 'work_item.name',
      description: 'work_item.description',
      qty: 'work_item.qty',
      unit: 'work_item.unit',
      unitPrice: 'work_item.unit_price',
      discount: 'work_item.discount',
      total: 'work_item.total',
      createdAt: 'work_item.created_at',
      updatedAt: 'work_item.updated_at',
      isactived: 'work_item.isactived',
      islocked: 'work_item.islocked',
      createUid: 'work_item.create_uid',
      updatedUid: 'work_item.updated_uid',
    };
    selectFields(qb, fields);
    // qb.where("work_item.isactived='0'");
    // multiSearch(qb, ['work_item.name', 'work_item.remark'], search.search);
    qb.where("work_item.isactived='0' and work_item.mid='"+search.mid+"'");
    qb.orderBy('work_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getWorkItemAllView() {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
      name: 'work_item.name',
      description: 'work_item.description',
      qty: 'work_item.qty',
      unit: 'work_item.unit',
      unitPrice: 'work_item.unit_price',
      discount: 'work_item.discount',
      total: 'work_item.total',
      createdAt: 'work_item.created_at',
      updatedAt: 'work_item.updated_at',
      isactived: 'work_item.isactived',
      islocked: 'work_item.islocked',
      createUid: 'work_item.create_uid',
      updatedUid: 'work_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getWorkItemAllByMid(mid: string) {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'work_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getWorkItem(search: WorkItemSearchVo) {
    const qb = getRepository(WorkItem).createQueryBuilder('work_item');
    const fields: Record<string, string> = {
      id: 'work_item.id',
      name: 'work_item.name',
      description: 'work_item.description',
      qty: 'work_item.qty',
      unit: 'work_item.unit',
      unitPrice: 'work_item.unit_price',
      discount: 'work_item.discount',
      total: 'work_item.total',
      createdAt: 'work_item.created_at',
      updatedAt: 'work_item.updated_at',
      isactived: 'work_item.isactived',
      islocked: 'work_item.islocked',
      createUid: 'work_item.create_uid',
      updatedUid: 'work_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("work_item.isactived='0'");
    andWhereEqual(qb, 'work_item', 'satus', search.fundType);
    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'work_item', 'mid', search.mid);
    }
    multiSearch(qb, ['work_item.name', 'work_item.remark'], search.search);

    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
