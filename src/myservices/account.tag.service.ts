import { AccountTagRepo } from '../myrepositories/account.tag.repo';
import { AccountTagSearchVo, AccountTagVo } from '../myvo/account.tgvo';
export class AccountTagService {
  private accountTagRepo = new AccountTagRepo();
  async findOneAccountTag(Id: string) {
    return await this.accountTagRepo.getAccountTagsById(Id);
  }

  async createAccountTag(accountTagVo: AccountTagVo) {
    ///accountTagVo.id = id();
    return await this.accountTagRepo.create(accountTagVo);
  }

  async updateaAccountTag(
    Id: string,
    user_id: string,
    accountTagVo: AccountTagVo,
  ) {
    return await this.accountTagRepo.update(Id, user_id, accountTagVo);
  }

  async removeAccountTag(Ids: string) {
    console.log(Ids);
    return await this.accountTagRepo.remove([Ids]);
  }

  async getAccountTagById(id: string) {
    return await this.accountTagRepo.getAccountTagsById(id);
  }

  async getAccountTagList(search: AccountTagSearchVo) {
    return await this.accountTagRepo.getAccountTagList(search);
  }
  /*
  async getAccountTagList() {
    return await this.accountTagRepo.getAccountTagList();
  }
 */
  async getAccountTagAll(search: AccountTagSearchVo) {
    return await this.accountTagRepo.getAccountTagAll(search);
  }

  async getAccountTagAllView() {
    return await this.accountTagRepo.getAccountTagAllView();
  }
}
