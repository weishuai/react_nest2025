import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { TbpackagSearchVo, TbpackagVo } from '../myvo/tbpackag_vo';
import { Tbpackag } from '../myentities/tbpackag';

export class TbpackagRepo {
  async create(tbpackagVo: TbpackagVo) {
    return await getRepository(Tbpackag).insert(tbpackagVo);
  }
  async update(Id: string, user_id: string, tbpackagVo: TbpackagVo) {
    tbpackagVo.updatedAt = new Date();
    tbpackagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Tbpackag).update(Id, tbpackagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Tbpackag).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTbpackagsById(id: string) {
    const qb = await getRepository(Tbpackag).createQueryBuilder(
      'tbpackag',
    );
    const fields: Record<string, string> = {
      id: 'tbpackag.id',
      name: 'tbpackag.name',
      mid: 'tbpackag.mid', 
      project: 'tbpackag.project', 
      product: 'tbpackag.product', 
      productCode: 'tbpackag.productCode', 
      code: 'tbpackag.code', 
      deliveryQuantity: 'tbpackag.deliveryQuantity', 
      deliveryDate: 'tbpackag.deliveryDate', 
      factoryOrderNumber: 'tbpackag.factoryOrderNumber', 
      trackingNumber: 'tbpackag.trackingNumber', 
      expressCompany: 'tbpackag.expressCompany', 
      recipient: 'tbpackag.recipient', 
      shipper: 'tbpackag.shipper', 
      photo: 'tbpackag.photo', 

      description: 'tbpackag.description',
      createdAt: 'tbpackag.created_at',
      updatedAt: 'tbpackag.updated_at',
      isactived: 'tbpackag.isactived',
      islocked: 'tbpackag.islocked',
      createUid: 'tbpackag.create_uid',
      updatedUid: 'tbpackag.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'tbpackag', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTbpackagAll() {
    const qb = getRepository(Tbpackag).createQueryBuilder('tbpackag');
    const fields: Record<string, string> = {
      id: 'tbpackag.id',
      name: 'tbpackag.name',
      description: 'tbpackag.description',
      mid: 'tbpackag.mid', 
      project: 'tbpackag.project', 
      product: 'tbpackag.product', 
      productCode: 'tbpackag.productCode', 
      code: 'tbpackag.code', 
      deliveryQuantity: 'tbpackag.deliveryQuantity', 
      deliveryDate: 'tbpackag.deliveryDate', 
      factoryOrderNumber: 'tbpackag.factoryOrderNumber', 
      trackingNumber: 'tbpackag.trackingNumber', 
      expressCompany: 'tbpackag.expressCompany', 
      recipient: 'tbpackag.recipient', 
      shipper: 'tbpackag.shipper', 
      photo: 'tbpackag.photo', 

      createdAt: 'tbpackag.created_at',
      updatedAt: 'tbpackag.updated_at',
      isactived: 'tbpackag.isactived',
      islocked: 'tbpackag.islocked',
      createUid: 'tbpackag.create_uid',
      updatedUid: 'tbpackag.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbpackag.isactived='0'");
    qb.orderBy('tbpackag.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getTbpackagAllView() {
    const qb = await getRepository(Tbpackag).createQueryBuilder(
      'tbpackag',
    );
    const fields: Record<string, string> = {
      id: 'tbpackag.id',
      name: 'tbpackag.name',
      description: 'tbpackag.description',
      mid: 'tbpackag.mid', 
      project: 'tbpackag.project', 
      product: 'tbpackag.product', 
      productCode: 'tbpackag.productCode', 
      code: 'tbpackag.code', 
      deliveryQuantity: 'tbpackag.deliveryQuantity', 
      deliveryDate: 'tbpackag.deliveryDate', 
      factoryOrderNumber: 'tbpackag.factoryOrderNumber', 
      trackingNumber: 'tbpackag.trackingNumber', 
      expressCompany: 'tbpackag.expressCompany', 
      recipient: 'tbpackag.recipient', 
      shipper: 'tbpackag.shipper', 
      photo: 'tbpackag.photo', 

      createdAt: 'tbpackag.created_at',
      updatedAt: 'tbpackag.updated_at',
      isactived: 'tbpackag.isactived',
      islocked: 'tbpackag.islocked',
      createUid: 'tbpackag.create_uid',
      updatedUid: 'tbpackag.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('tbpackag.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getTbpackagList(search: TbpackagSearchVo) {
    const qb = await getRepository(Tbpackag).createQueryBuilder(
      'tbpackag',
    );
    const fields: Record<string, string> = {
      id: 'tbpackag.id',
      name: 'tbpackag.name',
      description: 'tbpackag.description',
      mid: 'tbpackag.mid', 
      project: 'tbpackag.project', 
      product: 'tbpackag.product', 
      productCode: 'tbpackag.productCode', 
      code: 'tbpackag.code', 
      deliveryQuantity: 'tbpackag.deliveryQuantity', 
      deliveryDate: 'tbpackag.deliveryDate', 
      factoryOrderNumber: 'tbpackag.factoryOrderNumber', 
      trackingNumber: 'tbpackag.trackingNumber', 
      expressCompany: 'tbpackag.expressCompany', 
      recipient: 'tbpackag.recipient', 
      shipper: 'tbpackag.shipper', 
      photo: 'tbpackag.photo', 

      createdAt: 'tbpackag.created_at',
      updatedAt: 'tbpackag.updated_at',
      isactived: 'tbpackag.isactived',
      islocked: 'tbpackag.islocked',
      createUid: 'tbpackag.create_uid',
      updatedUid: 'tbpackag.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbpackag.isactived='0'");
    /*
    multiSearch(
      qb,
      ['tbpackag.name', 'tbpackag.description'],
      search.search,
    );
     */
    qb.orderBy('tbpackag.created_at', 'DESC');
    //qb.addOrderBy('tbpackag.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getTbpackagSearch(search: TbpackagSearchVo) {
  //   const qb =await getRepository(Tbpackag).createQueryBuilder('tbpackag');
  //   qb.leftJoin(User, 'user', 'tbpackag.create_uid = user.id');
  //   qb.select( `tbpackag.id,
  //     tbpackag.name,
  //     tbpackag.description,
  //     tbpackag.created_at,
  //     tbpackag.updated_at,
  //     tbpackag.isactived,
  //     tbpackag.islocked,
  //     tbpackag.create_uid,
  //     tbpackag.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'tbpackag', 'name', ownerType);
  //     // qb.where("tbpackag.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'tbpackag.id',
  //       name: 'tbpackag.name',
  //       description: 'tbpackag.description',
  //             mid: 'tbpackag.mid', 
  //     project: 'tbpackag.project', 
  //     product: 'tbpackag.product', 
  //     productCode: 'tbpackag.productCode', 
  //     code: 'tbpackag.code', 
  //     deliveryQuantity: 'tbpackag.deliveryQuantity', 
  //     deliveryDate: 'tbpackag.deliveryDate', 
  //     factoryOrderNumber: 'tbpackag.factoryOrderNumber', 
  //     trackingNumber: 'tbpackag.trackingNumber', 
  //     expressCompany: 'tbpackag.expressCompany', 
  //     recipient: 'tbpackag.recipient', 
  //     shipper: 'tbpackag.shipper', 
  //     photo: 'tbpackag.photo', 

  //       createdAt: 'tbpackag.created_at',
  //       updatedAt: 'tbpackag.updated_at',
  //       isactived: 'tbpackag.isactived',
  //       islocked: 'tbpackag.islocked',
  //       createUid: 'tbpackag.create_uid',
  //       updatedUid: 'tbpackag.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['tbpackag.name', 'tbpackag.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('tbpackag.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
