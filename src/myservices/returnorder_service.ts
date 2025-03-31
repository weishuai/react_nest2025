import { ReturnorderRepo } from '../myrepositories/returnorder_repo';
import { ReturnorderSearchVo, ReturnorderVo } from '../myvo/returnorder_vo';
export class ReturnorderService {
  private returnorderRepo = new ReturnorderRepo();
  async findOneReturnorder(Id: string) {
    return await this.returnorderRepo.getReturnordersById(Id);
  }

  async createReturnorder(returnorderVo: ReturnorderVo) {
    return await this.returnorderRepo.create(returnorderVo);
  }

  async updateaReturnorder(
    Id: string,
    user_id: string,
    returnorderVo: ReturnorderVo,
  ) {
    return await this.returnorderRepo.update(Id, user_id, returnorderVo);
  }

  async removeReturnorder(Ids: string) {
    console.log(Ids);
    return await this.returnorderRepo.remove([Ids]);
  }

  async getReturnorderById(id: string) {
    return await this.returnorderRepo.getReturnordersById(id);
  }

  async getReturnorderList(search: ReturnorderSearchVo) {
    return await this.returnorderRepo.getReturnorderList(search);
  }

  async getReturnorderAll() {
    return await this.returnorderRepo.getReturnorderAll();
  }

  async getReturnorderAllView() {
    return await this.returnorderRepo.getReturnorderAllView();
  }
  // async getReturnorderSearch(search: ReturnorderSearchVo) {
  //   return await this.returnorderRepo.getReturnorderSearch(search);
  // }
}
