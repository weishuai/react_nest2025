import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StockValuationLayerSearchVo, StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
import { StockValuationLayer } from '../myentities/stock_valuation_layer';

export class StockValuationLayerRepo {
  async create(stockValuationLayerVo: StockValuationLayerVo) {
    return await getRepository(StockValuationLayer).insert(stockValuationLayerVo);
  }
  async update(Id: string, user_id: string, stockValuationLayerVo: StockValuationLayerVo) {
    stockValuationLayerVo.updatedAt = new Date();
    stockValuationLayerVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StockValuationLayer).update(Id, stockValuationLayerVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StockValuationLayer).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStockValuationLayersById(id: string) {
    const qb = await getRepository(StockValuationLayer).createQueryBuilder(
      'stock_valuation_layer',
    );
    const fields: Record<string, string> = {
      id: 'stock_valuation_layer.id',
      name: 'stock_valuation_layer.name',
      fhdate: 'stock_valuation_layer.fhdate', 
      product: 'stock_valuation_layer.product', 
      number: 'stock_valuation_layer.number', 
      unit: 'stock_valuation_layer.unit', 
      totalValue: 'stock_valuation_layer.totalValue', 
      company: 'stock_valuation_layer.company', 

      description: 'stock_valuation_layer.description',
      createdAt: 'stock_valuation_layer.created_at',
      updatedAt: 'stock_valuation_layer.updated_at',
      isactived: 'stock_valuation_layer.isactived',
      islocked: 'stock_valuation_layer.islocked',
      createUid: 'stock_valuation_layer.create_uid',
      updatedUid: 'stock_valuation_layer.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'stock_valuation_layer', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStockValuationLayerAll() {
    const qb = getRepository(StockValuationLayer).createQueryBuilder('stock_valuation_layer');
    const fields: Record<string, string> = {
      id: 'stock_valuation_layer.id',
      name: 'stock_valuation_layer.name',
      description: 'stock_valuation_layer.description',
      fhdate: 'stock_valuation_layer.fhdate', 
      product: 'stock_valuation_layer.product', 
      number: 'stock_valuation_layer.number', 
      unit: 'stock_valuation_layer.unit', 
      totalValue: 'stock_valuation_layer.totalValue', 
      company: 'stock_valuation_layer.company', 

      createdAt: 'stock_valuation_layer.created_at',
      updatedAt: 'stock_valuation_layer.updated_at',
      isactived: 'stock_valuation_layer.isactived',
      islocked: 'stock_valuation_layer.islocked',
      createUid: 'stock_valuation_layer.create_uid',
      updatedUid: 'stock_valuation_layer.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_valuation_layer.isactived='0'");
    qb.orderBy('stock_valuation_layer.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStockValuationLayerAllView() {
    const qb = await getRepository(StockValuationLayer).createQueryBuilder(
      'stock_valuation_layer',
    );
    const fields: Record<string, string> = {
      id: 'stock_valuation_layer.id',
      name: 'stock_valuation_layer.name',
      description: 'stock_valuation_layer.description',
      fhdate: 'stock_valuation_layer.fhdate', 
      product: 'stock_valuation_layer.product', 
      number: 'stock_valuation_layer.number', 
      unit: 'stock_valuation_layer.unit', 
      totalValue: 'stock_valuation_layer.totalValue', 
      company: 'stock_valuation_layer.company', 

      createdAt: 'stock_valuation_layer.created_at',
      updatedAt: 'stock_valuation_layer.updated_at',
      isactived: 'stock_valuation_layer.isactived',
      islocked: 'stock_valuation_layer.islocked',
      createUid: 'stock_valuation_layer.create_uid',
      updatedUid: 'stock_valuation_layer.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('stock_valuation_layer.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStockValuationLayerList(search: StockValuationLayerSearchVo) {
    const qb = await getRepository(StockValuationLayer).createQueryBuilder(
      'stock_valuation_layer',
    );
    const fields: Record<string, string> = {
      id: 'stock_valuation_layer.id',
      name: 'stock_valuation_layer.name',
      description: 'stock_valuation_layer.description',
      fhdate: 'stock_valuation_layer.fhdate', 
      product: 'stock_valuation_layer.product', 
      number: 'stock_valuation_layer.number', 
      unit: 'stock_valuation_layer.unit', 
      totalValue: 'stock_valuation_layer.totalValue', 
      company: 'stock_valuation_layer.company', 

      createdAt: 'stock_valuation_layer.created_at',
      updatedAt: 'stock_valuation_layer.updated_at',
      isactived: 'stock_valuation_layer.isactived',
      islocked: 'stock_valuation_layer.islocked',
      createUid: 'stock_valuation_layer.create_uid',
      updatedUid: 'stock_valuation_layer.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_valuation_layer.isactived='0'");
    /*
    multiSearch(
      qb,
      ['stock_valuation_layer.name', 'stock_valuation_layer.description'],
      search.search,
    );
     */
    qb.orderBy('stock_valuation_layer.created_at', 'DESC');
    //qb.addOrderBy('stock_valuation_layer.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
