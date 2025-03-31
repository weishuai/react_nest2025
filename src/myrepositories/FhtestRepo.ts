import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import _ from 'lodash';

export class FhtestRepo {
  /*async queryIssues(search: FhtestSearchVo, isProject: number, issueIds: string[] | undefined) {
    const qb = this.createQueryBuilder('project');
    const fields: Record<string, string> = {
      issueId: 'project.id',
      caseId: 'project.caseId',
      description: 'project.description',
      fundType: 'fundCategory.fundType',
      reporter: 'user.userName',
      raisedDate: 'project.createDate',
      status: 'project.status',
      condo: 'condo.name',
      dueDate: 'project.dueDate',
      subject: 'project.subject',
    };
  
    qb.leftJoin(Condo, 'condo', 'project.condoId = condo.id');
    qb.leftJoin(User, 'user', 'project.raisedBy = user.id');
    qb.leftJoin(FundItem, 'fundItem', 'project.fundItemId = fundItem.id');
    qb.leftJoin(FundCategory, 'fundCategory', 'fundItem.fundCategoryId = fundCategory.id');
    qb.leftJoin(LocationItem, 'locationItem', 'project.locationItemId = locationItem.id');
   
    selectFields(qb, fields);
    qb.where('project.isDel = 0');

    andWhereEqual(qb, 'fundCategory', 'fundType', search.fundType);

    setSorts(qb, fields, search.sort);

    const count = await qb.getCount();
    const { skip, take } = skipAndTake(count, search);
    return { count, raws: await qb.offset(skip).limit(take).getRawMany() };
  }

 getVendorProject(vendorId: string) {
    const fields: Record<string, string> = {
      projectId: 'project.id',
      caseId: 'project.caseId',
      description: 'project.description',
      projectStatus: 'project.status',
      poDate: 'project.poDate',
      dueDate: 'project.dueDate',
      condo: 'condo.name',
      amount: 'projectVendor.totalAmount',
      raisedDate: 'project.createDate',
    };
    const qb = this.createQueryBuilder('project');
    selectFields(qb, fields);
    //qb.leftJoin(Condo, 'condo', 'project.condoId = condo.id');
    //qb.innerJoin(ProjectVendor, 'projectVendor', 'project.id = projectVendor.projectId');
    qb.where('project.isDel = 0 and project.status >= 4 and project.status <= 7');
    andWhereEqual(qb, 'projectVendor', 'vendorId', vendorId);
    setSorts(qb, fields, 'raisedDate');
    return qb.getRawMany();
  }*/
}
