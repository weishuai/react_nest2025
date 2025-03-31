import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FhtestFht1SearchVo, FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
import { FhtestFht1 } from '../myentities/fhtest_fht1';

export class FhtestFht1Repo {
  async create(fhtestFht1Vo: FhtestFht1Vo) {
    return await getRepository(FhtestFht1).insert(fhtestFht1Vo);
  }
  async update(Id: string, user_id: string, fhtestFht1Vo: FhtestFht1Vo) {
    fhtestFht1Vo.updatedAt = new Date();
    fhtestFht1Vo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(FhtestFht1).update(Id, fhtestFht1Vo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(FhtestFht1).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFhtestFht1sById(id: string) {
    const qb = await getRepository(FhtestFht1).createQueryBuilder(
      'fhtest_fht1',
    );
    const fields: Record<string, string> = {
      id: 'fhtest_fht1.id',
      name: 'fhtest_fht1.name',
      fhname: 'fhtest_fht1.fhname', 
      fhF1: 'fhtest_fht1.fhF1', 
      fhF2: 'fhtest_fht1.fhF2', 
      fhF3: 'fhtest_fht1.fhF3', 
      fhF4: 'fhtest_fht1.fhF4', 
      fhF5: 'fhtest_fht1.fhF5', 
      fhF6: 'fhtest_fht1.fhF6', 
      fhF7: 'fhtest_fht1.fhF7', 
      fhF8: 'fhtest_fht1.fhF8', 
      fhF9: 'fhtest_fht1.fhF9', 
      fhF10: 'fhtest_fht1.fhF10', 
      fhF11: 'fhtest_fht1.fhF11', 
      fhF12: 'fhtest_fht1.fhF12', 
      fhF13: 'fhtest_fht1.fhF13', 
      fhF14: 'fhtest_fht1.fhF14', 
      fhF15: 'fhtest_fht1.fhF15', 
      fhF16: 'fhtest_fht1.fhF16', 
      fhF17: 'fhtest_fht1.fhF17', 

      description: 'fhtest_fht1.description',
      createdAt: 'fhtest_fht1.created_at',
      updatedAt: 'fhtest_fht1.updated_at',
      isactived: 'fhtest_fht1.isactived',
      islocked: 'fhtest_fht1.islocked',
      createUid: 'fhtest_fht1.create_uid',
      updatedUid: 'fhtest_fht1.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhtest_fht1', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFhtestFht1All() {
    const qb = getRepository(FhtestFht1).createQueryBuilder('fhtest_fht1');
    const fields: Record<string, string> = {
      id: 'fhtest_fht1.id',
      name: 'fhtest_fht1.name',
      description: 'fhtest_fht1.description',
      fhname: 'fhtest_fht1.fhname', 
      fhF1: 'fhtest_fht1.fhF1', 
      fhF2: 'fhtest_fht1.fhF2', 
      fhF3: 'fhtest_fht1.fhF3', 
      fhF4: 'fhtest_fht1.fhF4', 
      fhF5: 'fhtest_fht1.fhF5', 
      fhF6: 'fhtest_fht1.fhF6', 
      fhF7: 'fhtest_fht1.fhF7', 
      fhF8: 'fhtest_fht1.fhF8', 
      fhF9: 'fhtest_fht1.fhF9', 
      fhF10: 'fhtest_fht1.fhF10', 
      fhF11: 'fhtest_fht1.fhF11', 
      fhF12: 'fhtest_fht1.fhF12', 
      fhF13: 'fhtest_fht1.fhF13', 
      fhF14: 'fhtest_fht1.fhF14', 
      fhF15: 'fhtest_fht1.fhF15', 
      fhF16: 'fhtest_fht1.fhF16', 
      fhF17: 'fhtest_fht1.fhF17', 

      createdAt: 'fhtest_fht1.created_at',
      updatedAt: 'fhtest_fht1.updated_at',
      isactived: 'fhtest_fht1.isactived',
      islocked: 'fhtest_fht1.islocked',
      createUid: 'fhtest_fht1.create_uid',
      updatedUid: 'fhtest_fht1.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhtest_fht1.isactived='0'");
    qb.orderBy('fhtest_fht1.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getFhtestFht1AllView() {
    const qb = await getRepository(FhtestFht1).createQueryBuilder(
      'fhtest_fht1',
    );
    const fields: Record<string, string> = {
      id: 'fhtest_fht1.id',
      name: 'fhtest_fht1.name',
      description: 'fhtest_fht1.description',
      fhname: 'fhtest_fht1.fhname', 
      fhF1: 'fhtest_fht1.fhF1', 
      fhF2: 'fhtest_fht1.fhF2', 
      fhF3: 'fhtest_fht1.fhF3', 
      fhF4: 'fhtest_fht1.fhF4', 
      fhF5: 'fhtest_fht1.fhF5', 
      fhF6: 'fhtest_fht1.fhF6', 
      fhF7: 'fhtest_fht1.fhF7', 
      fhF8: 'fhtest_fht1.fhF8', 
      fhF9: 'fhtest_fht1.fhF9', 
      fhF10: 'fhtest_fht1.fhF10', 
      fhF11: 'fhtest_fht1.fhF11', 
      fhF12: 'fhtest_fht1.fhF12', 
      fhF13: 'fhtest_fht1.fhF13', 
      fhF14: 'fhtest_fht1.fhF14', 
      fhF15: 'fhtest_fht1.fhF15', 
      fhF16: 'fhtest_fht1.fhF16', 
      fhF17: 'fhtest_fht1.fhF17', 

      createdAt: 'fhtest_fht1.created_at',
      updatedAt: 'fhtest_fht1.updated_at',
      isactived: 'fhtest_fht1.isactived',
      islocked: 'fhtest_fht1.islocked',
      createUid: 'fhtest_fht1.create_uid',
      updatedUid: 'fhtest_fht1.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhtest_fht1.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFhtestFht1List(search: FhtestFht1SearchVo) {
    const qb = await getRepository(FhtestFht1).createQueryBuilder(
      'fhtest_fht1',
    );
    const fields: Record<string, string> = {
      id: 'fhtest_fht1.id',
      name: 'fhtest_fht1.name',
      description: 'fhtest_fht1.description',
      fhname: 'fhtest_fht1.fhname', 
      fhF1: 'fhtest_fht1.fhF1', 
      fhF2: 'fhtest_fht1.fhF2', 
      fhF3: 'fhtest_fht1.fhF3', 
      fhF4: 'fhtest_fht1.fhF4', 
      fhF5: 'fhtest_fht1.fhF5', 
      fhF6: 'fhtest_fht1.fhF6', 
      fhF7: 'fhtest_fht1.fhF7', 
      fhF8: 'fhtest_fht1.fhF8', 
      fhF9: 'fhtest_fht1.fhF9', 
      fhF10: 'fhtest_fht1.fhF10', 
      fhF11: 'fhtest_fht1.fhF11', 
      fhF12: 'fhtest_fht1.fhF12', 
      fhF13: 'fhtest_fht1.fhF13', 
      fhF14: 'fhtest_fht1.fhF14', 
      fhF15: 'fhtest_fht1.fhF15', 
      fhF16: 'fhtest_fht1.fhF16', 
      fhF17: 'fhtest_fht1.fhF17', 

      createdAt: 'fhtest_fht1.created_at',
      updatedAt: 'fhtest_fht1.updated_at',
      isactived: 'fhtest_fht1.isactived',
      islocked: 'fhtest_fht1.islocked',
      createUid: 'fhtest_fht1.create_uid',
      updatedUid: 'fhtest_fht1.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhtest_fht1.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhtest_fht1.name', 'fhtest_fht1.description'],
      search.search,
    );
     */
    qb.orderBy('fhtest_fht1.created_at', 'DESC');
    //qb.addOrderBy('fhtest_fht1.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getFhtestFht1Search(search: FhtestFht1SearchVo) {
  //   const qb =await getRepository(FhtestFht1).createQueryBuilder('fhtest_fht1');
  //   qb.leftJoin(User, 'user', 'fhtest_fht1.create_uid = user.id');
  //   qb.select( `fhtest_fht1.id,
  //     fhtest_fht1.name,
  //     fhtest_fht1.description,
  //     fhtest_fht1.created_at,
  //     fhtest_fht1.updated_at,
  //     fhtest_fht1.isactived,
  //     fhtest_fht1.islocked,
  //     fhtest_fht1.create_uid,
  //     fhtest_fht1.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'fhtest_fht1', 'name', ownerType);
  //     // qb.where("fhtest_fht1.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'fhtest_fht1.id',
  //       name: 'fhtest_fht1.name',
  //       description: 'fhtest_fht1.description',
  //             fhname: 'fhtest_fht1.fhname', 
  //     fhF1: 'fhtest_fht1.fhF1', 
  //     fhF2: 'fhtest_fht1.fhF2', 
  //     fhF3: 'fhtest_fht1.fhF3', 
  //     fhF4: 'fhtest_fht1.fhF4', 
  //     fhF5: 'fhtest_fht1.fhF5', 
  //     fhF6: 'fhtest_fht1.fhF6', 
  //     fhF7: 'fhtest_fht1.fhF7', 
  //     fhF8: 'fhtest_fht1.fhF8', 
  //     fhF9: 'fhtest_fht1.fhF9', 
  //     fhF10: 'fhtest_fht1.fhF10', 
  //     fhF11: 'fhtest_fht1.fhF11', 
  //     fhF12: 'fhtest_fht1.fhF12', 
  //     fhF13: 'fhtest_fht1.fhF13', 
  //     fhF14: 'fhtest_fht1.fhF14', 
  //     fhF15: 'fhtest_fht1.fhF15', 
  //     fhF16: 'fhtest_fht1.fhF16', 
  //     fhF17: 'fhtest_fht1.fhF17', 

  //       createdAt: 'fhtest_fht1.created_at',
  //       updatedAt: 'fhtest_fht1.updated_at',
  //       isactived: 'fhtest_fht1.isactived',
  //       islocked: 'fhtest_fht1.islocked',
  //       createUid: 'fhtest_fht1.create_uid',
  //       updatedUid: 'fhtest_fht1.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['fhtest_fht1.name', 'fhtest_fht1.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('fhtest_fht1.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
