import { FhtestRepo } from '../myrepositories/fhtest_repo';
import { FhtestSearchVo, FhtestVo } from '../myvo/fhtest_vo';
export class FhtestService {
  private fhtestRepo = new FhtestRepo();
  async findOneFhtest(Id: string) {
    return await this.fhtestRepo.getFhtestsById(Id);
  }

  async createFhtest(fhtestVo: FhtestVo) {
    return await this.fhtestRepo.create(fhtestVo);
  }

  async updateaFhtest(
    Id: string,
    user_id: string,
    fhtestVo: FhtestVo,
  ) {
    return await this.fhtestRepo.update(Id, user_id, fhtestVo);
  }

  async removeFhtest(Ids: string) {
    console.log(Ids);
    return await this.fhtestRepo.remove([Ids]);
  }

  async getFhtestById(id: string) {
    return await this.fhtestRepo.getFhtestsById(id);
  }

  async getFhtestList(search: FhtestSearchVo) {
    return await this.fhtestRepo.getFhtestList(search);
  }

  async getFhtestAll() {
    return await this.fhtestRepo.getFhtestAll();
  }

  async getFhtestAllView() {
    return await this.fhtestRepo.getFhtestAllView();
  }
  // async getFhtestSearch(search: FhtestSearchVo) {
  //   return await this.fhtestRepo.getFhtestSearch(search);
  // }
}
