import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
import { FHcrmTable1 } from '../myentities/fhcrm_table1';

export class FHcrmTable1Repo {
  async create(fhcrmTable1Vo: FHcrmTable1Vo) {
    return await getRepository(FHcrmTable1).insert(fhcrmTable1Vo);
  }
  async update(Id: string, user_id: string, fhcrmTable1Vo: FHcrmTable1Vo) {
    fhcrmTable1Vo.updatedAt = new Date();
    fhcrmTable1Vo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(FHcrmTable1).update(Id, fhcrmTable1Vo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(FHcrmTable1).update(Ids[0], {
      isactived: '1',
    });
  }
  async getFHcrmTable1sById(id: string) {
    const qb = await getRepository(FHcrmTable1).createQueryBuilder(
      'fhcrm_table1',
    );
    const fields: Record<string, string> = {
      id: 'fhcrm_table1.id',
      name: 'fhcrm_table1.name',
      fhF1: 'fhcrm_table1.fh_f1', 
      fhF2: 'fhcrm_table1.fh_f2', 
      fhF3: 'fhcrm_table1.fh_f3', 
      fhF4: 'fhcrm_table1.fh_f4', 
      fhF5: 'fhcrm_table1.fh_f5', 
      fhF6: 'fhcrm_table1.fh_f6', 
      fhF7: 'fhcrm_table1.fh_f7', 
      fhF8: 'fhcrm_table1.fh_f8', 
      fhF9: 'fhcrm_table1.fh_f9', 
      fhF10: 'fhcrm_table1.fh_f10', 
      description: 'fhcrm_table1.description',
      createdAt: 'fhcrm_table1.created_at',
      updatedAt: 'fhcrm_table1.updated_at',
      isactived: 'fhcrm_table1.isactived',
      islocked: 'fhcrm_table1.islocked',
      createUid: 'fhcrm_table1.create_uid',
      updatedUid: 'fhcrm_table1.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'fhcrm_table1', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getFHcrmTable1All(search: FHcrmTable1SearchVo) {
    const qb = getRepository(FHcrmTable1).createQueryBuilder('fhcrm_table1');
    const fields: Record<string, string> = {
      id: 'fhcrm_table1.id',
      name: 'fhcrm_table1.name',
      description: 'fhcrm_table1.description',
      fhF1: 'fhcrm_table1.fh_f1', 
      fhF2: 'fhcrm_table1.fh_f2', 
      fhF3: 'fhcrm_table1.fh_f3', 
      fhF4: 'fhcrm_table1.fh_f4', 
      fhF5: 'fhcrm_table1.fh_f5', 
      fhF6: 'fhcrm_table1.fh_f6', 
      fhF7: 'fhcrm_table1.fh_f7', 
      fhF8: 'fhcrm_table1.fh_f8', 
      fhF9: 'fhcrm_table1.fh_f9', 
      fhF10: 'fhcrm_table1.fh_f10', 

      createdAt: 'fhcrm_table1.created_at',
      updatedAt: 'fhcrm_table1.updated_at',
      isactived: 'fhcrm_table1.isactived',
      islocked: 'fhcrm_table1.islocked',
      createUid: 'fhcrm_table1.create_uid',
      updatedUid: 'fhcrm_table1.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhcrm_table1.isactived='0'");
    multiSearch(
      qb,
      ['fhcrm_table1.name', 'fhcrm_table1.description'],
      search.search,
    );

    qb.orderBy('fhcrm_table1.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getFHcrmTable1AllView() {
    const qb = await getRepository(FHcrmTable1).createQueryBuilder(
      'fhcrm_table1',
    );
    const fields: Record<string, string> = {
      id: 'fhcrm_table1.id',
      name: 'fhcrm_table1.name',
      description: 'fhcrm_table1.description',
      fhF1: 'fhcrm_table1.fh_f1', 
      fhF2: 'fhcrm_table1.fh_f2', 
      fhF3: 'fhcrm_table1.fh_f3', 
      fhF4: 'fhcrm_table1.fh_f4', 
      fhF5: 'fhcrm_table1.fh_f5', 
      fhF6: 'fhcrm_table1.fh_f6', 
      fhF7: 'fhcrm_table1.fh_f7', 
      fhF8: 'fhcrm_table1.fh_f8', 
      fhF9: 'fhcrm_table1.fh_f9', 
      fhF10: 'fhcrm_table1.fh_f10', 
      createdAt: 'fhcrm_table1.created_at',
      updatedAt: 'fhcrm_table1.updated_at',
      isactived: 'fhcrm_table1.isactived',
      islocked: 'fhcrm_table1.islocked',
      createUid: 'fhcrm_table1.create_uid',
      updatedUid: 'fhcrm_table1.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('fhcrm_table1.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getFHcrmTable1List(search: FHcrmTable1SearchVo) {
    const qb = await getRepository(FHcrmTable1).createQueryBuilder(
      'fhcrm_table1',
    );
    const fields: Record<string, string> = {
      id: 'fhcrm_table1.id',
      name: 'fhcrm_table1.name',
      description: 'fhcrm_table1.description',
      fhF1: 'fhcrm_table1.fh_f1', 
      fhF2: 'fhcrm_table1.fh_f2', 
      fhF3: 'fhcrm_table1.fh_f3', 
      fhF4: 'fhcrm_table1.fh_f4', 
      fhF5: 'fhcrm_table1.fh_f5', 
      fhF6: 'fhcrm_table1.fh_f6', 
      fhF7: 'fhcrm_table1.fh_f7', 
      fhF8: 'fhcrm_table1.fh_f8', 
      fhF9: 'fhcrm_table1.fh_f9', 
      fhF10: 'fhcrm_table1.fh_f10', 
      createdAt: 'fhcrm_table1.created_at',
      updatedAt: 'fhcrm_table1.updated_at',
      isactived: 'fhcrm_table1.isactived',
      islocked: 'fhcrm_table1.islocked',
      createUid: 'fhcrm_table1.create_uid',
      updatedUid: 'fhcrm_table1.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("fhcrm_table1.isactived='0'");
    /*
    multiSearch(
      qb,
      ['fhcrm_table1.name', 'fhcrm_table1.description'],
      search.search,
    );
     */
    qb.orderBy('fhcrm_table1.created_at', 'DESC');
    //qb.addOrderBy('fhcrm_table1.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
