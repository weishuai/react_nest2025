import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';
import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';
import { Template } from '../myentities';

export class TemplateRepo {
  async create(accountTagVo: TemplateVo) {
    return await getRepository(Template).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: TemplateVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Template).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Template).update(Ids[0], {
      isactived: '1',
    });
  }
  async gettemplatesById(id: string) {
    const qb = getRepository(Template).createQueryBuilder('template');
    const fields: Record<string, string> = {
      id: 'template.id',
      templateName: 'template.template_name',
      photo: 'template.photo',
      templateType: 'template.template_type',
      createdAt: 'template.created_at',
      updatedAt: 'template.updated_at',
      isactived: 'template.isactived',
      islocked: 'template.islocked',
      createUid: 'template.create_uid',
      updatedUid: 'template.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'template', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async gettemplateAll(search: TemplateSearchVo) {
    const qb = getRepository(Template).createQueryBuilder('template');
    const fields: Record<string, string> = {
      id: 'template.id',
      templateName: 'template.template_name',
      photo: 'template.photo',
      templateType: 'template.template_type',
      createdAt: 'template.created_at',
      updatedAt: 'template.updated_at',
      isactived: 'template.isactived',
      islocked: 'template.islocked',
      createUid: 'template.create_uid',
      updatedUid: 'template.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("template.isactived='0'");
    multiSearch(qb, ['template.name', 'template.remark'], search.search);
    qb.orderBy('template.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async gettemplateAllView() {
    const qb = getRepository(Template).createQueryBuilder('template');
    const fields: Record<string, string> = {
      id: 'template.id',
      templateName: 'template.template_name',
      photo: 'template.photo',
      templateType: 'template.template_type',
      createdAt: 'template.created_at',
      updatedAt: 'template.updated_at',
      isactived: 'template.isactived',
      islocked: 'template.islocked',
      createUid: 'template.create_uid',
      updatedUid: 'template.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async gettemplate(search: TemplateSearchVo) {
    const qb = getRepository(Template).createQueryBuilder('template');
    const fields: Record<string, string> = {
      id: 'template.id',
      templateName: 'template.template_name',
      photo: 'template.photo',
      templateType: 'template.template_type',
      createdAt: 'template.created_at',
      updatedAt: 'template.updated_at',
      isactived: 'template.isactived',
      islocked: 'template.islocked',
      createUid: 'template.create_uid',
      updatedUid: 'template.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("template.isactived='0'");
    andWhereEqual(qb, 'template', 'satus', search.fundType);
    multiSearch(qb, ['template.name', 'template.remark'], search.search);
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }
}
