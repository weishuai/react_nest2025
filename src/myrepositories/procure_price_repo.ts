import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ProcurePriceSearchVo, ProcurePriceVo } from '../myvo/procure_price_vo';
import { ProcurePrice } from '../myentities/procure_price';

export class ProcurePriceRepo {
  async create(procurePriceVo: ProcurePriceVo) {
    return await getRepository(ProcurePrice).insert(procurePriceVo);
  }
  async update(Id: string, user_id: string, procurePriceVo: ProcurePriceVo) {
    procurePriceVo.updatedAt = new Date();
    procurePriceVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(ProcurePrice).update(Id, procurePriceVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(ProcurePrice).update(Ids[0], {
      isactived: '1',
    });
  }
  async getProcurePricesById(id: string) {
    const qb = await getRepository(ProcurePrice).createQueryBuilder(
      'procure_price',
    );
    const fields: Record<string, string> = {
      id: 'procure_price.id',
      name: 'procure_price.name',
      supplier: 'procure_price.supplier', 
      product: 'procure_price.product', 
      productCode: 'procure_price.productCode', 
      deliveryLeadTime: 'procure_price.deliveryLeadTime', 
      product2: 'procure_price.product2', 
      productTemlp: 'procure_price.productTemlp', 
      number: 'procure_price.number', 
      unitPrice: 'procure_price.unitPrice', 
      ative: 'procure_price.ative', 
      company: 'procure_price.company', 

      description: 'procure_price.description',
      createdAt: 'procure_price.created_at',
      updatedAt: 'procure_price.updated_at',
      isactived: 'procure_price.isactived',
      islocked: 'procure_price.islocked',
      createUid: 'procure_price.create_uid',
      updatedUid: 'procure_price.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'procure_price', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getProcurePriceAll() {
    const qb = getRepository(ProcurePrice).createQueryBuilder('procure_price');
    const fields: Record<string, string> = {
      id: 'procure_price.id',
      name: 'procure_price.name',
      description: 'procure_price.description',
      supplier: 'procure_price.supplier', 
      product: 'procure_price.product', 
      productCode: 'procure_price.productCode', 
      deliveryLeadTime: 'procure_price.deliveryLeadTime', 
      product2: 'procure_price.product2', 
      productTemlp: 'procure_price.productTemlp', 
      number: 'procure_price.number', 
      unitPrice: 'procure_price.unitPrice', 
      ative: 'procure_price.ative', 
      company: 'procure_price.company', 

      createdAt: 'procure_price.created_at',
      updatedAt: 'procure_price.updated_at',
      isactived: 'procure_price.isactived',
      islocked: 'procure_price.islocked',
      createUid: 'procure_price.create_uid',
      updatedUid: 'procure_price.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_price.isactived='0'");
    qb.orderBy('procure_price.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getProcurePriceAllView() {
    const qb = await getRepository(ProcurePrice).createQueryBuilder(
      'procure_price',
    );
    const fields: Record<string, string> = {
      id: 'procure_price.id',
      name: 'procure_price.name',
      description: 'procure_price.description',
      supplier: 'procure_price.supplier', 
      product: 'procure_price.product', 
      productCode: 'procure_price.productCode', 
      deliveryLeadTime: 'procure_price.deliveryLeadTime', 
      product2: 'procure_price.product2', 
      productTemlp: 'procure_price.productTemlp', 
      number: 'procure_price.number', 
      unitPrice: 'procure_price.unitPrice', 
      ative: 'procure_price.ative', 
      company: 'procure_price.company', 

      createdAt: 'procure_price.created_at',
      updatedAt: 'procure_price.updated_at',
      isactived: 'procure_price.isactived',
      islocked: 'procure_price.islocked',
      createUid: 'procure_price.create_uid',
      updatedUid: 'procure_price.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('procure_price.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getProcurePriceList(search: ProcurePriceSearchVo) {
    const qb = await getRepository(ProcurePrice).createQueryBuilder(
      'procure_price',
    );
    const fields: Record<string, string> = {
      id: 'procure_price.id',
      name: 'procure_price.name',
      description: 'procure_price.description',
      supplier: 'procure_price.supplier', 
      product: 'procure_price.product', 
      productCode: 'procure_price.productCode', 
      deliveryLeadTime: 'procure_price.deliveryLeadTime', 
      product2: 'procure_price.product2', 
      productTemlp: 'procure_price.productTemlp', 
      number: 'procure_price.number', 
      unitPrice: 'procure_price.unitPrice', 
      ative: 'procure_price.ative', 
      company: 'procure_price.company', 

      createdAt: 'procure_price.created_at',
      updatedAt: 'procure_price.updated_at',
      isactived: 'procure_price.isactived',
      islocked: 'procure_price.islocked',
      createUid: 'procure_price.create_uid',
      updatedUid: 'procure_price.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("procure_price.isactived='0'");
    /*
    multiSearch(
      qb,
      ['procure_price.name', 'procure_price.description'],
      search.search,
    );
     */
    qb.orderBy('procure_price.created_at', 'DESC');
    //qb.addOrderBy('procure_price.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getProcurePriceSearch(search: ProcurePriceSearchVo) {
  //   const qb =await getRepository(ProcurePrice).createQueryBuilder('procure_price');
  //   qb.leftJoin(User, 'user', 'procure_price.create_uid = user.id');
  //   qb.select( `procure_price.id,
  //     procure_price.name,
  //     procure_price.description,
  //     procure_price.created_at,
  //     procure_price.updated_at,
  //     procure_price.isactived,
  //     procure_price.islocked,
  //     procure_price.create_uid,
  //     procure_price.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'procure_price', 'name', ownerType);
  //     // qb.where("procure_price.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'procure_price.id',
  //       name: 'procure_price.name',
  //       description: 'procure_price.description',
  //             supplier: 'procure_price.supplier', 
  //     product: 'procure_price.product', 
  //     productCode: 'procure_price.productCode', 
  //     deliveryLeadTime: 'procure_price.deliveryLeadTime', 
  //     product2: 'procure_price.product2', 
  //     productTemlp: 'procure_price.productTemlp', 
  //     number: 'procure_price.number', 
  //     unitPrice: 'procure_price.unitPrice', 
  //     ative: 'procure_price.ative', 
  //     company: 'procure_price.company', 

  //       createdAt: 'procure_price.created_at',
  //       updatedAt: 'procure_price.updated_at',
  //       isactived: 'procure_price.isactived',
  //       islocked: 'procure_price.islocked',
  //       createUid: 'procure_price.create_uid',
  //       updatedUid: 'procure_price.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['procure_price.name', 'procure_price.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('procure_price.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
