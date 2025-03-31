import { myWorkRepo } from '../myrepositories/mywork_repo';
import { myWorkSearchVo, myWorkVo } from '../myvo/mywork_vo';
export class myWorkService {
  private myworkRepo = new myWorkRepo();
  async findOnemyWork(Id: string) {
    return await this.myworkRepo.getmyWorksById(Id);
  }

  async createmyWork(myworkVo: myWorkVo) {
    return await this.myworkRepo.create(myworkVo);
  }

  async updateamyWork(
    Id: string,
    user_id: string,
    myworkVo: myWorkVo,
  ) {
    return await this.myworkRepo.update(Id, user_id, myworkVo);
  }

  async removemyWork(Ids: string) {
    console.log(Ids);
    return await this.myworkRepo.remove([Ids]);
  }

  async getmyWorkById(id: string) {
    return await this.myworkRepo.getmyWorksById(id);
  }

  async getmyWorkList(search: myWorkSearchVo) {
    return await this.myworkRepo.getmyWorkList(search);
  }

  async getmyWorkAll() {
    return await this.myworkRepo.getmyWorkAll();
  }

  async getmyWorkAllView() {
    return await this.myworkRepo.getmyWorkAllView();
  }
}
