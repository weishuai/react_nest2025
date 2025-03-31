import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { TbmatchinglineSearchVo, TbmatchinglineVo } from '../myvo/tbmatchingline_vo';
import { Tbmatchingline } from '../myentities/tbmatchingline';

export class TbmatchinglineRepo {
  async create(tbmatchinglineVo: TbmatchinglineVo) {
    return await getRepository(Tbmatchingline).insert(tbmatchinglineVo);
  }
  async update(Id: string, user_id: string, tbmatchinglineVo: TbmatchinglineVo) {
    tbmatchinglineVo.updatedAt = new Date();
    tbmatchinglineVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Tbmatchingline).update(Id, tbmatchinglineVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Tbmatchingline).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTbmatchinglinesById(id: string) {
    const qb = await getRepository(Tbmatchingline).createQueryBuilder(
      'tbmatchingline',
    );
    const fields: Record<string, string> = {
      id: 'tbmatchingline.id',
      name: 'tbmatchingline.name',
      mid: 'tbmatchingline.mid', 
      rawMaterial: 'tbmatchingline.rawMaterial', 
      batchNumber: 'tbmatchingline.batchNumber', 
      number: 'tbmatchingline.number', 
      notes: 'tbmatchingline.notes', 

      description: 'tbmatchingline.description',
      createdAt: 'tbmatchingline.created_at',
      updatedAt: 'tbmatchingline.updated_at',
      isactived: 'tbmatchingline.isactived',
      islocked: 'tbmatchingline.islocked',
      createUid: 'tbmatchingline.create_uid',
      updatedUid: 'tbmatchingline.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'tbmatchingline', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTbmatchinglineAll() {
    const qb = getRepository(Tbmatchingline).createQueryBuilder('tbmatchingline');
    const fields: Record<string, string> = {
      id: 'tbmatchingline.id',
      name: 'tbmatchingline.name',
      description: 'tbmatchingline.description',
      mid: 'tbmatchingline.mid', 
      rawMaterial: 'tbmatchingline.rawMaterial', 
      batchNumber: 'tbmatchingline.batchNumber', 
      number: 'tbmatchingline.number', 
      notes: 'tbmatchingline.notes', 

      createdAt: 'tbmatchingline.created_at',
      updatedAt: 'tbmatchingline.updated_at',
      isactived: 'tbmatchingline.isactived',
      islocked: 'tbmatchingline.islocked',
      createUid: 'tbmatchingline.create_uid',
      updatedUid: 'tbmatchingline.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbmatchingline.isactived='0'");
    qb.orderBy('tbmatchingline.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getTbmatchinglineAllView() {
    const qb = await getRepository(Tbmatchingline).createQueryBuilder(
      'tbmatchingline',
    );
    const fields: Record<string, string> = {
      id: 'tbmatchingline.id',
      name: 'tbmatchingline.name',
      description: 'tbmatchingline.description',
      mid: 'tbmatchingline.mid', 
      rawMaterial: 'tbmatchingline.rawMaterial', 
      batchNumber: 'tbmatchingline.batchNumber', 
      number: 'tbmatchingline.number', 
      notes: 'tbmatchingline.notes', 

      createdAt: 'tbmatchingline.created_at',
      updatedAt: 'tbmatchingline.updated_at',
      isactived: 'tbmatchingline.isactived',
      islocked: 'tbmatchingline.islocked',
      createUid: 'tbmatchingline.create_uid',
      updatedUid: 'tbmatchingline.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('tbmatchingline.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getTbmatchinglineList(search: TbmatchinglineSearchVo) {
    const qb = await getRepository(Tbmatchingline).createQueryBuilder(
      'tbmatchingline',
    );
    const fields: Record<string, string> = {
      id: 'tbmatchingline.id',
      name: 'tbmatchingline.name',
      description: 'tbmatchingline.description',
      mid: 'tbmatchingline.mid', 
      rawMaterial: 'tbmatchingline.rawMaterial', 
      batchNumber: 'tbmatchingline.batchNumber', 
      number: 'tbmatchingline.number', 
      notes: 'tbmatchingline.notes', 

      createdAt: 'tbmatchingline.created_at',
      updatedAt: 'tbmatchingline.updated_at',
      isactived: 'tbmatchingline.isactived',
      islocked: 'tbmatchingline.islocked',
      createUid: 'tbmatchingline.create_uid',
      updatedUid: 'tbmatchingline.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbmatchingline.isactived='0'");
    /*
    multiSearch(
      qb,
      ['tbmatchingline.name', 'tbmatchingline.description'],
      search.search,
    );
     */
    qb.orderBy('tbmatchingline.created_at', 'DESC');
    //qb.addOrderBy('tbmatchingline.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getTbmatchinglineSearch(search: TbmatchinglineSearchVo) {
  //   const qb =await getRepository(Tbmatchingline).createQueryBuilder('tbmatchingline');
  //   qb.leftJoin(User, 'user', 'tbmatchingline.create_uid = user.id');
  //   qb.select( `tbmatchingline.id,
  //     tbmatchingline.name,
  //     tbmatchingline.description,
  //     tbmatchingline.created_at,
  //     tbmatchingline.updated_at,
  //     tbmatchingline.isactived,
  //     tbmatchingline.islocked,
  //     tbmatchingline.create_uid,
  //     tbmatchingline.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'tbmatchingline', 'name', ownerType);
  //     // qb.where("tbmatchingline.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'tbmatchingline.id',
  //       name: 'tbmatchingline.name',
  //       description: 'tbmatchingline.description',
  //             mid: 'tbmatchingline.mid', 
  //     rawMaterial: 'tbmatchingline.rawMaterial', 
  //     batchNumber: 'tbmatchingline.batchNumber', 
  //     number: 'tbmatchingline.number', 
  //     notes: 'tbmatchingline.notes', 

  //       createdAt: 'tbmatchingline.created_at',
  //       updatedAt: 'tbmatchingline.updated_at',
  //       isactived: 'tbmatchingline.isactived',
  //       islocked: 'tbmatchingline.islocked',
  //       createUid: 'tbmatchingline.create_uid',
  //       updatedUid: 'tbmatchingline.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['tbmatchingline.name', 'tbmatchingline.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('tbmatchingline.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
