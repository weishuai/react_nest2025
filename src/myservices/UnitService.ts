import { UnitRepo } from '../myrepositories';
import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class UnitService {
  private unitRepo = new UnitRepo();
  async findOneUnit(Id: string) {
    ///const issue = new Fhtest();
    return this.unitRepo.getUnitsById(Id);
  }

  async createUnit(unitVo: UnitVo) {
    //unitVo.id = id();
    return this.unitRepo.create(unitVo);
  }

  async updateaUnit(Id: string, user_id: string, unitVo: UnitVo) {
    unitVo.updatedAt = new Date();

    unitVo.updatedUid = user_id;
    return this.unitRepo.update(Id, user_id, unitVo);
  }

  async removeUnit(Ids: string[]) {
    return this.unitRepo.remove(Ids);
  }

  async getUnitById(id: string) {
    return this.unitRepo.getUnitsById(id);
  }

  async getUnit(search: UnitSearchVo) {
    return this.unitRepo.getUnit(search);
  }

  async getUnitAll(search: UnitSearchVo) {
    return this.unitRepo.getUnitAll(search);
  }

  async getUnitAllView() {
    return this.unitRepo.getUnitAllView();
  }
}
