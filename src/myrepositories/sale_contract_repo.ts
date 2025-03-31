import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { SaleContractSearchVo, SaleContractVo } from '../myvo/sale_contract_vo';
import { SaleContract } from '../myentities/sale_contract';

export class SaleContractRepo {
  async create(saleContractVo: SaleContractVo) {
    return await getRepository(SaleContract).insert(saleContractVo);
  }
  async update(Id: string, user_id: string, saleContractVo: SaleContractVo) {
    saleContractVo.updatedAt = new Date();
    saleContractVo.updatedUid = user_id;
    console.log(Id);
    return await getRepository(SaleContract).update(Id, saleContractVo);
  }
  async remove(Ids: string[]) {
    console.log(Ids);
    return await getRepository(SaleContract).update(Ids[0], {
      isactived: '1',
    });
  }
  async getSaleContractsById(id: string) {
    const qb = await getRepository(SaleContract).createQueryBuilder(
      'sale_contract',
    );
    const fields: Record<string, string> = {
      id: 'sale_contract.id',
      name: 'sale_contract.name',
      fhname: 'sale_contract.fhname', 
      releaseTime: 'sale_contract.releaseTime', 
      project: 'sale_contract.project', 
      version: 'sale_contract.version', 
      custom: 'sale_contract.custom', 
      expectedCompletion: 'sale_contract.expectedCompletion', 
      productionCompleted: 'sale_contract.productionCompleted', 
      deliveryCompleted: 'sale_contract.deliveryCompleted', 
      estimatedTime: 'sale_contract.estimatedTime', 
      contractAmount: 'sale_contract.contractAmount', 
      invoicingAmount: 'sale_contract.invoicingAmount', 
      collectionAmount: 'sale_contract.collectionAmount', 
      completionProgress: 'sale_contract.completionProgress', 
      specialRequirements: 'sale_contract.specialRequirements', 

      description: 'sale_contract.description',
      createdAt: 'sale_contract.created_at',
      updatedAt: 'sale_contract.updated_at',
      isactived: 'sale_contract.isactived',
      islocked: 'sale_contract.islocked',
      createUid: 'sale_contract.create_uid',
      updatedUid: 'sale_contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    andWhereEqual(qb, 'sale_contract', 'id', id);
    const res = await qb.getRawOne();
    return res;
  }

  async getSaleContractAll() {
    const qb = getRepository(SaleContract).createQueryBuilder('sale_contract');
    const fields: Record<string, string> = {
      id: 'sale_contract.id',
      name: 'sale_contract.name',
      description: 'sale_contract.description',
      fhname: 'sale_contract.fhname', 
      releaseTime: 'sale_contract.releaseTime', 
      project: 'sale_contract.project', 
      version: 'sale_contract.version', 
      custom: 'sale_contract.custom', 
      expectedCompletion: 'sale_contract.expectedCompletion', 
      productionCompleted: 'sale_contract.productionCompleted', 
      deliveryCompleted: 'sale_contract.deliveryCompleted', 
      estimatedTime: 'sale_contract.estimatedTime', 
      contractAmount: 'sale_contract.contractAmount', 
      invoicingAmount: 'sale_contract.invoicingAmount', 
      collectionAmount: 'sale_contract.collectionAmount', 
      completionProgress: 'sale_contract.completionProgress', 
      specialRequirements: 'sale_contract.specialRequirements', 

      createdAt: 'sale_contract.created_at',
      updatedAt: 'sale_contract.updated_at',
      isactived: 'sale_contract.isactived',
      islocked: 'sale_contract.islocked',
      createUid: 'sale_contract.create_uid',
      updatedUid: 'sale_contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("sale_contract.isactived='0'");
    qb.orderBy('sale_contract.created_at', 'DESC');
    return qb.getRawMany();
  }

  async getSaleContractAllView() {
    const qb = await getRepository(SaleContract).createQueryBuilder(
      'sale_contract',
    );
    const fields: Record<string, string> = {
      id: 'sale_contract.id',
      name: 'sale_contract.name',
      description: 'sale_contract.description',
      fhname: 'sale_contract.fhname', 
      releaseTime: 'sale_contract.releaseTime', 
      project: 'sale_contract.project', 
      version: 'sale_contract.version', 
      custom: 'sale_contract.custom', 
      expectedCompletion: 'sale_contract.expectedCompletion', 
      productionCompleted: 'sale_contract.productionCompleted', 
      deliveryCompleted: 'sale_contract.deliveryCompleted', 
      estimatedTime: 'sale_contract.estimatedTime', 
      contractAmount: 'sale_contract.contractAmount', 
      invoicingAmount: 'sale_contract.invoicingAmount', 
      collectionAmount: 'sale_contract.collectionAmount', 
      completionProgress: 'sale_contract.completionProgress', 
      specialRequirements: 'sale_contract.specialRequirements', 

      createdAt: 'sale_contract.created_at',
      updatedAt: 'sale_contract.updated_at',
      isactived: 'sale_contract.isactived',
      islocked: 'sale_contract.islocked',
      createUid: 'sale_contract.create_uid',
      updatedUid: 'sale_contract.updated_uid',
    };
    selectFields(qb, fields);
    qb.where('1=1');
    qb.orderBy('sale_contract.created_at', 'DESC');
    const res = await qb.getRawMany();
    return res;
  }

  async getSaleContractList(search: SaleContractSearchVo) {
    const qb = await getRepository(SaleContract).createQueryBuilder(
      'sale_contract',
    );
    const fields: Record<string, string> = {
      id: 'sale_contract.id',
      name: 'sale_contract.name',
      description: 'sale_contract.description',
      fhname: 'sale_contract.fhname', 
      releaseTime: 'sale_contract.releaseTime', 
      project: 'sale_contract.project', 
      version: 'sale_contract.version', 
      custom: 'sale_contract.custom', 
      expectedCompletion: 'sale_contract.expectedCompletion', 
      productionCompleted: 'sale_contract.productionCompleted', 
      deliveryCompleted: 'sale_contract.deliveryCompleted', 
      estimatedTime: 'sale_contract.estimatedTime', 
      contractAmount: 'sale_contract.contractAmount', 
      invoicingAmount: 'sale_contract.invoicingAmount', 
      collectionAmount: 'sale_contract.collectionAmount', 
      completionProgress: 'sale_contract.completionProgress', 
      specialRequirements: 'sale_contract.specialRequirements', 

      createdAt: 'sale_contract.created_at',
      updatedAt: 'sale_contract.updated_at',
      isactived: 'sale_contract.isactived',
      islocked: 'sale_contract.islocked',
      createUid: 'sale_contract.create_uid',
      updatedUid: 'sale_contract.updated_uid',
    };

    selectFields(qb, fields);
    qb.where("sale_contract.isactived='0'");
    /*
    multiSearch(
      qb,
      ['sale_contract.name', 'sale_contract.description'],
      search.search,
    );
     */
    qb.orderBy('sale_contract.created_at', 'DESC');
    //qb.addOrderBy('sale_contract.name', 'DESC');
    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    const raws = await qb.offset(skip).limit(take).getRawMany();
    return raws;
  }

  // async getSaleContractSearch(search: SaleContractSearchVo) {
  //   const qb =await getRepository(SaleContract).createQueryBuilder('sale_contract');
  //   qb.leftJoin(User, 'user', 'sale_contract.create_uid = user.id');
  //   qb.select( `sale_contract.id,
  //     sale_contract.name,
  //     sale_contract.description,
  //     sale_contract.created_at,
  //     sale_contract.updated_at,
  //     sale_contract.isactived,
  //     sale_contract.islocked,
  //     sale_contract.create_uid,
  //     sale_contract.updated_uid,
  //     user.user_name as userName`);
  //     // andWhereEqual(qb, 'sale_contract', 'name', ownerType);
  //     // qb.where("sale_contract.isactived='0'");
  //     const fields: Record<string, string> = {
  //       id: 'sale_contract.id',
  //       name: 'sale_contract.name',
  //       description: 'sale_contract.description',
  //             fhname: 'sale_contract.fhname', 
  //     releaseTime: 'sale_contract.releaseTime', 
  //     project: 'sale_contract.project', 
  //     version: 'sale_contract.version', 
  //     custom: 'sale_contract.custom', 
  //     expectedCompletion: 'sale_contract.expectedCompletion', 
  //     productionCompleted: 'sale_contract.productionCompleted', 
  //     deliveryCompleted: 'sale_contract.deliveryCompleted', 
  //     estimatedTime: 'sale_contract.estimatedTime', 
  //     contractAmount: 'sale_contract.contractAmount', 
  //     invoicingAmount: 'sale_contract.invoicingAmount', 
  //     collectionAmount: 'sale_contract.collectionAmount', 
  //     completionProgress: 'sale_contract.completionProgress', 
  //     specialRequirements: 'sale_contract.specialRequirements', 

  //       createdAt: 'sale_contract.created_at',
  //       updatedAt: 'sale_contract.updated_at',
  //       isactived: 'sale_contract.isactived',
  //       islocked: 'sale_contract.islocked',
  //       createUid: 'sale_contract.create_uid',
  //       updatedUid: 'sale_contract.updated_uid',
  //       activityName: 'user.user_name',
  //     };
  
  //     selectFields(qb, fields);

  //     multiSearch(
  //       qb,
  //       ['sale_contract.name', 'sale_contract.description'],
  //       search.search,
  //     );  
  //     qb.orderBy('sale_contract.created_at', 'DESC');
  //     const count = await qb.getCount();
  //     const { skip, take } = skipAndTake(count, search);
  //     const raws = await qb.offset(skip).limit(take).getRawMany();
  //     return {'raws':raws,'count':count};
  // }



}
