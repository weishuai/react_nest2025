import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { TbreturnvisitSearchVo, TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
import { Tbreturnvisit } from '../myentities/tbreturnvisit';

export class TbreturnvisitRepo {
  async create(tbreturnvisitVo: TbreturnvisitVo) {
    return await getRepository(Tbreturnvisit).insert(tbreturnvisitVo);
  }
  async update(Id: string, user_id: string, tbreturnvisitVo: TbreturnvisitVo) {
    tbreturnvisitVo.updatedAt = new Date();
    tbreturnvisitVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Tbreturnvisit).update(Id, tbreturnvisitVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Tbreturnvisit).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTbreturnvisitsById(id: string) {
    const qb = await getRepository(Tbreturnvisit).createQueryBuilder(
      'tbreturnvisit',
    );
    const fields: Record<string, string> = {
      id: 'tbreturnvisit.id',
      name: 'tbreturnvisit.name',
      mid: 'tbreturnvisit.mid', 
      project: 'tbreturnvisit.project', 
      fhdate: 'tbreturnvisit.fhdate', 
      location: 'tbreturnvisit.location', 
      contacts: 'tbreturnvisit.contacts', 
      contactInformation: 'tbreturnvisit.contactInformation', 
      rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription', 
      annex: 'tbreturnvisit.annex', 

      description: 'tbreturnvisit.description',
      createdAt: 'tbreturnvisit.created_at',
      updatedAt: 'tbreturnvisit.updated_at',
      isactived: 'tbreturnvisit.isactived',
      islocked: 'tbreturnvisit.islocked',
      createUid: 'tbreturnvisit.create_uid',
      updatedUid: 'tbreturnvisit.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'tbreturnvisit', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTbreturnvisitAll() {
    const qb = getRepository(Tbreturnvisit).createQueryBuilder('tbreturnvisit');
    const fields: Record<string, string> = {
      id: 'tbreturnvisit.id',
      name: 'tbreturnvisit.name',
      description: 'tbreturnvisit.description',
      mid: 'tbreturnvisit.mid', 
      project: 'tbreturnvisit.project', 
      fhdate: 'tbreturnvisit.fhdate', 
      location: 'tbreturnvisit.location', 
      contacts: 'tbreturnvisit.contacts', 
      contactInformation: 'tbreturnvisit.contactInformation', 
      rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription', 
      annex: 'tbreturnvisit.annex', 

      createdAt: 'tbreturnvisit.created_at',
      updatedAt: 'tbreturnvisit.updated_at',
      isactived: 'tbreturnvisit.isactived',
      islocked: 'tbreturnvisit.islocked',
      createUid: 'tbreturnvisit.create_uid',
      updatedUid: 'tbreturnvisit.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbreturnvisit.isactived='0'");
    qb.orderBy('tbreturnvisit.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getTbreturnvisitAllView() {
    const qb = await getRepository(Tbreturnvisit).createQueryBuilder(
      'tbreturnvisit',
    );
    const fields: Record<string, string> = {
      id: 'tbreturnvisit.id',
      name: 'tbreturnvisit.name',
      description: 'tbreturnvisit.description',
      mid: 'tbreturnvisit.mid', 
      project: 'tbreturnvisit.project', 
      fhdate: 'tbreturnvisit.fhdate', 
      location: 'tbreturnvisit.location', 
      contacts: 'tbreturnvisit.contacts', 
      contactInformation: 'tbreturnvisit.contactInformation', 
      rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription', 
      annex: 'tbreturnvisit.annex', 

      createdAt: 'tbreturnvisit.created_at',
      updatedAt: 'tbreturnvisit.updated_at',
      isactived: 'tbreturnvisit.isactived',
      islocked: 'tbreturnvisit.islocked',
      createUid: 'tbreturnvisit.create_uid',
      updatedUid: 'tbreturnvisit.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('tbreturnvisit.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getTbreturnvisitList(search: TbreturnvisitSearchVo) {
    const qb = await getRepository(Tbreturnvisit).createQueryBuilder(
      'tbreturnvisit',
    );
    const fields: Record<string, string> = {
      id: 'tbreturnvisit.id',
      name: 'tbreturnvisit.name',
      description: 'tbreturnvisit.description',
      mid: 'tbreturnvisit.mid', 
      project: 'tbreturnvisit.project', 
      fhdate: 'tbreturnvisit.fhdate', 
      location: 'tbreturnvisit.location', 
      contacts: 'tbreturnvisit.contacts', 
      contactInformation: 'tbreturnvisit.contactInformation', 
      rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription', 
      annex: 'tbreturnvisit.annex', 

      createdAt: 'tbreturnvisit.created_at',
      updatedAt: 'tbreturnvisit.updated_at',
      isactived: 'tbreturnvisit.isactived',
      islocked: 'tbreturnvisit.islocked',
      createUid: 'tbreturnvisit.create_uid',
      updatedUid: 'tbreturnvisit.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbreturnvisit.isactived='0'");
    /*
    multiSearch(
      qb,
      ['tbreturnvisit.name', 'tbreturnvisit.description'],
      search.search,
    );
     */
    qb.orderBy('tbreturnvisit.created_at', 'DESC');
    //qb.addOrderBy('tbreturnvisit.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getTbreturnvisitSearch(search: TbreturnvisitSearchVo) {
  //   const qb =await getRepository(Tbreturnvisit).createQueryBuilder('tbreturnvisit');
  //   qb.leftJoin(User, 'user', 'tbreturnvisit.create_uid = user.id');
  //   qb.select( `tbreturnvisit.id,
  //     tbreturnvisit.name,
  //     tbreturnvisit.description,
  //     tbreturnvisit.created_at,
  //     tbreturnvisit.updated_at,
  //     tbreturnvisit.isactived,
  //     tbreturnvisit.islocked,
  //     tbreturnvisit.create_uid,
  //     tbreturnvisit.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'tbreturnvisit', 'name', ownerType);
  //     // qb.where("tbreturnvisit.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'tbreturnvisit.id',
  //       name: 'tbreturnvisit.name',
  //       description: 'tbreturnvisit.description',
  //             mid: 'tbreturnvisit.mid', 
  //     project: 'tbreturnvisit.project', 
  //     fhdate: 'tbreturnvisit.fhdate', 
  //     location: 'tbreturnvisit.location', 
  //     contacts: 'tbreturnvisit.contacts', 
  //     contactInformation: 'tbreturnvisit.contactInformation', 
  //     rreturnVisitDescription: 'tbreturnvisit.returnVisitDescription', 
  //     annex: 'tbreturnvisit.annex', 

  //       createdAt: 'tbreturnvisit.created_at',
  //       updatedAt: 'tbreturnvisit.updated_at',
  //       isactived: 'tbreturnvisit.isactived',
  //       islocked: 'tbreturnvisit.islocked',
  //       createUid: 'tbreturnvisit.create_uid',
  //       updatedUid: 'tbreturnvisit.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['tbreturnvisit.name', 'tbreturnvisit.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('tbreturnvisit.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
