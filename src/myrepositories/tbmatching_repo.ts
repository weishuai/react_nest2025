import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { TbmatchingSearchVo, TbmatchingVo } from '../myvo/tbmatching_vo';
import { Tbmatching } from '../myentities/tbmatching';

export class TbmatchingRepo {
  async create(tbmatchingVo: TbmatchingVo) {
    return await getRepository(Tbmatching).insert(tbmatchingVo);
  }
  async update(Id: string, user_id: string, tbmatchingVo: TbmatchingVo) {
    tbmatchingVo.updatedAt = new Date();
    tbmatchingVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Tbmatching).update(Id, tbmatchingVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Tbmatching).update(Ids[0], {
      isactived: '1',
    });
  }
  async getTbmatchingsById(id: string) {
    const qb = await getRepository(Tbmatching).createQueryBuilder(
      'tbmatching',
    );
    const fields: Record<string, string> = {
      id: 'tbmatching.id',
      name: 'tbmatching.name',
      fhname: 'tbmatching.fhname', 
      fhdate: 'tbmatching.fhdate', 
      sampleDate: 'tbmatching.sampleDate', 
      documentNumber: 'tbmatching.documentNumber', 
      customerCode: 'tbmatching.customerCode', 
      customerName: 'tbmatching.customerName', 
      sampleName: 'tbmatching.sampleName', 
      numbe: 'tbmatching.numbe', 
      component: 'tbmatching.component', 
      appearanceStyle: 'tbmatching.appearanceStyle', 
      requirements: 'tbmatching.requirements', 
      technology: 'tbmatching.technology', 
      mycheck: 'tbmatching.cmyheck', 
      registration: 'tbmatching.registration', 
      quotation: 'tbmatching.quotation', 
      manufacturingOrders: 'tbmatching.manufacturingOrders', 

      description: 'tbmatching.description',
      createdAt: 'tbmatching.created_at',
      updatedAt: 'tbmatching.updated_at',
      isactived: 'tbmatching.isactived',
      islocked: 'tbmatching.islocked',
      createUid: 'tbmatching.create_uid',
      updatedUid: 'tbmatching.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'tbmatching', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getTbmatchingAll() {
    const qb = getRepository(Tbmatching).createQueryBuilder('tbmatching');
    const fields: Record<string, string> = {
      id: 'tbmatching.id',
      name: 'tbmatching.name',
      description: 'tbmatching.description',
      fhname: 'tbmatching.fhname', 
      fhdate: 'tbmatching.fhdate', 
      sampleDate: 'tbmatching.sampleDate', 
      documentNumber: 'tbmatching.documentNumber', 
      customerCode: 'tbmatching.customerCode', 
      customerName: 'tbmatching.customerName', 
      sampleName: 'tbmatching.sampleName', 
      numbe: 'tbmatching.numbe', 
      component: 'tbmatching.component', 
      appearanceStyle: 'tbmatching.appearanceStyle', 
      requirements: 'tbmatching.requirements', 
      technology: 'tbmatching.technology', 
      mycheck: 'tbmatching.cmyheck', 
      registration: 'tbmatching.registration', 
      quotation: 'tbmatching.quotation', 
      manufacturingOrders: 'tbmatching.manufacturingOrders', 

      createdAt: 'tbmatching.created_at',
      updatedAt: 'tbmatching.updated_at',
      isactived: 'tbmatching.isactived',
      islocked: 'tbmatching.islocked',
      createUid: 'tbmatching.create_uid',
      updatedUid: 'tbmatching.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbmatching.isactived='0'");
    qb.orderBy('tbmatching.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getTbmatchingAllView() {
    const qb = await getRepository(Tbmatching).createQueryBuilder(
      'tbmatching',
    );
    const fields: Record<string, string> = {
      id: 'tbmatching.id',
      name: 'tbmatching.name',
      description: 'tbmatching.description',
      fhname: 'tbmatching.fhname', 
      fhdate: 'tbmatching.fhdate', 
      sampleDate: 'tbmatching.sampleDate', 
      documentNumber: 'tbmatching.documentNumber', 
      customerCode: 'tbmatching.customerCode', 
      customerName: 'tbmatching.customerName', 
      sampleName: 'tbmatching.sampleName', 
      numbe: 'tbmatching.numbe', 
      component: 'tbmatching.component', 
      appearanceStyle: 'tbmatching.appearanceStyle', 
      requirements: 'tbmatching.requirements', 
      technology: 'tbmatching.technology', 
      mycheck: 'tbmatching.cmyheck', 
      registration: 'tbmatching.registration', 
      quotation: 'tbmatching.quotation', 
      manufacturingOrders: 'tbmatching.manufacturingOrders', 

      createdAt: 'tbmatching.created_at',
      updatedAt: 'tbmatching.updated_at',
      isactived: 'tbmatching.isactived',
      islocked: 'tbmatching.islocked',
      createUid: 'tbmatching.create_uid',
      updatedUid: 'tbmatching.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('tbmatching.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getTbmatchingList(search: TbmatchingSearchVo) {
    const qb = await getRepository(Tbmatching).createQueryBuilder(
      'tbmatching',
    );
    const fields: Record<string, string> = {
      id: 'tbmatching.id',
      name: 'tbmatching.name',
      description: 'tbmatching.description',
      fhname: 'tbmatching.fhname', 
      fhdate: 'tbmatching.fhdate', 
      sampleDate: 'tbmatching.sampleDate', 
      documentNumber: 'tbmatching.documentNumber', 
      customerCode: 'tbmatching.customerCode', 
      customerName: 'tbmatching.customerName', 
      sampleName: 'tbmatching.sampleName', 
      numbe: 'tbmatching.numbe', 
      component: 'tbmatching.component', 
      appearanceStyle: 'tbmatching.appearanceStyle', 
      requirements: 'tbmatching.requirements', 
      technology: 'tbmatching.technology', 
      mycheck: 'tbmatching.cmyheck', 
      registration: 'tbmatching.registration', 
      quotation: 'tbmatching.quotation', 
      manufacturingOrders: 'tbmatching.manufacturingOrders', 

      createdAt: 'tbmatching.created_at',
      updatedAt: 'tbmatching.updated_at',
      isactived: 'tbmatching.isactived',
      islocked: 'tbmatching.islocked',
      createUid: 'tbmatching.create_uid',
      updatedUid: 'tbmatching.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("tbmatching.isactived='0'");
    /*
    multiSearch(
      qb,
      ['tbmatching.name', 'tbmatching.description'],
      search.search,
    );
     */
    qb.orderBy('tbmatching.created_at', 'DESC');
    //qb.addOrderBy('tbmatching.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getTbmatchingSearch(search: TbmatchingSearchVo) {
  //   const qb =await getRepository(Tbmatching).createQueryBuilder('tbmatching');
  //   qb.leftJoin(User, 'user', 'tbmatching.create_uid = user.id');
  //   qb.select( `tbmatching.id,
  //     tbmatching.name,
  //     tbmatching.description,
  //     tbmatching.created_at,
  //     tbmatching.updated_at,
  //     tbmatching.isactived,
  //     tbmatching.islocked,
  //     tbmatching.create_uid,
  //     tbmatching.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'tbmatching', 'name', ownerType);
  //     // qb.where("tbmatching.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'tbmatching.id',
  //       name: 'tbmatching.name',
  //       description: 'tbmatching.description',
  //             fhname: 'tbmatching.fhname', 
  //     fhdate: 'tbmatching.fhdate', 
  //     sampleDate: 'tbmatching.sampleDate', 
  //     documentNumber: 'tbmatching.documentNumber', 
  //     customerCode: 'tbmatching.customerCode', 
  //     customerName: 'tbmatching.customerName', 
  //     sampleName: 'tbmatching.sampleName', 
  //     numbe: 'tbmatching.numbe', 
  //     component: 'tbmatching.component', 
  //     appearanceStyle: 'tbmatching.appearanceStyle', 
  //     requirements: 'tbmatching.requirements', 
  //     technology: 'tbmatching.technology', 
  //     mycheck: 'tbmatching.cmyheck', 
  //     registration: 'tbmatching.registration', 
  //     quotation: 'tbmatching.quotation', 
  //     manufacturingOrders: 'tbmatching.manufacturingOrders', 

  //       createdAt: 'tbmatching.created_at',
  //       updatedAt: 'tbmatching.updated_at',
  //       isactived: 'tbmatching.isactived',
  //       islocked: 'tbmatching.islocked',
  //       createUid: 'tbmatching.create_uid',
  //       updatedUid: 'tbmatching.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['tbmatching.name', 'tbmatching.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('tbmatching.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
