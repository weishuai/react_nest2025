import { TbreturnvisitRepo } from '../myrepositories/tbreturnvisit_repo';
import { TbreturnvisitSearchVo, TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
export class TbreturnvisitService {
  private tbreturnvisitRepo = new TbreturnvisitRepo();
  async findOneTbreturnvisit(Id: string) {
    return await this.tbreturnvisitRepo.getTbreturnvisitsById(Id);
  }

  async createTbreturnvisit(tbreturnvisitVo: TbreturnvisitVo) {
    return await this.tbreturnvisitRepo.create(tbreturnvisitVo);
  }

  async updateaTbreturnvisit(
    Id: string,
    user_id: string,
    tbreturnvisitVo: TbreturnvisitVo,
  ) {
    return await this.tbreturnvisitRepo.update(Id, user_id, tbreturnvisitVo);
  }

  async removeTbreturnvisit(Ids: string) {
    console.log(Ids);
    return await this.tbreturnvisitRepo.remove([Ids]);
  }

  async getTbreturnvisitById(id: string) {
    return await this.tbreturnvisitRepo.getTbreturnvisitsById(id);
  }

  async getTbreturnvisitList(search: TbreturnvisitSearchVo) {
    return await this.tbreturnvisitRepo.getTbreturnvisitList(search);
  }

  async getTbreturnvisitAll() {
    return await this.tbreturnvisitRepo.getTbreturnvisitAll();
  }

  async getTbreturnvisitAllView() {
    return await this.tbreturnvisitRepo.getTbreturnvisitAllView();
  }
  // async getTbreturnvisitSearch(search: TbreturnvisitSearchVo) {
  //   return await this.tbreturnvisitRepo.getTbreturnvisitSearch(search);
  // }
}
