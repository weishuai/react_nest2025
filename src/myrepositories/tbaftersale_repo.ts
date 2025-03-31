import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { TbaftersaleSearchVo, TbaftersaleVo } from '../myvo/tbaftersale_vo';
import { Tbaftersale } from '../myentities/tbaftersale';

export class TbaftersaleRepo {
  async create(tbaftersaleVo: TbaftersaleVo) {
    return await getRepository(Tbaftersale).insert(tbaftersaleVo);
  }
  async update(Id: string, user_id: string, tbaftersaleVo: TbaftersaleVo) {
    tbaftersaleVo.updatedAt = new Date();
    tbaftersaleVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Tbaftersale).update(Id, tbaftersaleVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Tbaftersale).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTbaftersalesById(id: string) {
    const qb = await getRepository(Tbaftersale).createQueryBuilder(
      'tbaftersale',
    );
    const fields: Record<string, string> = {
      id: 'tbaftersale.id',
      name: 'tbaftersale.name',
      mid: 'tbaftersale.mid', 
      project: 'tbaftersale.project', 
      fhdate: 'tbaftersale.fhdate', 
      location: 'tbaftersale.location', 
      contacts: 'tbaftersale.contacts', 
      contactInformation: 'tbaftersale.contactInformation', 
      VisitDescription: 'tbaftersale.VisitDescription', 
      problemHandling: 'tbaftersale.problemHandling', 
      remainingProblems: 'tbaftersale.remainingProblems', 
      afterSalesType: 'tbaftersale.afterSalesType', 
      annex: 'tbaftersale.annex', 
      processedBy: 'tbaftersale.processedBy', 

      description: 'tbaftersale.description',
      createdAt: 'tbaftersale.created_at',
      updatedAt: 'tbaftersale.updated_at',
      isactived: 'tbaftersale.isactived',
      islocked: 'tbaftersale.islocked',
      createUid: 'tbaftersale.create_uid',
      updatedUid: 'tbaftersale.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'tbaftersale', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTbaftersaleAll() {
    const qb = getRepository(Tbaftersale).createQueryBuilder('tbaftersale');
    const fields: Record<string, string> = {
      id: 'tbaftersale.id',
      name: 'tbaftersale.name',
      description: 'tbaftersale.description',
      mid: 'tbaftersale.mid', 
      project: 'tbaftersale.project', 
      fhdate: 'tbaftersale.fhdate', 
      location: 'tbaftersale.location', 
      contacts: 'tbaftersale.contacts', 
      contactInformation: 'tbaftersale.contactInformation', 
      VisitDescription: 'tbaftersale.VisitDescription', 
      problemHandling: 'tbaftersale.problemHandling', 
      remainingProblems: 'tbaftersale.remainingProblems', 
      afterSalesType: 'tbaftersale.afterSalesType', 
      annex: 'tbaftersale.annex', 
      processedBy: 'tbaftersale.processedBy', 

      createdAt: 'tbaftersale.created_at',
      updatedAt: 'tbaftersale.updated_at',
      isactived: 'tbaftersale.isactived',
      islocked: 'tbaftersale.islocked',
      createUid: 'tbaftersale.create_uid',
      updatedUid: 'tbaftersale.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbaftersale.isactived='0'");
    qb.orderBy('tbaftersale.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getTbaftersaleAllView() {
    const qb = await getRepository(Tbaftersale).createQueryBuilder(
      'tbaftersale',
    );
    const fields: Record<string, string> = {
      id: 'tbaftersale.id',
      name: 'tbaftersale.name',
      description: 'tbaftersale.description',
      mid: 'tbaftersale.mid', 
      project: 'tbaftersale.project', 
      fhdate: 'tbaftersale.fhdate', 
      location: 'tbaftersale.location', 
      contacts: 'tbaftersale.contacts', 
      contactInformation: 'tbaftersale.contactInformation', 
      VisitDescription: 'tbaftersale.VisitDescription', 
      problemHandling: 'tbaftersale.problemHandling', 
      remainingProblems: 'tbaftersale.remainingProblems', 
      afterSalesType: 'tbaftersale.afterSalesType', 
      annex: 'tbaftersale.annex', 
      processedBy: 'tbaftersale.processedBy', 

      createdAt: 'tbaftersale.created_at',
      updatedAt: 'tbaftersale.updated_at',
      isactived: 'tbaftersale.isactived',
      islocked: 'tbaftersale.islocked',
      createUid: 'tbaftersale.create_uid',
      updatedUid: 'tbaftersale.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('tbaftersale.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getTbaftersaleList(search: TbaftersaleSearchVo) {
    const qb = await getRepository(Tbaftersale).createQueryBuilder(
      'tbaftersale',
    );
    const fields: Record<string, string> = {
      id: 'tbaftersale.id',
      name: 'tbaftersale.name',
      description: 'tbaftersale.description',
      mid: 'tbaftersale.mid', 
      project: 'tbaftersale.project', 
      fhdate: 'tbaftersale.fhdate', 
      location: 'tbaftersale.location', 
      contacts: 'tbaftersale.contacts', 
      contactInformation: 'tbaftersale.contactInformation', 
      VisitDescription: 'tbaftersale.VisitDescription', 
      problemHandling: 'tbaftersale.problemHandling', 
      remainingProblems: 'tbaftersale.remainingProblems', 
      afterSalesType: 'tbaftersale.afterSalesType', 
      annex: 'tbaftersale.annex', 
      processedBy: 'tbaftersale.processedBy', 

      createdAt: 'tbaftersale.created_at',
      updatedAt: 'tbaftersale.updated_at',
      isactived: 'tbaftersale.isactived',
      islocked: 'tbaftersale.islocked',
      createUid: 'tbaftersale.create_uid',
      updatedUid: 'tbaftersale.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbaftersale.isactived='0'");
    /*
    multiSearch(
      qb,
      ['tbaftersale.name', 'tbaftersale.description'],
      search.search,
    );
     */
    qb.orderBy('tbaftersale.created_at', 'DESC');
    //qb.addOrderBy('tbaftersale.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getTbaftersaleSearch(search: TbaftersaleSearchVo) {
  //   const qb =await getRepository(Tbaftersale).createQueryBuilder('tbaftersale');
  //   qb.leftJoin(User, 'user', 'tbaftersale.create_uid = user.id');
  //   qb.select( `tbaftersale.id,
  //     tbaftersale.name,
  //     tbaftersale.description,
  //     tbaftersale.created_at,
  //     tbaftersale.updated_at,
  //     tbaftersale.isactived,
  //     tbaftersale.islocked,
  //     tbaftersale.create_uid,
  //     tbaftersale.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'tbaftersale', 'name', ownerType);
  //     // qb.where("tbaftersale.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'tbaftersale.id',
  //       name: 'tbaftersale.name',
  //       description: 'tbaftersale.description',
  //             mid: 'tbaftersale.mid', 
  //     project: 'tbaftersale.project', 
  //     fhdate: 'tbaftersale.fhdate', 
  //     location: 'tbaftersale.location', 
  //     contacts: 'tbaftersale.contacts', 
  //     contactInformation: 'tbaftersale.contactInformation', 
  //     VisitDescription: 'tbaftersale.VisitDescription', 
  //     problemHandling: 'tbaftersale.problemHandling', 
  //     remainingProblems: 'tbaftersale.remainingProblems', 
  //     afterSalesType: 'tbaftersale.afterSalesType', 
  //     annex: 'tbaftersale.annex', 
  //     processedBy: 'tbaftersale.processedBy', 

  //       createdAt: 'tbaftersale.created_at',
  //       updatedAt: 'tbaftersale.updated_at',
  //       isactived: 'tbaftersale.isactived',
  //       islocked: 'tbaftersale.islocked',
  //       createUid: 'tbaftersale.create_uid',
  //       updatedUid: 'tbaftersale.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['tbaftersale.name', 'tbaftersale.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('tbaftersale.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
