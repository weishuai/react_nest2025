import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { SellingPriceSearchVo, SellingPriceVo } from '../myvo/selling_price_vo';
import { SellingPrice } from '../myentities/selling_price';

export class SellingPriceRepo {
  async create(sellingPriceVo: SellingPriceVo) {
    return await getRepository(SellingPrice).insert(sellingPriceVo);
  }
  async update(Id: string, user_id: string, sellingPriceVo: SellingPriceVo) {
    sellingPriceVo.updatedAt = new Date();
    sellingPriceVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(SellingPrice).update(Id, sellingPriceVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(SellingPrice).update(Ids[0], {
      isactived: '1',
    });
  }
  async getSellingPricesById(id: string) {
    const qb = await getRepository(SellingPrice).createQueryBuilder(
      'selling_price',
    );
    const fields: Record<string, string> = {
      id: 'selling_price.id',
      name: 'selling_price.name',
      fhname: 'selling_price.fhname', 
      company: 'selling_price.company', 
      mygroup: 'selling_price.mygroup', 
      dscountPolicy: 'selling_price.dscountPolicy', 

      description: 'selling_price.description',
      createdAt: 'selling_price.created_at',
      updatedAt: 'selling_price.updated_at',
      isactived: 'selling_price.isactived',
      islocked: 'selling_price.islocked',
      createUid: 'selling_price.create_uid',
      updatedUid: 'selling_price.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'selling_price', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getSellingPriceAll() {
    const qb = getRepository(SellingPrice).createQueryBuilder('selling_price');
    const fields: Record<string, string> = {
      id: 'selling_price.id',
      name: 'selling_price.name',
      description: 'selling_price.description',
      fhname: 'selling_price.fhname', 
      company: 'selling_price.company', 
      mygroup: 'selling_price.mygroup', 
      dscountPolicy: 'selling_price.dscountPolicy', 

      createdAt: 'selling_price.created_at',
      updatedAt: 'selling_price.updated_at',
      isactived: 'selling_price.isactived',
      islocked: 'selling_price.islocked',
      createUid: 'selling_price.create_uid',
      updatedUid: 'selling_price.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("selling_price.isactived='0'");
    qb.orderBy('selling_price.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getSellingPriceAllView() {
    const qb = await getRepository(SellingPrice).createQueryBuilder(
      'selling_price',
    );
    const fields: Record<string, string> = {
      id: 'selling_price.id',
      name: 'selling_price.name',
      description: 'selling_price.description',
      fhname: 'selling_price.fhname', 
      company: 'selling_price.company', 
      mygroup: 'selling_price.mygroup', 
      dscountPolicy: 'selling_price.dscountPolicy', 

      createdAt: 'selling_price.created_at',
      updatedAt: 'selling_price.updated_at',
      isactived: 'selling_price.isactived',
      islocked: 'selling_price.islocked',
      createUid: 'selling_price.create_uid',
      updatedUid: 'selling_price.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('selling_price.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getSellingPriceList(search: SellingPriceSearchVo) {
    const qb = await getRepository(SellingPrice).createQueryBuilder(
      'selling_price',
    );
    const fields: Record<string, string> = {
      id: 'selling_price.id',
      name: 'selling_price.name',
      description: 'selling_price.description',
      fhname: 'selling_price.fhname', 
      company: 'selling_price.company', 
      mygroup: 'selling_price.mygroup', 
      dscountPolicy: 'selling_price.dscountPolicy', 

      createdAt: 'selling_price.created_at',
      updatedAt: 'selling_price.updated_at',
      isactived: 'selling_price.isactived',
      islocked: 'selling_price.islocked',
      createUid: 'selling_price.create_uid',
      updatedUid: 'selling_price.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("selling_price.isactived='0'");
    /*
    multiSearch(
      qb,
      ['selling_price.name', 'selling_price.description'],
      search.search,
    );
     */
    qb.orderBy('selling_price.created_at', 'DESC');
    //qb.addOrderBy('selling_price.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getSellingPriceSearch(search: SellingPriceSearchVo) {
  //   const qb =await getRepository(SellingPrice).createQueryBuilder('selling_price');
  //   qb.leftJoin(User, 'user', 'selling_price.create_uid = user.id');
  //   qb.select( `selling_price.id,
  //     selling_price.name,
  //     selling_price.description,
  //     selling_price.created_at,
  //     selling_price.updated_at,
  //     selling_price.isactived,
  //     selling_price.islocked,
  //     selling_price.create_uid,
  //     selling_price.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'selling_price', 'name', ownerType);
  //     // qb.where("selling_price.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'selling_price.id',
  //       name: 'selling_price.name',
  //       description: 'selling_price.description',
  //             fhname: 'selling_price.fhname', 
  //     company: 'selling_price.company', 
  //     mygroup: 'selling_price.mygroup', 
  //     dscountPolicy: 'selling_price.dscountPolicy', 

  //       createdAt: 'selling_price.created_at',
  //       updatedAt: 'selling_price.updated_at',
  //       isactived: 'selling_price.isactived',
  //       islocked: 'selling_price.islocked',
  //       createUid: 'selling_price.create_uid',
  //       updatedUid: 'selling_price.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['selling_price.name', 'selling_price.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('selling_price.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
