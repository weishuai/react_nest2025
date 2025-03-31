import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { myWorkSearchVo, myWorkVo } from '../myvo/mywork_vo';
import { myWork } from '../myentities/mywork';

export class myWorkRepo {
  async create(myworkVo: myWorkVo) {
    return await getRepository(myWork).insert(myworkVo);
  }
  async update(Id: string, user_id: string, myworkVo: myWorkVo) {
    myworkVo.updatedAt = new Date();
    myworkVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(myWork).update(Id, myworkVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(myWork).update(Ids[0], {
      isactived: '1',
    });
  }
  async getmyWorksById(id: string) {
    const qb = await getRepository(myWork).createQueryBuilder(
      'mywork',
    );
    const fields: Record<string, string> = {
      id: 'mywork.id',
      name: 'mywork.name',
      operationName: 'mywork.operationName', 
      duration: 'mywork.duration', 
      workCenter: 'mywork.workCenter', 
      defaultDuration: 'mywork.defaultDuration', 
      serialNumber: 'mywork.serialNumber', 
      company: 'mywork.company', 
      bom: 'mywork.bom', 
      worksheet: 'mywork.worksheet', 
      fhtext: 'mywork.fhtext', 

      description: 'mywork.description',
      createdAt: 'mywork.created_at',
      updatedAt: 'mywork.updated_at',
      isactived: 'mywork.isactived',
      islocked: 'mywork.islocked',
      createUid: 'mywork.create_uid',
      updatedUid: 'mywork.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'mywork', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getmyWorkAll() {
    const qb = getRepository(myWork).createQueryBuilder('mywork');
    const fields: Record<string, string> = {
      id: 'mywork.id',
      name: 'mywork.name',
      description: 'mywork.description',
      operationName: 'mywork.operationName', 
      duration: 'mywork.duration', 
      workCenter: 'mywork.workCenter', 
      defaultDuration: 'mywork.defaultDuration', 
      serialNumber: 'mywork.serialNumber', 
      company: 'mywork.company', 
      bom: 'mywork.bom', 
      worksheet: 'mywork.worksheet', 
      fhtext: 'mywork.fhtext', 

      createdAt: 'mywork.created_at',
      updatedAt: 'mywork.updated_at',
      isactived: 'mywork.isactived',
      islocked: 'mywork.islocked',
      createUid: 'mywork.create_uid',
      updatedUid: 'mywork.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mywork.isactived='0'");
    qb.orderBy('mywork.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getmyWorkAllView() {
    const qb = await getRepository(myWork).createQueryBuilder(
      'mywork',
    );
    const fields: Record<string, string> = {
      id: 'mywork.id',
      name: 'mywork.name',
      description: 'mywork.description',
      operationName: 'mywork.operationName', 
      duration: 'mywork.duration', 
      workCenter: 'mywork.workCenter', 
      defaultDuration: 'mywork.defaultDuration', 
      serialNumber: 'mywork.serialNumber', 
      company: 'mywork.company', 
      bom: 'mywork.bom', 
      worksheet: 'mywork.worksheet', 
      fhtext: 'mywork.fhtext', 

      createdAt: 'mywork.created_at',
      updatedAt: 'mywork.updated_at',
      isactived: 'mywork.isactived',
      islocked: 'mywork.islocked',
      createUid: 'mywork.create_uid',
      updatedUid: 'mywork.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('mywork.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getmyWorkList(search: myWorkSearchVo) {
    const qb = await getRepository(myWork).createQueryBuilder(
      'mywork',
    );
    const fields: Record<string, string> = {
      id: 'mywork.id',
      name: 'mywork.name',
      description: 'mywork.description',
      operationName: 'mywork.operationName', 
      duration: 'mywork.duration', 
      workCenter: 'mywork.workCenter', 
      defaultDuration: 'mywork.defaultDuration', 
      serialNumber: 'mywork.serialNumber', 
      company: 'mywork.company', 
      bom: 'mywork.bom', 
      worksheet: 'mywork.worksheet', 
      fhtext: 'mywork.fhtext', 

      createdAt: 'mywork.created_at',
      updatedAt: 'mywork.updated_at',
      isactived: 'mywork.isactived',
      islocked: 'mywork.islocked',
      createUid: 'mywork.create_uid',
      updatedUid: 'mywork.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mywork.isactived='0'");
    /*
    multiSearch(
      qb,
      ['mywork.name', 'mywork.description'],
      search.search,
    );
     */
    qb.orderBy('mywork.created_at', 'DESC');
    //qb.addOrderBy('mywork.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
