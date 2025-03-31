import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { WarehouseSearchVo, WarehouseVo } from '../myvo/warehouse_vo';
import { Warehouse } from '../myentities/warehouse';

export class WarehouseRepo {
  async create(warehouseVo: WarehouseVo) {
    return await getRepository(Warehouse).insert(warehouseVo);
  }
  async update(Id: string, user_id: string, warehouseVo: WarehouseVo) {
    warehouseVo.updatedAt = new Date();
    warehouseVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Warehouse).update(Id, warehouseVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Warehouse).update(Ids[0], {
      isactived: '1',
    });
  }
  async getWarehousesById(id: string) {
    const qb = await getRepository(Warehouse).createQueryBuilder(
      'warehouse',
    );
    const fields: Record<string, string> = {
      id: 'warehouse.id',
      name: 'warehouse.name',
      myname: 'warehouse.myname', 
      fhname: 'warehouse.fhname', 
      address: 'warehouse.address', 

      description: 'warehouse.description',
      createdAt: 'warehouse.created_at',
      updatedAt: 'warehouse.updated_at',
      isactived: 'warehouse.isactived',
      islocked: 'warehouse.islocked',
      createUid: 'warehouse.create_uid',
      updatedUid: 'warehouse.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'warehouse', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getWarehouseAll() {
    const qb = getRepository(Warehouse).createQueryBuilder('warehouse');
    const fields: Record<string, string> = {
      id: 'warehouse.id',
      name: 'warehouse.name',
      description: 'warehouse.description',
      myname: 'warehouse.myname', 
      fhname: 'warehouse.fhname', 
      address: 'warehouse.address', 

      createdAt: 'warehouse.created_at',
      updatedAt: 'warehouse.updated_at',
      isactived: 'warehouse.isactived',
      islocked: 'warehouse.islocked',
      createUid: 'warehouse.create_uid',
      updatedUid: 'warehouse.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("warehouse.isactived='0'");
    qb.orderBy('warehouse.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getWarehouseAllView() {
    const qb = await getRepository(Warehouse).createQueryBuilder(
      'warehouse',
    );
    const fields: Record<string, string> = {
      id: 'warehouse.id',
      name: 'warehouse.name',
      description: 'warehouse.description',
      myname: 'warehouse.myname', 
      fhname: 'warehouse.fhname', 
      address: 'warehouse.address', 

      createdAt: 'warehouse.created_at',
      updatedAt: 'warehouse.updated_at',
      isactived: 'warehouse.isactived',
      islocked: 'warehouse.islocked',
      createUid: 'warehouse.create_uid',
      updatedUid: 'warehouse.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('warehouse.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getWarehouseList(search: WarehouseSearchVo) {
    const qb = await getRepository(Warehouse).createQueryBuilder(
      'warehouse',
    );
    const fields: Record<string, string> = {
      id: 'warehouse.id',
      name: 'warehouse.name',
      description: 'warehouse.description',
      myname: 'warehouse.myname', 
      fhname: 'warehouse.fhname', 
      address: 'warehouse.address', 

      createdAt: 'warehouse.created_at',
      updatedAt: 'warehouse.updated_at',
      isactived: 'warehouse.isactived',
      islocked: 'warehouse.islocked',
      createUid: 'warehouse.create_uid',
      updatedUid: 'warehouse.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("warehouse.isactived='0'");
    /*
    multiSearch(
      qb,
      ['warehouse.name', 'warehouse.description'],
      search.search,
    );
     */
    qb.orderBy('warehouse.created_at', 'DESC');
    //qb.addOrderBy('warehouse.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
