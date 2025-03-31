import { skipAndTake } from '../myutils/pagination';
import { getRepository } from 'typeorm';
import {
  andWhereEqual,
  multiSearch,
  selectFields,
  setSorts,
} from '../myutils/my.utils';
import { Attachment } from '../myentities/Attachment';
import { AttachmentVo } from '../myvo/AttachmentVo';
import { User } from '../myentities/User';

export class AttachmentRepo {
  async create(accountTagVo: AttachmentVo) {
    return await getRepository(Attachment).insert(accountTagVo);
  }
  async update(Id: string, user_id: string, accountTagVo: AttachmentVo) {
    ///accountTagVo.updatedAt = new Date();
    // accountTagVo.updatedUid = user_id;
    ///console.log(Id);
    return await getRepository(Attachment).update(Id, accountTagVo);
  }
  /*
  async removeAttachment(Ids: string[]) {
    console.log(Ids);
    return await getRepository(Attachment).update(Ids[0], {
      isactived: '1',
    });
  }
*/

  async updateAttachmentByMid(mid: string, id: string) {
    const listItems = this.getAttachmentAllByMid(mid);
    (await listItems).map((Item) => {
      ///this.api(API.crmwf.Client.removeClient).pathParam({ Id: id }).call();
      getRepository(Attachment).update(Item.id, { mid: id });
    });
    return 'ok';
  }

  async getAttachmentAllByMid(mid: string) {
    const qb = getRepository(Attachment).createQueryBuilder('attachment');
    const fields: Record<string, string> = {
      id: 'attachment.id',
    };
    selectFields(qb, fields);
    //qb.where('1=1');
    andWhereEqual(qb, 'attachment', 'mid', mid);
    const res = await qb.getRawMany();
    return res;
  }

  async getAttachments(ownerId: string, ownerType: number) {
    const qb = getRepository(Attachment).createQueryBuilder('attachment');
    qb.leftJoin(User, 'user', 'attachment.uploadUserId = user.id');
    qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
    const conditions: Record<string, string> = {};
    conditions['ownerId'] = ownerId;
    qb.where(
      'attachment.isDel = 0 and attachment.ownerId = :ownerId',
      conditions,
    );
    andWhereEqual(qb, 'attachment', 'ownerType', ownerType);
    return qb.getRawMany();
  }

  addAttachment(attachment: Attachment) {
    ///attachment.id = id();
    attachment.dateUploaded = new Date();
    attachment.isDel = 0;
    return getRepository(Attachment).insert(attachment);
  }

  async removeAttachment(id: string) {
    return getRepository(Attachment).update(id, { isDel: 1 });
  }

  async removeAttachments(ids: string[]) {
    return getRepository(Attachment).update(ids, { isDel: 1 });
  }

  async getAttachmentsByUserId(
    ownerId: string,
    ownerType: number,
    uploadUserId: string,
  ) {
    const qb = getRepository(Attachment).createQueryBuilder('attachment');
    qb.leftJoin(User, 'user', 'attachment.uploadUserId = user.id');
    qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
    const conditions: Record<string, string> = {};
    conditions['ownerId'] = ownerId;
    conditions['uploadUserId'] = uploadUserId;
    qb.where(
      'attachment.isDel = 0 and attachment.ownerId = :ownerId and attachment.uploadUserId = :uploadUserId ',
      conditions,
    );
    andWhereEqual(qb, 'attachment', 'ownerType', ownerType);
    return qb.getRawMany();
  }

  async getVendorAttachments(names: string[], ownerType: number) {
    const qb = getRepository(Attachment).createQueryBuilder('attachment');
    qb.leftJoin(User, 'user', 'attachment.uploadUserId = user.id');
    qb.select(`attachment.id, 
               attachment.dateUploaded as dateUploaded,
               attachment.name,
               attachment.url,
               attachment.mimetype,
               attachment.size,
               attachment.when,
               user.userName as uploadUserName`);
    qb.where('attachment.isDel = 0 ');
    andWhereEqual(qb, 'attachment', 'ownerType', ownerType);
    ///andWhereIn(qb, 'attachment', 'name', names);
    return qb.getRawMany();
  }

  async getAttachment(when: string, mid: string) {
    return getRepository(Attachment).findOneBy({when,mid,isDel: 0,});
    
  }
}
