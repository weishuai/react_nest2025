import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { myWorkCenterSearchVo, myWorkCenterVo } from '../myvo/mywork_center_vo';
import { myWorkCenter } from '../myentities/mywork_center';

export class myWorkCenterRepo {
  async create(myworkCenterVo: myWorkCenterVo) {
    return await getRepository(myWorkCenter).insert(myworkCenterVo);
  }
  async update(Id: string, user_id: string, myworkCenterVo: myWorkCenterVo) {
    myworkCenterVo.updatedAt = new Date();
    myworkCenterVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(myWorkCenter).update(Id, myworkCenterVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(myWorkCenter).update(Ids[0], {
      isactived: '1',
    });
  }
  async getmyWorkCentersById(id: string) {
    const qb = await getRepository(myWorkCenter).createQueryBuilder(
      'mywork_center',
    );
    const fields: Record<string, string> = {
      id: 'mywork_center.id',
      name: 'mywork_center.name',
      workcenter: 'mywork_center.workcenter', 
      code: 'mywork_center.code', 
      title: 'mywork_center.title', 
      workingHours: 'mywork_center.working_hours', 
      fhreplace: 'mywork_center.fhreplace', 
      timeEfficiency: 'mywork_center.time_efficiency', 
      capacity: 'mywork_center.capacity', 
      oee: 'mywork_center.oee', 
      setTime: 'mywork_center.set_time', 
      cleaningTime: 'mywork_center.cleaning_time', 
      hourlyCost: 'mywork_center.hourly_cost', 

      description: 'mywork_center.description',
      createdAt: 'mywork_center.created_at',
      updatedAt: 'mywork_center.updated_at',
      isactived: 'mywork_center.isactived',
      islocked: 'mywork_center.islocked',
      createUid: 'mywork_center.create_uid',
      updatedUid: 'mywork_center.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'mywork_center', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getmyWorkCenterAll() {
    const qb = getRepository(myWorkCenter).createQueryBuilder('mywork_center');
    const fields: Record<string, string> = {
      id: 'mywork_center.id',
      name: 'mywork_center.name',
      description: 'mywork_center.description',
      workcenter: 'mywork_center.workcenter', 
      code: 'mywork_center.code', 
      title: 'mywork_center.title', 
      workingHours: 'mywork_center.working_hours', 
      fhreplace: 'mywork_center.fhreplace', 
      timeEfficiency: 'mywork_center.time_efficiency', 
      capacity: 'mywork_center.capacity', 
      oee: 'mywork_center.oee', 
      setTime: 'mywork_center.set_time', 
      cleaningTime: 'mywork_center.cleaning_time', 
      hourlyCost: 'mywork_center.hourly_cost', 

      createdAt: 'mywork_center.created_at',
      updatedAt: 'mywork_center.updated_at',
      isactived: 'mywork_center.isactived',
      islocked: 'mywork_center.islocked',
      createUid: 'mywork_center.create_uid',
      updatedUid: 'mywork_center.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mywork_center.isactived='0'");
    qb.orderBy('mywork_center.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getmyWorkCenterAllView() {
    const qb = await getRepository(myWorkCenter).createQueryBuilder(
      'mywork_center',
    );
    const fields: Record<string, string> = {
      id: 'mywork_center.id',
      name: 'mywork_center.name',
      description: 'mywork_center.description',
      workcenter: 'mywork_center.workcenter', 
      code: 'mywork_center.code', 
      title: 'mywork_center.title', 
      workingHours: 'mywork_center.working_hours', 
      fhreplace: 'mywork_center.fhreplace', 
      timeEfficiency: 'mywork_center.time_efficiency', 
      capacity: 'mywork_center.capacity', 
      oee: 'mywork_center.oee', 
      setTime: 'mywork_center.set_time', 
      cleaningTime: 'mywork_center.cleaning_time', 
      hourlyCost: 'mywork_center.hourly_cost', 

      createdAt: 'mywork_center.created_at',
      updatedAt: 'mywork_center.updated_at',
      isactived: 'mywork_center.isactived',
      islocked: 'mywork_center.islocked',
      createUid: 'mywork_center.create_uid',
      updatedUid: 'mywork_center.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('mywork_center.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getmyWorkCenterList(search: myWorkCenterSearchVo) {
    const qb = await getRepository(myWorkCenter).createQueryBuilder(
      'mywork_center',
    );
    const fields: Record<string, string> = {
      id: 'mywork_center.id',
      name: 'mywork_center.name',
      description: 'mywork_center.description',
      workcenter: 'mywork_center.workcenter', 
      code: 'mywork_center.code', 
      title: 'mywork_center.title', 
      workingHours: 'mywork_center.working_hours', 
      fhreplace: 'mywork_center.fhreplace', 
      timeEfficiency: 'mywork_center.time_efficiency', 
      capacity: 'mywork_center.capacity', 
      oee: 'mywork_center.oee', 
      setTime: 'mywork_center.set_time', 
      cleaningTime: 'mywork_center.cleaning_time', 
      hourlyCost: 'mywork_center.hourly_cost', 

      createdAt: 'mywork_center.created_at',
      updatedAt: 'mywork_center.updated_at',
      isactived: 'mywork_center.isactived',
      islocked: 'mywork_center.islocked',
      createUid: 'mywork_center.create_uid',
      updatedUid: 'mywork_center.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("mywork_center.isactived='0'");
    /*
    multiSearch(
      qb,
      ['mywork_center.name', 'mywork_center.description'],
      search.search,
    );
     */
    qb.orderBy('mywork_center.created_at', 'DESC');
    //qb.addOrderBy('mywork_center.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
