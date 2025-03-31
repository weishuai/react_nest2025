import { FHcrmTable1Repo } from '../myrepositories/fhcrm_table1_repo';
import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
export class FHcrmTable1Service {
  private fhcrmTable1Repo = new FHcrmTable1Repo();
  async findOneFHcrmTable1(Id: string) {
    return await this.fhcrmTable1Repo.getFHcrmTable1sById(Id);
  }

  async createFHcrmTable1(fhcrmTable1Vo: FHcrmTable1Vo) {
    return await this.fhcrmTable1Repo.create(fhcrmTable1Vo);
  }

  async updateaFHcrmTable1(
    Id: string,
    user_id: string,
    fhcrmTable1Vo: FHcrmTable1Vo,
  ) {
    return await this.fhcrmTable1Repo.update(Id, user_id, fhcrmTable1Vo);
  }

  async removeFHcrmTable1(Ids: string) {
    console.log(Ids);
    return await this.fhcrmTable1Repo.remove([Ids]);
  }

  async getFHcrmTable1ById(id: string) {
    return await this.fhcrmTable1Repo.getFHcrmTable1sById(id);
  }

  async getFHcrmTable1List(search: FHcrmTable1SearchVo) {
    return await this.fhcrmTable1Repo.getFHcrmTable1List(search);
  }

  async getFHcrmTable1All(search: FHcrmTable1SearchVo) {
    return await this.fhcrmTable1Repo.getFHcrmTable1All(search);
  }

  async getFHcrmTable1AllView() {
    return await this.fhcrmTable1Repo.getFHcrmTable1AllView();
  }
}
