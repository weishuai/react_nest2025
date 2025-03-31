import { Fhtest } from '../myentities';
import { FhtestRepo } from '../myrepositories';
import { FhtestAddVo } from '../myvo/FhtestVo';

export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class FhtestService {
  private fhtestRepo = new FhtestRepo();

  async findOneFhtest(Id: string) {
    ///const issue = new Fhtest();
    //return this.fhtestRepo.findOne(Id);
  }

  async createFhtest(fhtestVo: FhtestAddVo) {
    const issue = new Fhtest();
    ///issue.id = id();
    ///issue.fhname = fhtestVo.fhname;
    ///return this.fhtestRepo.create(issue);
  }

  async updateFhtest(Id: string, fhtestVo: FhtestAddVo) {
    const issue = new Fhtest();
    issue.id = fhtestVo.id;
    issue.fhname = fhtestVo.fhname;
    //return this.fhtestRepo.update(Id, issue);
  }

  async removeFhtest(Ids: string[]) {
    ///return this.fhtestRepo.delete(Ids);
  }
}
