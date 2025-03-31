import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { QualitylnspectionItemSearchVo, QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
import { QualitylnspectionItem } from '../myentities/quality_inspection_item';

export class QualitylnspectionItemRepo {
  async create(qualitylnspectionItemVo: QualitylnspectionItemVo) {
    return await getRepository(QualitylnspectionItem).insert(qualitylnspectionItemVo);
  }
  async update(Id: string, user_id: string, qualitylnspectionItemVo: QualitylnspectionItemVo) {
    qualitylnspectionItemVo.updatedAt = new Date();
    qualitylnspectionItemVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(QualitylnspectionItem).update(Id, qualitylnspectionItemVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(QualitylnspectionItem).update(Ids[0], {
      isactived: '1',
    });
  }
  async getQualitylnspectionItemsById(id: string) {
    const qb = await getRepository(QualitylnspectionItem).createQueryBuilder(
      'quality_inspection_item',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection_item.id',
      name: 'quality_inspection_item.name',
      mid: 'quality_inspection_item.mid', 
      fhitem: 'quality_inspection_item.fhitem', 
      fhtxt: 'quality_inspection_item.fhtxt', 
      fhnotes: 'quality_inspection_item.fhnotes', 

      description: 'quality_inspection_item.description',
      createdAt: 'quality_inspection_item.created_at',
      updatedAt: 'quality_inspection_item.updated_at',
      isactived: 'quality_inspection_item.isactived',
      islocked: 'quality_inspection_item.islocked',
      createUid: 'quality_inspection_item.create_uid',
      updatedUid: 'quality_inspection_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'quality_inspection_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getQualitylnspectionItemAll() {
    const qb = getRepository(QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
    const fields: Record<string, string> = {
      id: 'quality_inspection_item.id',
      name: 'quality_inspection_item.name',
      description: 'quality_inspection_item.description',
      mid: 'quality_inspection_item.mid', 
      fhitem: 'quality_inspection_item.fhitem', 
      fhtxt: 'quality_inspection_item.fhtxt', 
      fhnotes: 'quality_inspection_item.fhnotes', 

      createdAt: 'quality_inspection_item.created_at',
      updatedAt: 'quality_inspection_item.updated_at',
      isactived: 'quality_inspection_item.isactived',
      islocked: 'quality_inspection_item.islocked',
      createUid: 'quality_inspection_item.create_uid',
      updatedUid: 'quality_inspection_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quality_inspection_item.isactived='0'");
    qb.orderBy('quality_inspection_item.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getQualitylnspectionItemAllView() {
    const qb = await getRepository(QualitylnspectionItem).createQueryBuilder(
      'quality_inspection_item',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection_item.id',
      name: 'quality_inspection_item.name',
      description: 'quality_inspection_item.description',
      mid: 'quality_inspection_item.mid', 
      fhitem: 'quality_inspection_item.fhitem', 
      fhtxt: 'quality_inspection_item.fhtxt', 
      fhnotes: 'quality_inspection_item.fhnotes', 

      createdAt: 'quality_inspection_item.created_at',
      updatedAt: 'quality_inspection_item.updated_at',
      isactived: 'quality_inspection_item.isactived',
      islocked: 'quality_inspection_item.islocked',
      createUid: 'quality_inspection_item.create_uid',
      updatedUid: 'quality_inspection_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('quality_inspection_item.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getQualitylnspectionItemList(search: QualitylnspectionItemSearchVo) {
    const qb = await getRepository(QualitylnspectionItem).createQueryBuilder(
      'quality_inspection_item',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection_item.id',
      name: 'quality_inspection_item.name',
      description: 'quality_inspection_item.description',
      mid: 'quality_inspection_item.mid', 
      fhitem: 'quality_inspection_item.fhitem', 
      fhtxt: 'quality_inspection_item.fhtxt', 
      fhnotes: 'quality_inspection_item.fhnotes', 

      createdAt: 'quality_inspection_item.created_at',
      updatedAt: 'quality_inspection_item.updated_at',
      isactived: 'quality_inspection_item.isactived',
      islocked: 'quality_inspection_item.islocked',
      createUid: 'quality_inspection_item.create_uid',
      updatedUid: 'quality_inspection_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quality_inspection_item.isactived='0'");
    /*
    multiSearch(
      qb,
      ['quality_inspection_item.name', 'quality_inspection_item.description'],
      search.search,
    );
     */
    qb.orderBy('quality_inspection_item.created_at', 'DESC');
    //qb.addOrderBy('quality_inspection_item.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getQualitylnspectionItemSearch(search: QualitylnspectionItemSearchVo) {
  //   const qb =await getRepository(QualitylnspectionItem).createQueryBuilder('quality_inspection_item');
  //   qb.leftJoin(User, 'user', 'quality_inspection_item.create_uid = user.id');
  //   qb.select( `quality_inspection_item.id,
  //     quality_inspection_item.name,
  //     quality_inspection_item.description,
  //     quality_inspection_item.created_at,
  //     quality_inspection_item.updated_at,
  //     quality_inspection_item.isactived,
  //     quality_inspection_item.islocked,
  //     quality_inspection_item.create_uid,
  //     quality_inspection_item.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'quality_inspection_item', 'name', ownerType);
  //     // qb.where("quality_inspection_item.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'quality_inspection_item.id',
  //       name: 'quality_inspection_item.name',
  //       description: 'quality_inspection_item.description',
  //             mid: 'quality_inspection_item.mid', 
  //     fhitem: 'quality_inspection_item.fhitem', 
  //     fhtxt: 'quality_inspection_item.fhtxt', 
  //     fhnotes: 'quality_inspection_item.fhnotes', 

  //       createdAt: 'quality_inspection_item.created_at',
  //       updatedAt: 'quality_inspection_item.updated_at',
  //       isactived: 'quality_inspection_item.isactived',
  //       islocked: 'quality_inspection_item.islocked',
  //       createUid: 'quality_inspection_item.create_uid',
  //       updatedUid: 'quality_inspection_item.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['quality_inspection_item.name', 'quality_inspection_item.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('quality_inspection_item.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
