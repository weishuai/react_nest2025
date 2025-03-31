import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';
import { ServiceItem } from '../myentities';

export class ServiceItemRepo {
  async create(accountTagVo: ServiceItemVo) {
    return await getRepository(ServiceItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: ServiceItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ServiceItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ServiceItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateServiceItemByMid(mid: string, id: string) {
    const listItems = this.getServiceItemAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(ServiceItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getServiceItemAllByMid(mid: string) {
    const qb = getRepository(ServiceItem).createQueryBuilder('service_item');
    const fields: Record<string, string> = {
      id: 'service_item.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'service_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getServiceItemsById(id: string) {
    const qb = getRepository(ServiceItem).createQueryBuilder('service_item');
    const fields: Record<string, string> = {
      id: 'service_item.id',
      mid: 'service_item.mid',
      name: 'service_item.name',
      description: 'service_item.description',
      startDate: 'service_item.start_date',
      endDate: 'service_item.end_date',
      qty: 'service_item.qty',
      remarks: 'service_item.remarks',
      createdAt: 'service_item.created_at',
      updatedAt: 'service_item.updated_at',
      isactived: 'service_item.isactived',
      islocked: 'service_item.islocked',
      createUid: 'service_item.create_uid',
      updatedUid: 'service_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'service_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getServiceItemAll(search: ServiceItemSearchVo) {
    const qb = getRepository(ServiceItem).createQueryBuilder('service_item');
    const fields: Record<string, string> = {
      id: 'service_item.id',
      mid: 'service_item.mid',
      name: 'service_item.name',
      description: 'service_item.description',
      startDate: 'service_item.start_date',
      endDate: 'service_item.end_date',
      qty: 'service_item.qty',
      remarks: 'service_item.remarks',
      createdAt: 'service_item.created_at',
      updatedAt: 'service_item.updated_at',
      isactived: 'service_item.isactived',
      islocked: 'service_item.islocked',
      createUid: 'service_item.create_uid',
      updatedUid: 'service_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("service_item.isactived='0'");
    multiSearch(
      qb,
      ['service_item.name', 'service_item.description'],
      search.search,
    );
    qb.orderBy('service_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getServiceItemAllView() {
    const qb = getRepository(ServiceItem).createQueryBuilder('service_item');
    const fields: Record<string, string> = {
      id: 'service_item.id',
      mid: 'service_item.mid',
      name: 'service_item.name',
      description: 'service_item.description',
      startDate: 'service_item.start_date',
      endDate: 'service_item.end_date',
      qty: 'service_item.qty',
      remarks: 'service_item.remarks',
      createdAt: 'service_item.created_at',
      updatedAt: 'service_item.updated_at',
      isactived: 'service_item.isactived',
      islocked: 'service_item.islocked',
      createUid: 'service_item.create_uid',
      updatedUid: 'service_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getServiceItem(search: ServiceItemSearchVo) {
    const qb = getRepository(ServiceItem).createQueryBuilder('service_item');
    const fields: Record<string, string> = {
      id: 'service_item.id',
      mid: 'service_item.mid',
      name: 'service_item.name',
      description: 'service_item.description',
      startDate: 'service_item.start_date',
      endDate: 'service_item.end_date',
      qty: 'service_item.qty',
      remarks: 'service_item.remarks',
      createdAt: 'service_item.created_at',
      updatedAt: 'service_item.updated_at',
      isactived: 'service_item.isactived',
      islocked: 'service_item.islocked',
      createUid: 'service_item.create_uid',
      updatedUid: 'service_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("service_item.isactived='0'");
    //andWhereEqual(qb, 'service_item', 'satus', search.fundType);

    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'service_item', 'mid', search.mid);
    }

    multiSearch(
      qb,
      ['service_item.name', 'service_item.description'],
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
