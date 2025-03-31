import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhmeasuringSearchVo, FhmeasuringVo } from '../myvo/fhmeasuring_vo';
import { Fhmeasuring } from '../myentities/fhmeasuring';

export class FhmeasuringRepo {
  async create(fhmeasuringVo: FhmeasuringVo) {
    return await getRepository(Fhmeasuring).insert(fhmeasuringVo);
  }
  async update(Id: string, user_id: string, fhmeasuringVo: FhmeasuringVo) {
    fhmeasuringVo.updatedAt = new Date();
    fhmeasuringVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Fhmeasuring).update(Id, fhmeasuringVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Fhmeasuring).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhmeasuringsById(id: string) {
    const qb = await getRepository(Fhmeasuring).createQueryBuilder(
      'fhmeasuring',
    );
    const fields: Record<string, string> = {
      id: 'fhmeasuring.id',
      name: 'fhmeasuring.name',
      fhname: 'fhmeasuring.fhname', 
      fhF1: 'fhmeasuring.fhF1', 
      fhF2: 'fhmeasuring.fhF2', 
      fhF3: 'fhmeasuring.fhF3', 
      fhF4: 'fhmeasuring.fhF4', 
      fhF5: 'fhmeasuring.fhF5', 
      fhF6: 'fhmeasuring.fhF6', 
      fhF7: 'fhmeasuring.fhF7', 
      fhF8: 'fhmeasuring.fhF8', 
      fhF9: 'fhmeasuring.fhF9', 

      description: 'fhmeasuring.description',
      createdAt: 'fhmeasuring.created_at',
      updatedAt: 'fhmeasuring.updated_at',
      isactived: 'fhmeasuring.isactived',
      islocked: 'fhmeasuring.islocked',
      createUid: 'fhmeasuring.create_uid',
      updatedUid: 'fhmeasuring.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhmeasuring', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhmeasuringAll() {
    const qb = getRepository(Fhmeasuring).createQueryBuilder('fhmeasuring');
    const fields: Record<string, string> = {
      id: 'fhmeasuring.id',
      name: 'fhmeasuring.name',
      description: 'fhmeasuring.description',
      fhname: 'fhmeasuring.fhname', 
      fhF1: 'fhmeasuring.fhF1', 
      fhF2: 'fhmeasuring.fhF2', 
      fhF3: 'fhmeasuring.fhF3', 
      fhF4: 'fhmeasuring.fhF4', 
      fhF5: 'fhmeasuring.fhF5', 
      fhF6: 'fhmeasuring.fhF6', 
      fhF7: 'fhmeasuring.fhF7', 
      fhF8: 'fhmeasuring.fhF8', 
      fhF9: 'fhmeasuring.fhF9', 

      createdAt: 'fhmeasuring.created_at',
      updatedAt: 'fhmeasuring.updated_at',
      isactived: 'fhmeasuring.isactived',
      islocked: 'fhmeasuring.islocked',
      createUid: 'fhmeasuring.create_uid',
      updatedUid: 'fhmeasuring.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhmeasuring.isactived='0'");
    qb.orderBy('fhmeasuring.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhmeasuringAllView() {
    const qb = await getRepository(Fhmeasuring).createQueryBuilder(
      'fhmeasuring',
    );
    const fields: Record<string, string> = {
      id: 'fhmeasuring.id',
      name: 'fhmeasuring.name',
      description: 'fhmeasuring.description',
      fhname: 'fhmeasuring.fhname', 
      fhF1: 'fhmeasuring.fhF1', 
      fhF2: 'fhmeasuring.fhF2', 
      fhF3: 'fhmeasuring.fhF3', 
      fhF4: 'fhmeasuring.fhF4', 
      fhF5: 'fhmeasuring.fhF5', 
      fhF6: 'fhmeasuring.fhF6', 
      fhF7: 'fhmeasuring.fhF7', 
      fhF8: 'fhmeasuring.fhF8', 
      fhF9: 'fhmeasuring.fhF9', 

      createdAt: 'fhmeasuring.created_at',
      updatedAt: 'fhmeasuring.updated_at',
      isactived: 'fhmeasuring.isactived',
      islocked: 'fhmeasuring.islocked',
      createUid: 'fhmeasuring.create_uid',
      updatedUid: 'fhmeasuring.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhmeasuring.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhmeasuringList(search: FhmeasuringSearchVo) {
    const qb = await getRepository(Fhmeasuring).createQueryBuilder(
      'fhmeasuring',
    );
    const fields: Record<string, string> = {
      id: 'fhmeasuring.id',
      name: 'fhmeasuring.name',
      description: 'fhmeasuring.description',
      fhname: 'fhmeasuring.fhname', 
      fhF1: 'fhmeasuring.fhF1', 
      fhF2: 'fhmeasuring.fhF2', 
      fhF3: 'fhmeasuring.fhF3', 
      fhF4: 'fhmeasuring.fhF4', 
      fhF5: 'fhmeasuring.fhF5', 
      fhF6: 'fhmeasuring.fhF6', 
      fhF7: 'fhmeasuring.fhF7', 
      fhF8: 'fhmeasuring.fhF8', 
      fhF9: 'fhmeasuring.fhF9', 

      createdAt: 'fhmeasuring.created_at',
      updatedAt: 'fhmeasuring.updated_at',
      isactived: 'fhmeasuring.isactived',
      islocked: 'fhmeasuring.islocked',
      createUid: 'fhmeasuring.create_uid',
      updatedUid: 'fhmeasuring.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhmeasuring.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhmeasuring.name', 'fhmeasuring.description'],
      search.search,
    );
     */
    qb.orderBy('fhmeasuring.created_at', 'DESC');
    //qb.addOrderBy('fhmeasuring.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhmeasuringSearch(search: FhmeasuringSearchVo) {
  //   const qb =await getRepository(Fhmeasuring).createQueryBuilder('fhmeasuring');
  //   qb.leftJoin(User, 'user', 'fhmeasuring.create_uid = user.id');
  //   qb.select( `fhmeasuring.id,
  //     fhmeasuring.name,
  //     fhmeasuring.description,
  //     fhmeasuring.created_at,
  //     fhmeasuring.updated_at,
  //     fhmeasuring.isactived,
  //     fhmeasuring.islocked,
  //     fhmeasuring.create_uid,
  //     fhmeasuring.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhmeasuring', 'name', ownerType);
  //     // qb.where("fhmeasuring.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhmeasuring.id',
  //       name: 'fhmeasuring.name',
  //       description: 'fhmeasuring.description',
  //             fhname: 'fhmeasuring.fhname', 
  //     fhF1: 'fhmeasuring.fhF1', 
  //     fhF2: 'fhmeasuring.fhF2', 
  //     fhF3: 'fhmeasuring.fhF3', 
  //     fhF4: 'fhmeasuring.fhF4', 
  //     fhF5: 'fhmeasuring.fhF5', 
  //     fhF6: 'fhmeasuring.fhF6', 
  //     fhF7: 'fhmeasuring.fhF7', 
  //     fhF8: 'fhmeasuring.fhF8', 
  //     fhF9: 'fhmeasuring.fhF9', 

  //       createdAt: 'fhmeasuring.created_at',
  //       updatedAt: 'fhmeasuring.updated_at',
  //       isactived: 'fhmeasuring.isactived',
  //       islocked: 'fhmeasuring.islocked',
  //       createUid: 'fhmeasuring.create_uid',
  //       updatedUid: 'fhmeasuring.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhmeasuring.name', 'fhmeasuring.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhmeasuring.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
