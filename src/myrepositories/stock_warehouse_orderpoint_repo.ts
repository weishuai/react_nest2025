import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StockWarehouseOrderpointSearchVo, StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
import { StockWarehouseOrderpoint } from '../myentities/stock_warehouse_orderpoint';

export class StockWarehouseOrderpointRepo {
  async create(stockWarehouseOrderpointVo: StockWarehouseOrderpointVo) {
    return await getRepository(StockWarehouseOrderpoint).insert(stockWarehouseOrderpointVo);
  }
  async update(Id: string, user_id: string, stockWarehouseOrderpointVo: StockWarehouseOrderpointVo) {
    stockWarehouseOrderpointVo.updatedAt = new Date();
    stockWarehouseOrderpointVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StockWarehouseOrderpoint).update(Id, stockWarehouseOrderpointVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StockWarehouseOrderpoint).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStockWarehouseOrderpointsById(id: string) {
    const qb = await getRepository(StockWarehouseOrderpoint).createQueryBuilder(
      'stock_warehouse_orderpoint',
    );
    const fields: Record<string, string> = {
      id: 'stock_warehouse_orderpoint.id',
      name: 'stock_warehouse_orderpoint.name',
      product: 'stock_warehouse_orderpoint.product', 
      position: 'stock_warehouse_orderpoint.position', 
      inHand: 'stock_warehouse_orderpoint.inHand', 
      prediction: 'stock_warehouse_orderpoint.prediction', 
      route: 'stock_warehouse_orderpoint.route', 
      min: 'stock_warehouse_orderpoint.min', 
      max: 'stock_warehouse_orderpoint.max', 
      order: 'stock_warehouse_orderpoint.order', 
      unit: 'stock_warehouse_orderpoint.unit', 

      description: 'stock_warehouse_orderpoint.description',
      createdAt: 'stock_warehouse_orderpoint.created_at',
      updatedAt: 'stock_warehouse_orderpoint.updated_at',
      isactived: 'stock_warehouse_orderpoint.isactived',
      islocked: 'stock_warehouse_orderpoint.islocked',
      createUid: 'stock_warehouse_orderpoint.create_uid',
      updatedUid: 'stock_warehouse_orderpoint.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'stock_warehouse_orderpoint', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStockWarehouseOrderpointAll() {
    const qb = getRepository(StockWarehouseOrderpoint).createQueryBuilder('stock_warehouse_orderpoint');
    const fields: Record<string, string> = {
      id: 'stock_warehouse_orderpoint.id',
      name: 'stock_warehouse_orderpoint.name',
      description: 'stock_warehouse_orderpoint.description',
      product: 'stock_warehouse_orderpoint.product', 
      position: 'stock_warehouse_orderpoint.position', 
      inHand: 'stock_warehouse_orderpoint.inHand', 
      prediction: 'stock_warehouse_orderpoint.prediction', 
      route: 'stock_warehouse_orderpoint.route', 
      min: 'stock_warehouse_orderpoint.min', 
      max: 'stock_warehouse_orderpoint.max', 
      order: 'stock_warehouse_orderpoint.order', 
      unit: 'stock_warehouse_orderpoint.unit', 

      createdAt: 'stock_warehouse_orderpoint.created_at',
      updatedAt: 'stock_warehouse_orderpoint.updated_at',
      isactived: 'stock_warehouse_orderpoint.isactived',
      islocked: 'stock_warehouse_orderpoint.islocked',
      createUid: 'stock_warehouse_orderpoint.create_uid',
      updatedUid: 'stock_warehouse_orderpoint.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_warehouse_orderpoint.isactived='0'");
    qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStockWarehouseOrderpointAllView() {
    const qb = await getRepository(StockWarehouseOrderpoint).createQueryBuilder(
      'stock_warehouse_orderpoint',
    );
    const fields: Record<string, string> = {
      id: 'stock_warehouse_orderpoint.id',
      name: 'stock_warehouse_orderpoint.name',
      description: 'stock_warehouse_orderpoint.description',
      product: 'stock_warehouse_orderpoint.product', 
      position: 'stock_warehouse_orderpoint.position', 
      inHand: 'stock_warehouse_orderpoint.inHand', 
      prediction: 'stock_warehouse_orderpoint.prediction', 
      route: 'stock_warehouse_orderpoint.route', 
      min: 'stock_warehouse_orderpoint.min', 
      max: 'stock_warehouse_orderpoint.max', 
      order: 'stock_warehouse_orderpoint.order', 
      unit: 'stock_warehouse_orderpoint.unit', 

      createdAt: 'stock_warehouse_orderpoint.created_at',
      updatedAt: 'stock_warehouse_orderpoint.updated_at',
      isactived: 'stock_warehouse_orderpoint.isactived',
      islocked: 'stock_warehouse_orderpoint.islocked',
      createUid: 'stock_warehouse_orderpoint.create_uid',
      updatedUid: 'stock_warehouse_orderpoint.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStockWarehouseOrderpointList(search: StockWarehouseOrderpointSearchVo) {
    const qb = await getRepository(StockWarehouseOrderpoint).createQueryBuilder(
      'stock_warehouse_orderpoint',
    );
    const fields: Record<string, string> = {
      id: 'stock_warehouse_orderpoint.id',
      name: 'stock_warehouse_orderpoint.name',
      description: 'stock_warehouse_orderpoint.description',
      product: 'stock_warehouse_orderpoint.product', 
      position: 'stock_warehouse_orderpoint.position', 
      inHand: 'stock_warehouse_orderpoint.inHand', 
      prediction: 'stock_warehouse_orderpoint.prediction', 
      route: 'stock_warehouse_orderpoint.route', 
      min: 'stock_warehouse_orderpoint.min', 
      max: 'stock_warehouse_orderpoint.max', 
      order: 'stock_warehouse_orderpoint.order', 
      unit: 'stock_warehouse_orderpoint.unit', 

      createdAt: 'stock_warehouse_orderpoint.created_at',
      updatedAt: 'stock_warehouse_orderpoint.updated_at',
      isactived: 'stock_warehouse_orderpoint.isactived',
      islocked: 'stock_warehouse_orderpoint.islocked',
      createUid: 'stock_warehouse_orderpoint.create_uid',
      updatedUid: 'stock_warehouse_orderpoint.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_warehouse_orderpoint.isactived='0'");
    /*
    multiSearch(
      qb,
      ['stock_warehouse_orderpoint.name', 'stock_warehouse_orderpoint.description'],
      search.search,
    );
     */
    qb.orderBy('stock_warehouse_orderpoint.created_at', 'DESC');
    //qb.addOrderBy('stock_warehouse_orderpoint.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
