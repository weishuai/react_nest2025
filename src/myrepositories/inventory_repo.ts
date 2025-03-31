import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { InventorySearchVo, InventoryVo } from '../myvo/inventory_vo';
import { Inventory } from '../myentities/inventory';

export class InventoryRepo {
  async create(inventoryVo: InventoryVo) {
    return await getRepository(Inventory).insert(inventoryVo);
  }
  async update(Id: string, user_id: string, inventoryVo: InventoryVo) {
    inventoryVo.updatedAt = new Date();
    inventoryVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Inventory).update(Id, inventoryVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Inventory).update(Ids[0], {
      isactived: '1',
    });
  }
  async getInventorysById(id: string) {
    const qb = await getRepository(Inventory).createQueryBuilder(
      'inventory',
    );
    const fields: Record<string, string> = {
      id: 'inventory.id',
      name: 'inventory.name',
      title: 'inventory.title', 
      position: 'inventory.position', 
      jobDate: 'inventory.job_date', 
      warehouse: 'inventory.warehouse', 

      description: 'inventory.description',
      createdAt: 'inventory.created_at',
      updatedAt: 'inventory.updated_at',
      isactived: 'inventory.isactived',
      islocked: 'inventory.islocked',
      createUid: 'inventory.create_uid',
      updatedUid: 'inventory.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'inventory', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getInventoryAll() {
    const qb = getRepository(Inventory).createQueryBuilder('inventory');
    const fields: Record<string, string> = {
      id: 'inventory.id',
      name: 'inventory.name',
      description: 'inventory.description',
      title: 'inventory.title', 
      position: 'inventory.position', 
      jobDate: 'inventory.job_date', 
      warehouse: 'inventory.warehouse', 

      createdAt: 'inventory.created_at',
      updatedAt: 'inventory.updated_at',
      isactived: 'inventory.isactived',
      islocked: 'inventory.islocked',
      createUid: 'inventory.create_uid',
      updatedUid: 'inventory.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("inventory.isactived='0'");
    qb.orderBy('inventory.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getInventoryAllView() {
    const qb = await getRepository(Inventory).createQueryBuilder(
      'inventory',
    );
    const fields: Record<string, string> = {
      id: 'inventory.id',
      name: 'inventory.name',
      description: 'inventory.description',
      title: 'inventory.title', 
      position: 'inventory.position', 
      jobDate: 'inventory.job_date', 
      warehouse: 'inventory.warehouse', 

      createdAt: 'inventory.created_at',
      updatedAt: 'inventory.updated_at',
      isactived: 'inventory.isactived',
      islocked: 'inventory.islocked',
      createUid: 'inventory.create_uid',
      updatedUid: 'inventory.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('inventory.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getInventoryList(search: InventorySearchVo) {
    const qb = await getRepository(Inventory).createQueryBuilder(
      'inventory',
    );
    const fields: Record<string, string> = {
      id: 'inventory.id',
      name: 'inventory.name',
      description: 'inventory.description',
      title: 'inventory.title', 
      position: 'inventory.position', 
      jobDate: 'inventory.job_date', 
      warehouse: 'inventory.warehouse', 

      createdAt: 'inventory.created_at',
      updatedAt: 'inventory.updated_at',
      isactived: 'inventory.isactived',
      islocked: 'inventory.islocked',
      createUid: 'inventory.create_uid',
      updatedUid: 'inventory.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("inventory.isactived='0'");
    /*
    multiSearch(
      qb,
      ['inventory.name', 'inventory.description'],
      search.search,
    );
     */
    qb.orderBy('inventory.created_at', 'DESC');
    //qb.addOrderBy('inventory.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
