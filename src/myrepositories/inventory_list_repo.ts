import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { InventoryListSearchVo, InventoryListVo } from '../myvo/inventory_list_vo';
import { InventoryList } from '../myentities/inventory_list';

export class InventoryListRepo {
  async create(inventoryListVo: InventoryListVo) {
    return await getRepository(InventoryList).insert(inventoryListVo);
  }
  async update(Id: string, user_id: string, inventoryListVo: InventoryListVo) {
    inventoryListVo.updatedAt = new Date();
    inventoryListVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(InventoryList).update(Id, inventoryListVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(InventoryList).update(Ids[0], {
      isactived: '1',
    });
  }
  async getInventoryListsById(id: string) {
    const qb = await getRepository(InventoryList).createQueryBuilder(
      'inventory_list',
    );
    const fields: Record<string, string> = {
      id: 'inventory_list.id',
      name: 'inventory_list.name',
      mid: 'inventory_list.mid', 
      product: 'inventory_list.product', 
      unit: 'inventory_list.unit', 
      position: 'inventory_list.position', 
      batch: 'inventory_list.batch', 
      package: 'inventory_list.package', 
      owner: 'inventory_list.owner', 
      theoretical: 'inventory_list.theoretical', 
      actualQuantity: 'inventory_list.actual_quantity', 

      description: 'inventory_list.description',
      createdAt: 'inventory_list.created_at',
      updatedAt: 'inventory_list.updated_at',
      isactived: 'inventory_list.isactived',
      islocked: 'inventory_list.islocked',
      createUid: 'inventory_list.create_uid',
      updatedUid: 'inventory_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'inventory_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getInventoryListAll() {
    const qb = getRepository(InventoryList).createQueryBuilder('inventory_list');
    const fields: Record<string, string> = {
      id: 'inventory_list.id',
      name: 'inventory_list.name',
      description: 'inventory_list.description',
      mid: 'inventory_list.mid', 
      product: 'inventory_list.product', 
      unit: 'inventory_list.unit', 
      position: 'inventory_list.position', 
      batch: 'inventory_list.batch', 
      package: 'inventory_list.package', 
      owner: 'inventory_list.owner', 
      theoretical: 'inventory_list.theoretical', 
      actualQuantity: 'inventory_list.actual_quantity', 

      createdAt: 'inventory_list.created_at',
      updatedAt: 'inventory_list.updated_at',
      isactived: 'inventory_list.isactived',
      islocked: 'inventory_list.islocked',
      createUid: 'inventory_list.create_uid',
      updatedUid: 'inventory_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("inventory_list.isactived='0'");
    qb.orderBy('inventory_list.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getInventoryListAllView() {
    const qb = await getRepository(InventoryList).createQueryBuilder(
      'inventory_list',
    );
    const fields: Record<string, string> = {
      id: 'inventory_list.id',
      name: 'inventory_list.name',
      description: 'inventory_list.description',
      mid: 'inventory_list.mid', 
      product: 'inventory_list.product', 
      unit: 'inventory_list.unit', 
      position: 'inventory_list.position', 
      batch: 'inventory_list.batch', 
      package: 'inventory_list.package', 
      owner: 'inventory_list.owner', 
      theoretical: 'inventory_list.theoretical', 
      actualQuantity: 'inventory_list.actual_quantity', 

      createdAt: 'inventory_list.created_at',
      updatedAt: 'inventory_list.updated_at',
      isactived: 'inventory_list.isactived',
      islocked: 'inventory_list.islocked',
      createUid: 'inventory_list.create_uid',
      updatedUid: 'inventory_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('inventory_list.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getInventoryListList(search: InventoryListSearchVo) {
    const qb = await getRepository(InventoryList).createQueryBuilder(
      'inventory_list',
    );
    const fields: Record<string, string> = {
      id: 'inventory_list.id',
      name: 'inventory_list.name',
      description: 'inventory_list.description',
      mid: 'inventory_list.mid', 
      product: 'inventory_list.product', 
      unit: 'inventory_list.unit', 
      position: 'inventory_list.position', 
      batch: 'inventory_list.batch', 
      package: 'inventory_list.package', 
      owner: 'inventory_list.owner', 
      theoretical: 'inventory_list.theoretical', 
      actualQuantity: 'inventory_list.actual_quantity', 

      createdAt: 'inventory_list.created_at',
      updatedAt: 'inventory_list.updated_at',
      isactived: 'inventory_list.isactived',
      islocked: 'inventory_list.islocked',
      createUid: 'inventory_list.create_uid',
      updatedUid: 'inventory_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("inventory_list.isactived='0'");
    /*
    multiSearch(
      qb,
      ['inventory_list.name', 'inventory_list.description'],
      search.search,
    );
     */
    qb.orderBy('inventory_list.created_at', 'DESC');
    //qb.addOrderBy('inventory_list.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
