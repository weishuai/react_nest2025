import { StaffListRepo } from '../myrepositories';
import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class StaffListService {
  private staffListRepo = new StaffListRepo();
  async findOneStaffList(Id: string) {
    ///const issue = new Fhtest();
    return this.staffListRepo.getStaffListsById(Id);
  }

  async createStaffList(staffListVo: StaffListVo) {
    /*
    const lstaffListVo = new StaffList();
    lstaffListVo.id = id();
    lstaffListVo.type = staffListVo.type.join(',');
*/
    ///staffListVo.id = id();
    return this.staffListRepo.create(staffListVo);
  }

  async updateaStaffList(
    Id: string,
    user_id: string,
    staffListVo: StaffListVo,
  ) {
    /*
    const lstaffListVo = new StaffList();
    lstaffListVo.type = staffListVo.type.join(',');

    lstaffListVo.updatedAt = new Date();
    lstaffListVo.updatedUid = user_id;
*/
    staffListVo.updatedAt = new Date();
    staffListVo.updatedUid = user_id;
    return this.staffListRepo.update(Id, user_id, staffListVo);
  }

  async removeStaffList(Ids: string[]) {
    return this.staffListRepo.remove(Ids);
  }

  async getStaffListById(id: string) {
    return this.staffListRepo.getStaffListsById(id);
  }

  async getStaffList(search: StaffListSearchVo) {
    return this.staffListRepo.getStaffList(search);
  }

  async getStaffListAll(search: StaffListSearchVo) {
    return this.staffListRepo.getStaffListAll(search);
  }

  async getStaffListAllView() {
    return this.staffListRepo.getStaffListAllView();
  }
}
