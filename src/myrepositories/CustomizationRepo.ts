import dayjs from 'dayjs';
import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import {
  CustomizationSearchVo,
  CustomizationVo,
} from '../myvo/CustomizationVo';
import { Customization } from '../myentities';

export class CustomizationRepo {
  // Add your code herer

  async nextVal(name: string, table?: string) {
    const seq = await getRepository(Customization).findOneBy({
      name,
    });
    if (_.isNil(seq)) {
      const value = 1;
      await getRepository(Customization).insert({
        ///id: id(),
        name: name,
        table: table,
        value: value,
        isactived: '0',
      });
      const fhday = dayjs().format('YYYYMM');
      return { No: name + fhday + String(value) };
    } else {
      let value = 0;
      if (!_.isNull(seq.value)) {
        value = seq.value + 1;
      }
      await getRepository(Customization).update({ name }, { value: value });
      const fhday = dayjs().format('YYYYMM');
      return { No: name + fhday + String(value) };
    }
  }

  /*
  async nextCondoNo() {
    return this.nextVal('condo_no');
  }

  async nextIssueNo(condoCode: string) {
    const name = `condo_${condoCode}`;
    const table = dayjs().format('YYYYMM');
    return this.nextVal(name, table);
  }
*/
  async nextGetNo(name: string, table?: string) {
    ///const name = 'TrakingLog';

    return this.nextVal(name, table);
  }

  async getCustomizationsById(id: string) {
    const qb = getRepository(Customization).createQueryBuilder('customization');
    const fields: Record<string, string> = {
      id: 'customization.id',
      name: 'customization.name',
      format: 'customization.format',
      value: 'customization.value',
      table: 'customization.table',
      rate: 'customization.rate',
      source: 'customization.source',
      description: 'customization.description',
      createdAt: 'customization.created_at',
      updatedAt: 'customization.updated_at',
      isactived: 'customization.isactived',
      islocked: 'customization.islocked',
      createUid: 'customization.create_uid',
      updatedUid: 'customization.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'customization', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getCustomizationAll(search: CustomizationSearchVo) {
    const qb = getRepository(Customization).createQueryBuilder('customization');
    const fields: Record<string, string> = {
      id: 'customization.id',
      name: 'customization.name',
      format: 'customization.format',
      value: 'customization.value',
      table: 'customization.table',
      rate: 'customization.rate',
      source: 'customization.source',
      description: 'customization.description',
      createdAt: 'customization.created_at',
      updatedAt: 'customization.updated_at',
      isactived: 'customization.isactived',
      islocked: 'customization.islocked',
      createUid: 'customization.create_uid',
      updatedUid: 'customization.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("customization.isactived='0'");
    multiSearch(
      qb,
      ['customization.name', 'customization.description'],
      search.search,
    );
    qb.orderBy('customization.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getCustomizationAllView() {
    const qb = getRepository(Customization).createQueryBuilder('customization');
    const fields: Record<string, string> = {
      id: 'customization.id',
      name: 'customization.name',
      format: 'customization.format',
      value: 'customization.value',
      table: 'customization.table',
      rate: 'customization.rate',
      source: 'customization.source',
      description: 'customization.description',
      createdAt: 'customization.created_at',
      updatedAt: 'customization.updated_at',
      isactived: 'customization.isactived',
      islocked: 'customization.islocked',
      createUid: 'customization.create_uid',
      updatedUid: 'customization.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getCustomization(search: CustomizationSearchVo) {
    const qb = getRepository(Customization).createQueryBuilder('customization');
    const fields: Record<string, string> = {
      id: 'customization.id',
      name: 'customization.name',
      format: 'customization.format',
      value: 'customization.value',
      table: 'customization.table',
      rate: 'customization.rate',
      source: 'customization.source',
      description: 'customization.description',
      createdAt: 'customization.created_at',
      updatedAt: 'customization.updated_at',
      isactived: 'customization.isactived',
      islocked: 'customization.islocked',
      createUid: 'customization.create_uid',
      updatedUid: 'customization.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("customization.isactived='0'");
    andWhereEqual(qb, 'customization', 'name', search.fundType);
    multiSearch(
      qb,
      ['customization.name', 'customization.description'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
