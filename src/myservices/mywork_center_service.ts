import { myWorkCenterRepo } from '../myrepositories/mywork_center_repo';
import { myWorkCenterSearchVo, myWorkCenterVo } from '../myvo/mywork_center_vo';
export class myWorkCenterService {
  private myworkCenterRepo = new myWorkCenterRepo();
  async findOnemyWorkCenter(Id: string) {
    return await this.myworkCenterRepo.getmyWorkCentersById(Id);
  }

  async createmyWorkCenter(myworkCenterVo: myWorkCenterVo) {
    return await this.myworkCenterRepo.create(myworkCenterVo);
  }

  async updateamyWorkCenter(
    Id: string,
    user_id: string,
    myworkCenterVo: myWorkCenterVo,
  ) {
    return await this.myworkCenterRepo.update(Id, user_id, myworkCenterVo);
  }

  async removemyWorkCenter(Ids: string) {
    console.log(Ids);
    return await this.myworkCenterRepo.remove([Ids]);
  }

  async getmyWorkCenterById(id: string) {
    return await this.myworkCenterRepo.getmyWorkCentersById(id);
  }

  async getmyWorkCenterList(search: myWorkCenterSearchVo) {
    return await this.myworkCenterRepo.getmyWorkCenterList(search);
  }

  async getmyWorkCenterAll() {
    return await this.myworkCenterRepo.getmyWorkCenterAll();
  }

  async getmyWorkCenterAllView() {
    return await this.myworkCenterRepo.getmyWorkCenterAllView();
  }
}
