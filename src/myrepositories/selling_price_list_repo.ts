import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { SellingPriceListSearchVo, SellingPriceListVo } from '../myvo/selling_price_list_vo';
import { SellingPriceList } from '../myentities/selling_price_list';

export class SellingPriceListRepo {
  async create(sellingPriceListVo: SellingPriceListVo) {
    return await getRepository(SellingPriceList).insert(sellingPriceListVo);
  }
  async update(Id: string, user_id: string, sellingPriceListVo: SellingPriceListVo) {
    sellingPriceListVo.updatedAt = new Date();
    sellingPriceListVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(SellingPriceList).update(Id, sellingPriceListVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(SellingPriceList).update(Ids[0], {
      isactived: '1',
    });
  }
  async getSellingPriceListsById(id: string) {
    const qb = await getRepository(SellingPriceList).createQueryBuilder(
      'selling_price_list',
    );
    const fields: Record<string, string> = {
      id: 'selling_price_list.id',
      name: 'selling_price_list.name',
      mid: 'selling_price_list.mid', 
      product: 'selling_price_list.product', 
      variant: 'selling_price_list.variant', 
      miniMumQuantity: 'selling_price_list.miniMumQuantity', 
      price: 'selling_price_list.price', 
      startDate: 'selling_price_list.startDate', 
      endDate: 'selling_price_list.endDate', 

      description: 'selling_price_list.description',
      createdAt: 'selling_price_list.created_at',
      updatedAt: 'selling_price_list.updated_at',
      isactived: 'selling_price_list.isactived',
      islocked: 'selling_price_list.islocked',
      createUid: 'selling_price_list.create_uid',
      updatedUid: 'selling_price_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'selling_price_list', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getSellingPriceListAll() {
    const qb = getRepository(SellingPriceList).createQueryBuilder('selling_price_list');
    const fields: Record<string, string> = {
      id: 'selling_price_list.id',
      name: 'selling_price_list.name',
      description: 'selling_price_list.description',
      mid: 'selling_price_list.mid', 
      product: 'selling_price_list.product', 
      variant: 'selling_price_list.variant', 
      miniMumQuantity: 'selling_price_list.miniMumQuantity', 
      price: 'selling_price_list.price', 
      startDate: 'selling_price_list.startDate', 
      endDate: 'selling_price_list.endDate', 

      createdAt: 'selling_price_list.created_at',
      updatedAt: 'selling_price_list.updated_at',
      isactived: 'selling_price_list.isactived',
      islocked: 'selling_price_list.islocked',
      createUid: 'selling_price_list.create_uid',
      updatedUid: 'selling_price_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("selling_price_list.isactived='0'");
    qb.orderBy('selling_price_list.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getSellingPriceListAllView() {
    const qb = await getRepository(SellingPriceList).createQueryBuilder(
      'selling_price_list',
    );
    const fields: Record<string, string> = {
      id: 'selling_price_list.id',
      name: 'selling_price_list.name',
      description: 'selling_price_list.description',
      mid: 'selling_price_list.mid', 
      product: 'selling_price_list.product', 
      variant: 'selling_price_list.variant', 
      miniMumQuantity: 'selling_price_list.miniMumQuantity', 
      price: 'selling_price_list.price', 
      startDate: 'selling_price_list.startDate', 
      endDate: 'selling_price_list.endDate', 

      createdAt: 'selling_price_list.created_at',
      updatedAt: 'selling_price_list.updated_at',
      isactived: 'selling_price_list.isactived',
      islocked: 'selling_price_list.islocked',
      createUid: 'selling_price_list.create_uid',
      updatedUid: 'selling_price_list.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('selling_price_list.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getSellingPriceListList(search: SellingPriceListSearchVo) {
    const qb = await getRepository(SellingPriceList).createQueryBuilder(
      'selling_price_list',
    );
    const fields: Record<string, string> = {
      id: 'selling_price_list.id',
      name: 'selling_price_list.name',
      description: 'selling_price_list.description',
      mid: 'selling_price_list.mid', 
      product: 'selling_price_list.product', 
      variant: 'selling_price_list.variant', 
      miniMumQuantity: 'selling_price_list.miniMumQuantity', 
      price: 'selling_price_list.price', 
      startDate: 'selling_price_list.startDate', 
      endDate: 'selling_price_list.endDate', 

      createdAt: 'selling_price_list.created_at',
      updatedAt: 'selling_price_list.updated_at',
      isactived: 'selling_price_list.isactived',
      islocked: 'selling_price_list.islocked',
      createUid: 'selling_price_list.create_uid',
      updatedUid: 'selling_price_list.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("selling_price_list.isactived='0'");
    /*
    multiSearch(
      qb,
      ['selling_price_list.name', 'selling_price_list.description'],
      search.search,
    );
     */
    qb.orderBy('selling_price_list.created_at', 'DESC');
    //qb.addOrderBy('selling_price_list.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getSellingPriceListSearch(search: SellingPriceListSearchVo) {
  //   const qb =await getRepository(SellingPriceList).createQueryBuilder('selling_price_list');
  //   qb.leftJoin(User, 'user', 'selling_price_list.create_uid = user.id');
  //   qb.select( `selling_price_list.id,
  //     selling_price_list.name,
  //     selling_price_list.description,
  //     selling_price_list.created_at,
  //     selling_price_list.updated_at,
  //     selling_price_list.isactived,
  //     selling_price_list.islocked,
  //     selling_price_list.create_uid,
  //     selling_price_list.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'selling_price_list', 'name', ownerType);
  //     // qb.where("selling_price_list.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'selling_price_list.id',
  //       name: 'selling_price_list.name',
  //       description: 'selling_price_list.description',
  //             mid: 'selling_price_list.mid', 
  //     product: 'selling_price_list.product', 
  //     variant: 'selling_price_list.variant', 
  //     miniMumQuantity: 'selling_price_list.miniMumQuantity', 
  //     price: 'selling_price_list.price', 
  //     startDate: 'selling_price_list.startDate', 
  //     endDate: 'selling_price_list.endDate', 

  //       createdAt: 'selling_price_list.created_at',
  //       updatedAt: 'selling_price_list.updated_at',
  //       isactived: 'selling_price_list.isactived',
  //       islocked: 'selling_price_list.islocked',
  //       createUid: 'selling_price_list.create_uid',
  //       updatedUid: 'selling_price_list.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['selling_price_list.name', 'selling_price_list.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('selling_price_list.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
