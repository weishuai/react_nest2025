import { ContacPersonRepo } from '../myrepositories';
import { ContacPersonSearchVo, ContacPersonVo } from '../myvo/ContacPersonVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ContacPersonService {
  private contacPersonRepo = new ContacPersonRepo();

  async findOneContacPerson(Id: string) {
    ///const issue = new Fhtest();
    return this.contacPersonRepo.getContacPersonById(Id);
  }

  async createContacPerson(contacPersonVo: ContacPersonVo) {
    return this.contacPersonRepo.create(contacPersonVo);
  }

  async updateaContacPerson(
    Id: string,
    user_id: string,
    contacPersonVo: ContacPersonVo,
  ) {
    contacPersonVo.updatedAt = new Date();

    contacPersonVo.updatedUid = user_id;
    return this.contacPersonRepo.update(Id, user_id, contacPersonVo);
  }

  async removeContacPerson(Ids: string[]) {
    return this.contacPersonRepo.remove(Ids);
  }

  ///预警事件
  /*
  async isAlertContacPerson() {
    const listItems = await this.contacPersonRepo.getContacPersonAllBydueDate();
    listItems.map((item) => {
      const FHdatime = new Date();
      const date3 = item.dateBirth.getTime() - FHdatime.getTime();
      const days = Math.floor(date3 / (24 * 3600 * 1000));
      if (days < 5) {
        this.contacPersonRepo.update(item.id, { isAlert: 'Warning' });
      }
    });
  }
  */

  async getContacPersonById(id: string) {
    return this.contacPersonRepo.getContacPersonById(id);
  }

  async getContacPerson(userId: string, search: ContacPersonSearchVo) {
    return this.contacPersonRepo.getContacPerson(userId, search);
  }

  async getContacPersonAll(search: ContacPersonSearchVo) {
    return this.contacPersonRepo.getContacPersonAll(search);
  }

  async getContacPersonAllView() {
    return this.contacPersonRepo.getContacPersonAllView();
  }
}
