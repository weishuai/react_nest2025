import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
import { Campaign } from '../myentities';

export class CampaignRepo {
  async create(accountTagVo: CampaignVo) {
    return await getRepository(Campaign).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: CampaignVo) {
    ///accountTagVo.updatedAt = new Date();
    console.log("updatedAt");
    console.log(accountTagVo.updatedAt);
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(Campaign).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Campaign).update(Ids[0], {
      isactived: '1',
    });
  }
  async getcampaignsById(id: string) {
    const qb = getRepository(Campaign).createQueryBuilder('campaign');
    const fields: Record<string, string> = {
      id: 'campaign.id',
      name: 'campaign.name',
      starts: 'campaign.starts',
      ends: 'campaign.ends',
      owner: 'campaign.owner',
      budget: 'campaign.budget',
      status: 'campaign.status',
      description: 'campaign.description',
      createdAt: 'campaign.created_at',
      updatedAt: 'campaign.updated_at',
      isactived: 'campaign.isactived',
      islocked: 'campaign.islocked',
      createUid: 'campaign.create_uid',
      updatedUid: 'campaign.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'campaign', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getCampaignsAll(search: CampaignSearchVo) {
    const qb = getRepository(Campaign).createQueryBuilder('campaign');
    const fields: Record<string, string> = {
      id: 'campaign.id',
      name: 'campaign.name',
      starts: 'campaign.starts',
      ends: 'campaign.ends',
      owner: 'campaign.owner',
      budget: 'campaign.budget',
      status: 'campaign.status',
      description: 'campaign.description',
      createdAt: 'campaign.created_at',
      updatedAt: 'campaign.updated_at',
      isactived: 'campaign.isactived',
      islocked: 'campaign.islocked',
      createUid: 'campaign.create_uid',
      updatedUid: 'campaign.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("campaign.isactived='0'");
    multiSearch(qb, ['campaign.name', 'campaign.description'], search.search)
    qb.addOrderBy('campaign.created_at', 'DESC');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getCampaignsAllView() {
    const qb = getRepository(Campaign).createQueryBuilder('campaign');
    const fields: Record<string, string> = {
      id: 'campaign.id',
      name: 'campaign.name',
      starts: 'campaign.starts',
      ends: 'campaign.ends',
      owner: 'campaign.owner',
      budget: 'campaign.budget',
      status: 'campaign.status',
      description: 'campaign.description',
      createdAt: 'campaign.created_at',
      updatedAt: 'campaign.updated_at',
      isactived: 'campaign.isactived',
      islocked: 'campaign.islocked',
      createUid: 'campaign.create_uid',
      updatedUid: 'campaign.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    //andWhereEqual(qb, 'leadpools', 'id', id);
    const res = await qb.getRawMany();
    return res;
  }

  async getcampaigns(search: CampaignSearchVo) {
    const qb = getRepository(Campaign).createQueryBuilder('campaign');
    const fields: Record<string, string> = {
      id: 'campaign.id',
      name: 'campaign.name',
      starts: 'campaign.starts',
      ends: 'campaign.ends',
      owner: 'campaign.owner',
      budget: 'campaign.budget',
      status: 'campaign.status',
      description: 'campaign.description',
      createdAt: 'campaign.created_at',
      updatedAt: 'campaign.updated_at',
      isactived: 'campaign.isactived',
      islocked: 'campaign.islocked',
      createUid: 'campaign.create_uid',
      updatedUid: 'campaign.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("campaign.isactived='0'");
    andWhereEqual(qb, 'campaign', 'status', search.fundType);
    multiSearch(qb, ['campaign.name', 'campaign.description'], search.search);


    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }
}
