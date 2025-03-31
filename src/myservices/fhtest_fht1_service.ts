import { FhtestFht1Repo } from '../myrepositories/fhtest_fht1_repo';
import { FhtestFht1SearchVo, FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
export class FhtestFht1Service {
  private fhtestFht1Repo = new FhtestFht1Repo();
  async findOneFhtestFht1(Id: string) {
    return await this.fhtestFht1Repo.getFhtestFht1sById(Id);
  }

  async createFhtestFht1(fhtestFht1Vo: FhtestFht1Vo) {
    return await this.fhtestFht1Repo.create(fhtestFht1Vo);
  }

  async updateaFhtestFht1(
    Id: string,
    user_id: string,
    fhtestFht1Vo: FhtestFht1Vo,
  ) {
    return await this.fhtestFht1Repo.update(Id, user_id, fhtestFht1Vo);
  }

  async removeFhtestFht1(Ids: string) {
    console.log(Ids);
    return await this.fhtestFht1Repo.remove([Ids]);
  }

  async getFhtestFht1ById(id: string) {
    return await this.fhtestFht1Repo.getFhtestFht1sById(id);
  }

  async getFhtestFht1List(search: FhtestFht1SearchVo) {
    return await this.fhtestFht1Repo.getFhtestFht1List(search);
  }

  async getFhtestFht1All() {
    return await this.fhtestFht1Repo.getFhtestFht1All();
  }

  async getFhtestFht1AllView() {
    return await this.fhtestFht1Repo.getFhtestFht1AllView();
  }
  // async getFhtestFht1Search(search: FhtestFht1SearchVo) {
  //   return await this.fhtestFht1Repo.getFhtestFht1Search(search);
  // }
}
