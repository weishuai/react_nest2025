import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { QualityInspectionSearchVo, QualityInspectionVo } from '../myvo/quality_inspection_vo';
import { QualityInspection } from '../myentities/quality_inspection';

export class QualityInspectionRepo {
  async create(qualityInspectionVo: QualityInspectionVo) {
    return await getRepository(QualityInspection).insert(qualityInspectionVo);
  }
  async update(Id: string, user_id: string, qualityInspectionVo: QualityInspectionVo) {
    qualityInspectionVo.updatedAt = new Date();
    qualityInspectionVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(QualityInspection).update(Id, qualityInspectionVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(QualityInspection).update(Ids[0], {
      isactived: '1',
    });
  }
  async getQualityInspectionsById(id: string) {
    const qb = await getRepository(QualityInspection).createQueryBuilder(
      'quality_inspection',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection.id',
      name: 'quality_inspection.name',
      fhname: 'quality_inspection.fhname', 
      title: 'quality_inspection.title', 
      team: 'quality_inspection.team', 
      productTmlp: 'quality_inspection.productTmlp', 
      head: 'quality_inspection.head', 
      product: 'quality_inspection.product', 
      label: 'quality_inspection.label', 
      batch: 'quality_inspection.batch', 
      rootCause: 'quality_inspection.rootCause', 
      pick: 'quality_inspection.pick', 
      priority: 'quality_inspection.priority', 
      fhtxt: 'quality_inspection.fhtxt', 
      inspectionItems: 'quality_inspection.inspectionItems', 
      checkAddress: 'quality_inspection.checkAddress', 
      correctiveAction: 'quality_inspection.correctiveAction', 
      preventiveActions: 'quality_inspection.preventiveActions', 
      sundry: 'quality_inspection.sundry', 

      description: 'quality_inspection.description',
      createdAt: 'quality_inspection.created_at',
      updatedAt: 'quality_inspection.updated_at',
      isactived: 'quality_inspection.isactived',
      islocked: 'quality_inspection.islocked',
      createUid: 'quality_inspection.create_uid',
      updatedUid: 'quality_inspection.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'quality_inspection', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getQualityInspectionAll() {
    const qb = getRepository(QualityInspection).createQueryBuilder('quality_inspection');
    const fields: Record<string, string> = {
      id: 'quality_inspection.id',
      name: 'quality_inspection.name',
      description: 'quality_inspection.description',
      fhname: 'quality_inspection.fhname', 
      title: 'quality_inspection.title', 
      team: 'quality_inspection.team', 
      productTmlp: 'quality_inspection.productTmlp', 
      head: 'quality_inspection.head', 
      product: 'quality_inspection.product', 
      label: 'quality_inspection.label', 
      batch: 'quality_inspection.batch', 
      rootCause: 'quality_inspection.rootCause', 
      pick: 'quality_inspection.pick', 
      priority: 'quality_inspection.priority', 
      fhtxt: 'quality_inspection.fhtxt', 
      inspectionItems: 'quality_inspection.inspectionItems', 
      checkAddress: 'quality_inspection.checkAddress', 
      correctiveAction: 'quality_inspection.correctiveAction', 
      preventiveActions: 'quality_inspection.preventiveActions', 
      sundry: 'quality_inspection.sundry', 

      createdAt: 'quality_inspection.created_at',
      updatedAt: 'quality_inspection.updated_at',
      isactived: 'quality_inspection.isactived',
      islocked: 'quality_inspection.islocked',
      createUid: 'quality_inspection.create_uid',
      updatedUid: 'quality_inspection.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quality_inspection.isactived='0'");
    qb.orderBy('quality_inspection.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getQualityInspectionAllView() {
    const qb = await getRepository(QualityInspection).createQueryBuilder(
      'quality_inspection',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection.id',
      name: 'quality_inspection.name',
      description: 'quality_inspection.description',
      fhname: 'quality_inspection.fhname', 
      title: 'quality_inspection.title', 
      team: 'quality_inspection.team', 
      productTmlp: 'quality_inspection.productTmlp', 
      head: 'quality_inspection.head', 
      product: 'quality_inspection.product', 
      label: 'quality_inspection.label', 
      batch: 'quality_inspection.batch', 
      rootCause: 'quality_inspection.rootCause', 
      pick: 'quality_inspection.pick', 
      priority: 'quality_inspection.priority', 
      fhtxt: 'quality_inspection.fhtxt', 
      inspectionItems: 'quality_inspection.inspectionItems', 
      checkAddress: 'quality_inspection.checkAddress', 
      correctiveAction: 'quality_inspection.correctiveAction', 
      preventiveActions: 'quality_inspection.preventiveActions', 
      sundry: 'quality_inspection.sundry', 

      createdAt: 'quality_inspection.created_at',
      updatedAt: 'quality_inspection.updated_at',
      isactived: 'quality_inspection.isactived',
      islocked: 'quality_inspection.islocked',
      createUid: 'quality_inspection.create_uid',
      updatedUid: 'quality_inspection.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('quality_inspection.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getQualityInspectionList(search: QualityInspectionSearchVo) {
    const qb = await getRepository(QualityInspection).createQueryBuilder(
      'quality_inspection',
    );
    const fields: Record<string, string> = {
      id: 'quality_inspection.id',
      name: 'quality_inspection.name',
      description: 'quality_inspection.description',
      fhname: 'quality_inspection.fhname', 
      title: 'quality_inspection.title', 
      team: 'quality_inspection.team', 
      productTmlp: 'quality_inspection.productTmlp', 
      head: 'quality_inspection.head', 
      product: 'quality_inspection.product', 
      label: 'quality_inspection.label', 
      batch: 'quality_inspection.batch', 
      rootCause: 'quality_inspection.rootCause', 
      pick: 'quality_inspection.pick', 
      priority: 'quality_inspection.priority', 
      fhtxt: 'quality_inspection.fhtxt', 
      inspectionItems: 'quality_inspection.inspectionItems', 
      checkAddress: 'quality_inspection.checkAddress', 
      correctiveAction: 'quality_inspection.correctiveAction', 
      preventiveActions: 'quality_inspection.preventiveActions', 
      sundry: 'quality_inspection.sundry', 

      createdAt: 'quality_inspection.created_at',
      updatedAt: 'quality_inspection.updated_at',
      isactived: 'quality_inspection.isactived',
      islocked: 'quality_inspection.islocked',
      createUid: 'quality_inspection.create_uid',
      updatedUid: 'quality_inspection.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quality_inspection.isactived='0'");
    /*
    multiSearch(
      qb,
      ['quality_inspection.name', 'quality_inspection.description'],
      search.search,
    );
     */
    qb.orderBy('quality_inspection.created_at', 'DESC');
    //qb.addOrderBy('quality_inspection.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getQualityInspectionSearch(search: QualityInspectionSearchVo) {
  //   const qb =await getRepository(QualityInspection).createQueryBuilder('quality_inspection');
  //   qb.leftJoin(User, 'user', 'quality_inspection.create_uid = user.id');
  //   qb.select( `quality_inspection.id,
  //     quality_inspection.name,
  //     quality_inspection.description,
  //     quality_inspection.created_at,
  //     quality_inspection.updated_at,
  //     quality_inspection.isactived,
  //     quality_inspection.islocked,
  //     quality_inspection.create_uid,
  //     quality_inspection.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'quality_inspection', 'name', ownerType);
  //     // qb.where("quality_inspection.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'quality_inspection.id',
  //       name: 'quality_inspection.name',
  //       description: 'quality_inspection.description',
  //             fhname: 'quality_inspection.fhname', 
  //     title: 'quality_inspection.title', 
  //     team: 'quality_inspection.team', 
  //     productTmlp: 'quality_inspection.productTmlp', 
  //     head: 'quality_inspection.head', 
  //     product: 'quality_inspection.product', 
  //     label: 'quality_inspection.label', 
  //     batch: 'quality_inspection.batch', 
  //     rootCause: 'quality_inspection.rootCause', 
  //     pick: 'quality_inspection.pick', 
  //     priority: 'quality_inspection.priority', 
  //     fhtxt: 'quality_inspection.fhtxt', 
  //     inspectionItems: 'quality_inspection.inspectionItems', 
  //     checkAddress: 'quality_inspection.checkAddress', 
  //     correctiveAction: 'quality_inspection.correctiveAction', 
  //     preventiveActions: 'quality_inspection.preventiveActions', 
  //     sundry: 'quality_inspection.sundry', 

  //       createdAt: 'quality_inspection.created_at',
  //       updatedAt: 'quality_inspection.updated_at',
  //       isactived: 'quality_inspection.isactived',
  //       islocked: 'quality_inspection.islocked',
  //       createUid: 'quality_inspection.create_uid',
  //       updatedUid: 'quality_inspection.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['quality_inspection.name', 'quality_inspection.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('quality_inspection.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
