import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { AttenceSearchVo, AttenceVo } from '../myvo/AttenceVo';
import { Attence } from '../myentities';

export class AttenceRepo {
  async create(accountTagVo: AttenceVo) {
    return await getRepository(Attence).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: AttenceVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Attence).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Attence).update(Ids[0], {
      isactived: '1',
    });
  }

  async getAttencesById(id: string) {
    const qb = getRepository(Attence).createQueryBuilder('attence');
    const fields: Record<string, string> = {
      id: 'attence.id',
      name: 'attence.name',
      date: 'attence.date',
      checkInTime: 'attence.check_in_time',
      checkInTemperature: 'attence.check_in_temperature',
      checkInPlace: 'attence.check_in_place',
      checkInAddress: 'attence.check_in_address',
      checkInNotes: 'attence.check_in_notes',
      checkOutTime: 'attence.check_out_time',
      checkOutTemperature: 'attence.check_out_temperature',
      checkOutPlace: 'attence.check_out_place',
      checkOutAddress: 'attence.check_out_address',
      checkOutNotes: 'attence.check_out_notes',
      createdAt: 'attence.created_at',
      updatedAt: 'attence.updated_at',
      isactived: 'attence.isactived',
      islocked: 'attence.islocked',
      createUid: 'attence.create_uid',
      updatedUid: 'attence.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'attence', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getAttenceAll(search: AttenceSearchVo) {
    const qb = getRepository(Attence).createQueryBuilder('attence');
    const fields: Record<string, string> = {
      id: 'attence.id',
      name: 'attence.name',
      date: 'attence.date',
      checkInTime: 'attence.check_in_time',
      checkInTemperature: 'attence.check_in_temperature',
      checkInPlace: 'attence.check_in_place',
      checkInAddress: 'attence.check_in_address',
      checkInNotes: 'attence.check_in_notes',
      checkOutTime: 'attence.check_out_time',
      checkOutTemperature: 'attence.check_out_temperature',
      checkOutPlace: 'attence.check_out_place',
      checkOutAddress: 'attence.check_out_address',
      checkOutNotes: 'attence.check_out_notes',
      createdAt: 'attence.created_at',
      updatedAt: 'attence.updated_at',
      isactived: 'attence.isactived',
      islocked: 'attence.islocked',
      createUid: 'attence.create_uid',
      updatedUid: 'attence.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("attence.isactived='0'");
    multiSearch(qb, ['attence.name', 'attence.date'], search.search);
    qb.orderBy('attence.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getAttenceAllView() {
    const qb = getRepository(Attence).createQueryBuilder('attence');
    const fields: Record<string, string> = {
      id: 'attence.id',
      name: 'attence.name',
      date: 'attence.date',
      checkInTime: 'attence.check_in_time',
      checkInTemperature: 'attence.check_in_temperature',
      checkInPlace: 'attence.check_in_place',
      checkInAddress: 'attence.check_in_address',
      checkInNotes: 'attence.check_in_notes',
      checkOutTime: 'attence.check_out_time',
      checkOutTemperature: 'attence.check_out_temperature',
      checkOutPlace: 'attence.check_out_place',
      checkOutAddress: 'attence.check_out_address',
      checkOutNotes: 'attence.check_out_notes',
      createdAt: 'attence.created_at',
      updatedAt: 'attence.updated_at',
      isactived: 'attence.isactived',
      islocked: 'attence.islocked',
      createUid: 'attence.create_uid',
      updatedUid: 'attence.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getAttence(search: AttenceSearchVo) {
    const qb = getRepository(Attence).createQueryBuilder('attence');
    const fields: Record<string, string> = {
      id: 'attence.id',
      name: 'attence.name',
      date: 'attence.date',
      checkInTime: 'attence.check_in_time',
      checkInTemperature: 'attence.check_in_temperature',
      checkInPlace: 'attence.check_in_place',
      checkInAddress: 'attence.check_in_address',
      checkInNotes: 'attence.check_in_notes',
      checkOutTime: 'attence.check_out_time',
      checkOutTemperature: 'attence.check_out_temperature',
      checkOutPlace: 'attence.check_out_place',
      checkOutAddress: 'attence.check_out_address',
      checkOutNotes: 'attence.check_out_notes',
      createdAt: 'attence.created_at',
      updatedAt: 'attence.updated_at',
      isactived: 'attence.isactived',
      islocked: 'attence.islocked',
      createUid: 'attence.create_uid',
      updatedUid: 'attence.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("attence.isactived='0'");
    andWhereEqual(qb, 'attence', 'date', search.fundType);
    multiSearch(qb, ['attence.name', 'attence.date'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
