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
  QuotationItemSearchVo,
  QuotationItemVo,
} from '../myvo/QuotationItemVo';
import { QuotationItem } from '../myentities';

export class QuotationItemRepo {
  async create(accountTagVo: QuotationItemVo) {
    return await getRepository(QuotationItem).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: QuotationItemVo) {
    accountTagVo.updatedAt = new Date();
    accountTagVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(QuotationItem).update(Id, accountTagVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(QuotationItem).update(Ids[0], {
      isactived: '1',
    });
  }

  async updateQuotationItemsVoByMid(mid: string, id: string) {
    const listItems = this.getQuotationItemsAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(QuotationItem).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getQuotationItemsAllByMid(mid: string) {
    const qb =
      getRepository(QuotationItem).createQueryBuilder('quotation_item');
    const fields: Record<string, string> = {
      id: 'quotation_item.id',
      mid: 'quotation_item.mid',
      discountType: 'quotation_item.discount_type',
      productname: 'quotation_item.productname',
      discount: 'quotation_item.discount',
      name: 'quotation_item.name',
      photo: 'quotation_item.photo',
      percentage: 'quotation_item.percentage',
      directPrice: 'quotation_item.direct_price',
      reduction: 'quotation_item.reduction',
      description: 'quotation_item.description',
      qty: 'quotation_item.qty',
      unit: 'quotation_item.unit',
      unitPrice: 'quotation_item.unit_price',
      unitCost: 'quotation_item.unit_cost',
      remark: 'quotation_item.remark',
      createdAt: 'quotation_item.created_at',
      updatedAt: 'quotation_item.updated_at',
      isactived: 'quotation_item.isactived',
      islocked: 'quotation_item.islocked',
      createUid: 'quotation_item.create_uid',
      updatedUid: 'quotation_item.updated_uid',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'quotation_item', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  // Add your code herer
  async getQuotationItemsById(id: string) {
    const qb =
      getRepository(QuotationItem).createQueryBuilder('quotation_item');
    const fields: Record<string, string> = {
      id: 'quotation_item.id',
      mid: 'quotation_item.mid',
      discountType: 'quotation_item.discount_type',
      productname: 'quotation_item.productname',
      discount: 'quotation_item.discount',
      name: 'quotation_item.name',
      photo: 'quotation_item.photo',
      percentage: 'quotation_item.percentage',
      directPrice: 'quotation_item.direct_price',
      reduction: 'quotation_item.reduction',
      description: 'quotation_item.description',
      qty: 'quotation_item.qty',
      unit: 'quotation_item.unit',
      unitPrice: 'quotation_item.unit_price',
      unitCost: 'quotation_item.unit_cost',
      remark: 'quotation_item.remark',
      createdAt: 'quotation_item.created_at',
      updatedAt: 'quotation_item.updated_at',
      isactived: 'quotation_item.isactived',
      islocked: 'quotation_item.islocked',
      createUid: 'quotation_item.create_uid',
      updatedUid: 'quotation_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'quotation_item', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getQuotationItemAll(search: QuotationItemSearchVo) {
    const qb =
      getRepository(QuotationItem).createQueryBuilder('quotation_item');
    const fields: Record<string, string> = {
      id: 'quotation_item.id',
      mid: 'quotation_item.mid',
      discountType: 'quotation_item.discount_type',
      productname: 'quotation_item.productname',
      discount: 'quotation_item.discount',
      name: 'quotation_item.name',
      photo: 'quotation_item.photo',
      percentage: 'quotation_item.percentage',
      directPrice: 'quotation_item.direct_price',
      reduction: 'quotation_item.reduction',
      description: 'quotation_item.description',
      qty: 'quotation_item.qty',
      unit: 'quotation_item.unit',
      unitPrice: 'quotation_item.unit_price',
      unitCost: 'quotation_item.unit_cost',
      remark: 'quotation_item.remark',
      createdAt: 'quotation_item.created_at',
      updatedAt: 'quotation_item.updated_at',
      isactived: 'quotation_item.isactived',
      islocked: 'quotation_item.islocked',
      createUid: 'quotation_item.create_uid',
      updatedUid: 'quotation_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where("quotation_item.isactived='0'");
    multiSearch(
      qb,
      ['quotation_item.name', 'quotation_item.description'],
      search.search,
    );
    qb.orderBy('quotation_item.created_at', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return {'raws':raws,'count':count};
  }

  async getQuotationItemAllView() {
    const qb =
      getRepository(QuotationItem).createQueryBuilder('quotation_item');
    const fields: Record<string, string> = {
      id: 'quotation_item.id',
      mid: 'quotation_item.mid',
      discountType: 'quotation_item.discount_type',
      productname: 'quotation_item.productname',
      discount: 'quotation_item.discount',
      name: 'quotation_item.name',
      photo: 'quotation_item.photo',
      percentage: 'quotation_item.percentage',
      directPrice: 'quotation_item.direct_price',
      reduction: 'quotation_item.reduction',
      description: 'quotation_item.description',
      qty: 'quotation_item.qty',
      unit: 'quotation_item.unit',
      unitPrice: 'quotation_item.unit_price',
      unitCost: 'quotation_item.unit_cost',
      remark: 'quotation_item.remark',
      createdAt: 'quotation_item.created_at',
      updatedAt: 'quotation_item.updated_at',
      isactived: 'quotation_item.isactived',
      islocked: 'quotation_item.islocked',
      createUid: 'quotation_item.create_uid',
      updatedUid: 'quotation_item.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');

    const res = await qb.getRawMany();
    return res;
  }

  async getQuotationItem(search: QuotationItemSearchVo) {
    const qb =
      getRepository(QuotationItem).createQueryBuilder('quotation_item');
    const fields: Record<string, string> = {
      id: 'quotation_item.id',
      mid: 'quotation_item.mid',
      discountType: 'quotation_item.discount_type',
      productname: 'quotation_item.productname',
      discount: 'quotation_item.discount',
      name: 'quotation_item.name',
      photo: 'quotation_item.photo',
      percentage: 'quotation_item.percentage',
      directPrice: 'quotation_item.direct_price',
      reduction: 'quotation_item.reduction',
      description: 'quotation_item.description',
      qty: 'quotation_item.qty',
      unit: 'quotation_item.unit',
      unitPrice: 'quotation_item.unit_price',
      unitCost: 'quotation_item.unit_cost',
      remark: 'quotation_item.remark',
      createdAt: 'quotation_item.created_at',
      updatedAt: 'quotation_item.updated_at',
      isactived: 'quotation_item.isactived',
      islocked: 'quotation_item.islocked',
      createUid: 'quotation_item.create_uid',
      updatedUid: 'quotation_item.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("quotation_item.isactived='0'");
    andWhereEqual(qb, 'quotation_item', 'name', search.fundType);

    if (!_.isNil(search.mid)) {
      andWhereEqual(qb, 'quotation_item', 'mid', search.mid);
    }

    multiSearch(
      qb,
      ['quotation_item.name', 'quotation_item.description'],
      search.search,
    );
    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();

    const res = raws;

    return res;
  }

  async getQuotationItemByid(name: string) {
    return getRepository(QuotationItem).findOneBy({
      name,
    });
  }
}
