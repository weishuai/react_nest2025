import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { StockQuantSearchVo, StockQuantVo } from '../myvo/stock_quant_vo';
import { StockQuant } from '../myentities/stock_quant';

export class StockQuantRepo {
  async create(stockQuantVo: StockQuantVo) {
    return await getRepository(StockQuant).insert(stockQuantVo);
  }
  async update(Id: string, user_id: string, stockQuantVo: StockQuantVo) {
    stockQuantVo.updatedAt = new Date();
    stockQuantVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(StockQuant).update(Id, stockQuantVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(StockQuant).update(Ids[0], {
      isactived: '1',
    });
  }
  async getStockQuantsById(id: string) {
    const qb = await getRepository(StockQuant).createQueryBuilder(
      'stock_quant',
    );
    const fields: Record<string, string> = {
      id: 'stock_quant.id',
      name: 'stock_quant.name',
      product: 'stock_quant.product', 
      position: 'stock_quant.position', 
      batch: 'stock_quant.batch', 
      package: 'stock_quant.package', 
      inHand: 'stock_quant.inHand', 
      available: 'stock_quant.available', 
      unit: 'stock_quant.unit', 
      price: 'stock_quant.price', 
      company: 'stock_quant.company', 

      description: 'stock_quant.description',
      createdAt: 'stock_quant.created_at',
      updatedAt: 'stock_quant.updated_at',
      isactived: 'stock_quant.isactived',
      islocked: 'stock_quant.islocked',
      createUid: 'stock_quant.create_uid',
      updatedUid: 'stock_quant.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'stock_quant', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getStockQuantAll() {
    const qb = getRepository(StockQuant).createQueryBuilder('stock_quant');
    const fields: Record<string, string> = {
      id: 'stock_quant.id',
      name: 'stock_quant.name',
      description: 'stock_quant.description',
      product: 'stock_quant.product', 
      position: 'stock_quant.position', 
      batch: 'stock_quant.batch', 
      package: 'stock_quant.package', 
      inHand: 'stock_quant.inHand', 
      available: 'stock_quant.available', 
      unit: 'stock_quant.unit', 
      price: 'stock_quant.price', 
      company: 'stock_quant.company', 

      createdAt: 'stock_quant.created_at',
      updatedAt: 'stock_quant.updated_at',
      isactived: 'stock_quant.isactived',
      islocked: 'stock_quant.islocked',
      createUid: 'stock_quant.create_uid',
      updatedUid: 'stock_quant.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_quant.isactived='0'");
    qb.orderBy('stock_quant.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getStockQuantAllView() {
    const qb = await getRepository(StockQuant).createQueryBuilder(
      'stock_quant',
    );
    const fields: Record<string, string> = {
      id: 'stock_quant.id',
      name: 'stock_quant.name',
      description: 'stock_quant.description',
      product: 'stock_quant.product', 
      position: 'stock_quant.position', 
      batch: 'stock_quant.batch', 
      package: 'stock_quant.package', 
      inHand: 'stock_quant.inHand', 
      available: 'stock_quant.available', 
      unit: 'stock_quant.unit', 
      price: 'stock_quant.price', 
      company: 'stock_quant.company', 

      createdAt: 'stock_quant.created_at',
      updatedAt: 'stock_quant.updated_at',
      isactived: 'stock_quant.isactived',
      islocked: 'stock_quant.islocked',
      createUid: 'stock_quant.create_uid',
      updatedUid: 'stock_quant.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('stock_quant.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getStockQuantList(search: StockQuantSearchVo) {
    const qb = await getRepository(StockQuant).createQueryBuilder(
      'stock_quant',
    );
    const fields: Record<string, string> = {
      id: 'stock_quant.id',
      name: 'stock_quant.name',
      description: 'stock_quant.description',
      product: 'stock_quant.product', 
      position: 'stock_quant.position', 
      batch: 'stock_quant.batch', 
      package: 'stock_quant.package', 
      inHand: 'stock_quant.inHand', 
      available: 'stock_quant.available', 
      unit: 'stock_quant.unit', 
      price: 'stock_quant.price', 
      company: 'stock_quant.company', 

      createdAt: 'stock_quant.created_at',
      updatedAt: 'stock_quant.updated_at',
      isactived: 'stock_quant.isactived',
      islocked: 'stock_quant.islocked',
      createUid: 'stock_quant.create_uid',
      updatedUid: 'stock_quant.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("stock_quant.isactived='0'");
    /*
    multiSearch(
      qb,
      ['stock_quant.name', 'stock_quant.description'],
      search.search,
    );
     */
    qb.orderBy('stock_quant.created_at', 'DESC');
    //qb.addOrderBy('stock_quant.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
