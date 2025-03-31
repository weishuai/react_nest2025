import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhreformSearchVo, FhreformVo } from '../myvo/fhreform_vo';
import { Fhreform } from '../myentities/fhreform';

export class FhreformRepo {
  async create(fhreformVo: FhreformVo) {
    return await getRepository(Fhreform).insert(fhreformVo);
  }
  async update(Id: string, user_id: string, fhreformVo: FhreformVo) {
    fhreformVo.updatedAt = new Date();
    fhreformVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhreform).update(Id, fhreformVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhreform).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhreformsById(id: string) {
    const qb = await getRepository(Fhreform).createQueryBuilder(
      'fhreform',
    );
    const fields: Record<string, string> = {
      id: 'fhreform.id',
      name: 'fhreform.name',
      fhname: 'fhreform.fhname', 
      fhF1: 'fhreform.fhF1', 
      fhF2: 'fhreform.fhF2', 
      fhF3: 'fhreform.fhF3', 
      fhF4: 'fhreform.fhF4', 
      fhF5: 'fhreform.fhF5', 

      description: 'fhreform.description',
      createdAt: 'fhreform.created_at',
      updatedAt: 'fhreform.updated_at',
      isactived: 'fhreform.isactived',
      islocked: 'fhreform.islocked',
      createUid: 'fhreform.create_uid',
      updatedUid: 'fhreform.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhreform', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhreformAll() {
    const qb = getRepository(Fhreform).createQueryBuilder('fhreform');
    const fields: Record<string, string> = {
      id: 'fhreform.id',
      name: 'fhreform.name',
      description: 'fhreform.description',
      fhname: 'fhreform.fhname', 
      fhF1: 'fhreform.fhF1', 
      fhF2: 'fhreform.fhF2', 
      fhF3: 'fhreform.fhF3', 
      fhF4: 'fhreform.fhF4', 
      fhF5: 'fhreform.fhF5', 

      createdAt: 'fhreform.created_at',
      updatedAt: 'fhreform.updated_at',
      isactived: 'fhreform.isactived',
      islocked: 'fhreform.islocked',
      createUid: 'fhreform.create_uid',
      updatedUid: 'fhreform.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhreform.isactived='0'");
    qb.orderBy('fhreform.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhreformAllView() {
    const qb = await getRepository(Fhreform).createQueryBuilder(
      'fhreform',
    );
    const fields: Record<string, string> = {
      id: 'fhreform.id',
      name: 'fhreform.name',
      description: 'fhreform.description',
      fhname: 'fhreform.fhname', 
      fhF1: 'fhreform.fhF1', 
      fhF2: 'fhreform.fhF2', 
      fhF3: 'fhreform.fhF3', 
      fhF4: 'fhreform.fhF4', 
      fhF5: 'fhreform.fhF5', 

      createdAt: 'fhreform.created_at',
      updatedAt: 'fhreform.updated_at',
      isactived: 'fhreform.isactived',
      islocked: 'fhreform.islocked',
      createUid: 'fhreform.create_uid',
      updatedUid: 'fhreform.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhreform.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhreformList(search: FhreformSearchVo) {
    const qb = await getRepository(Fhreform).createQueryBuilder(
      'fhreform',
    );
    const fields: Record<string, string> = {
      id: 'fhreform.id',
      name: 'fhreform.name',
      description: 'fhreform.description',
      fhname: 'fhreform.fhname', 
      fhF1: 'fhreform.fhF1', 
      fhF2: 'fhreform.fhF2', 
      fhF3: 'fhreform.fhF3', 
      fhF4: 'fhreform.fhF4', 
      fhF5: 'fhreform.fhF5', 

      createdAt: 'fhreform.created_at',
      updatedAt: 'fhreform.updated_at',
      isactived: 'fhreform.isactived',
      islocked: 'fhreform.islocked',
      createUid: 'fhreform.create_uid',
      updatedUid: 'fhreform.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhreform.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhreform.name', 'fhreform.description'],
      search.search,
    );
     */
    qb.orderBy('fhreform.created_at', 'DESC');
    //qb.addOrderBy('fhreform.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhreformSearch(search: FhreformSearchVo) {
  //   const qb =await getRepository(Fhreform).createQueryBuilder('fhreform');
  //   qb.leftJoin(User, 'user', 'fhreform.create_uid = user.id');
  //   qb.select( `fhreform.id,
  //     fhreform.name,
  //     fhreform.description,
  //     fhreform.created_at,
  //     fhreform.updated_at,
  //     fhreform.isactived,
  //     fhreform.islocked,
  //     fhreform.create_uid,
  //     fhreform.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhreform', 'name', ownerType);
  //     // qb.where("fhreform.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhreform.id',
  //       name: 'fhreform.name',
  //       description: 'fhreform.description',
  //             fhname: 'fhreform.fhname', 
  //     fhF1: 'fhreform.fhF1', 
  //     fhF2: 'fhreform.fhF2', 
  //     fhF3: 'fhreform.fhF3', 
  //     fhF4: 'fhreform.fhF4', 
  //     fhF5: 'fhreform.fhF5', 

  //       createdAt: 'fhreform.created_at',
  //       updatedAt: 'fhreform.updated_at',
  //       isactived: 'fhreform.isactived',
  //       islocked: 'fhreform.islocked',
  //       createUid: 'fhreform.create_uid',
  //       updatedUid: 'fhreform.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhreform.name', 'fhreform.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhreform.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
