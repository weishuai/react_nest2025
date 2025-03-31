import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { ReturnorderSearchVo, ReturnorderVo } from '../myvo/returnorder_vo';
import { Returnorder } from '../myentities/returnorder';

export class ReturnorderRepo {
  async create(returnorderVo: ReturnorderVo) {
    return await getRepository(Returnorder).insert(returnorderVo);
  }
  async update(Id: string, user_id: string, returnorderVo: ReturnorderVo) {
    returnorderVo.updatedAt = new Date();
    returnorderVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Returnorder).update(Id, returnorderVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Returnorder).update(Ids[0], {
      isactived: '1',
    });
  }
  async getReturnordersById(id: string) {
    const qb = await getRepository(Returnorder).createQueryBuilder(
      'returnorder',
    );
    const fields: Record<string, string> = {
      id: 'returnorder.id',
      name: 'returnorder.name',
      project: 'returnorder.project', 
      custom: 'returnorder.custom', 
      Invoice: 'returnorder.Invoice', 
      contractNumber: 'returnorder.contractNumber', 
      contractQuantity: 'returnorder.contractQuantity', 
      product: 'returnorder.product', 
      shipper: 'returnorder.shipper', 
      deliveryQuantity: 'returnorder.deliveryQuantity', 
      outageQuantity: 'returnorder.outageQuantity', 
      deliveryType: 'returnorder.deliveryType', 
      trackingNumber: 'returnorder.trackingNumber', 
      recipient: 'returnorder.recipient', 

      description: 'returnorder.description',
      createdAt: 'returnorder.created_at',
      updatedAt: 'returnorder.updated_at',
      isactived: 'returnorder.isactived',
      islocked: 'returnorder.islocked',
      createUid: 'returnorder.create_uid',
      updatedUid: 'returnorder.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'returnorder', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getReturnorderAll() {
    const qb = getRepository(Returnorder).createQueryBuilder('returnorder');
    const fields: Record<string, string> = {
      id: 'returnorder.id',
      name: 'returnorder.name',
      description: 'returnorder.description',
      project: 'returnorder.project', 
      custom: 'returnorder.custom', 
      Invoice: 'returnorder.Invoice', 
      contractNumber: 'returnorder.contractNumber', 
      contractQuantity: 'returnorder.contractQuantity', 
      product: 'returnorder.product', 
      shipper: 'returnorder.shipper', 
      deliveryQuantity: 'returnorder.deliveryQuantity', 
      outageQuantity: 'returnorder.outageQuantity', 
      deliveryType: 'returnorder.deliveryType', 
      trackingNumber: 'returnorder.trackingNumber', 
      recipient: 'returnorder.recipient', 

      createdAt: 'returnorder.created_at',
      updatedAt: 'returnorder.updated_at',
      isactived: 'returnorder.isactived',
      islocked: 'returnorder.islocked',
      createUid: 'returnorder.create_uid',
      updatedUid: 'returnorder.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("returnorder.isactived='0'");
    qb.orderBy('returnorder.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getReturnorderAllView() {
    const qb = await getRepository(Returnorder).createQueryBuilder(
      'returnorder',
    );
    const fields: Record<string, string> = {
      id: 'returnorder.id',
      name: 'returnorder.name',
      description: 'returnorder.description',
      project: 'returnorder.project', 
      custom: 'returnorder.custom', 
      Invoice: 'returnorder.Invoice', 
      contractNumber: 'returnorder.contractNumber', 
      contractQuantity: 'returnorder.contractQuantity', 
      product: 'returnorder.product', 
      shipper: 'returnorder.shipper', 
      deliveryQuantity: 'returnorder.deliveryQuantity', 
      outageQuantity: 'returnorder.outageQuantity', 
      deliveryType: 'returnorder.deliveryType', 
      trackingNumber: 'returnorder.trackingNumber', 
      recipient: 'returnorder.recipient', 

      createdAt: 'returnorder.created_at',
      updatedAt: 'returnorder.updated_at',
      isactived: 'returnorder.isactived',
      islocked: 'returnorder.islocked',
      createUid: 'returnorder.create_uid',
      updatedUid: 'returnorder.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('returnorder.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getReturnorderList(search: ReturnorderSearchVo) {
    const qb = await getRepository(Returnorder).createQueryBuilder(
      'returnorder',
    );
    const fields: Record<string, string> = {
      id: 'returnorder.id',
      name: 'returnorder.name',
      description: 'returnorder.description',
      project: 'returnorder.project', 
      custom: 'returnorder.custom', 
      Invoice: 'returnorder.Invoice', 
      contractNumber: 'returnorder.contractNumber', 
      contractQuantity: 'returnorder.contractQuantity', 
      product: 'returnorder.product', 
      shipper: 'returnorder.shipper', 
      deliveryQuantity: 'returnorder.deliveryQuantity', 
      outageQuantity: 'returnorder.outageQuantity', 
      deliveryType: 'returnorder.deliveryType', 
      trackingNumber: 'returnorder.trackingNumber', 
      recipient: 'returnorder.recipient', 

      createdAt: 'returnorder.created_at',
      updatedAt: 'returnorder.updated_at',
      isactived: 'returnorder.isactived',
      islocked: 'returnorder.islocked',
      createUid: 'returnorder.create_uid',
      updatedUid: 'returnorder.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("returnorder.isactived='0'");
    /*
    multiSearch(
      qb,
      ['returnorder.name', 'returnorder.description'],
      search.search,
    );
     */
    qb.orderBy('returnorder.created_at', 'DESC');
    //qb.addOrderBy('returnorder.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getReturnorderSearch(search: ReturnorderSearchVo) {
  //   const qb =await getRepository(Returnorder).createQueryBuilder('returnorder');
  //   qb.leftJoin(User, 'user', 'returnorder.create_uid = user.id');
  //   qb.select( `returnorder.id,
  //     returnorder.name,
  //     returnorder.description,
  //     returnorder.created_at,
  //     returnorder.updated_at,
  //     returnorder.isactived,
  //     returnorder.islocked,
  //     returnorder.create_uid,
  //     returnorder.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'returnorder', 'name', ownerType);
  //     // qb.where("returnorder.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'returnorder.id',
  //       name: 'returnorder.name',
  //       description: 'returnorder.description',
  //             project: 'returnorder.project', 
  //     custom: 'returnorder.custom', 
  //     Invoice: 'returnorder.Invoice', 
  //     contractNumber: 'returnorder.contractNumber', 
  //     contractQuantity: 'returnorder.contractQuantity', 
  //     product: 'returnorder.product', 
  //     shipper: 'returnorder.shipper', 
  //     deliveryQuantity: 'returnorder.deliveryQuantity', 
  //     outageQuantity: 'returnorder.outageQuantity', 
  //     deliveryType: 'returnorder.deliveryType', 
  //     trackingNumber: 'returnorder.trackingNumber', 
  //     recipient: 'returnorder.recipient', 

  //       createdAt: 'returnorder.created_at',
  //       updatedAt: 'returnorder.updated_at',
  //       isactived: 'returnorder.isactived',
  //       islocked: 'returnorder.islocked',
  //       createUid: 'returnorder.create_uid',
  //       updatedUid: 'returnorder.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['returnorder.name', 'returnorder.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('returnorder.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
