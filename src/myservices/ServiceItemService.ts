import { ServiceItemRepo } from '../myrepositories';
import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ServiceItemService {
  private serviceItemRepo = new ServiceItemRepo();

  async findOneServiceItem(Id: string) {
    ///const issue = new Fhtest();
    return this.serviceItemRepo.getServiceItemsById(Id);
  }

  async createServiceItem(serviceItemVo: ServiceItemVo) {
    //serviceItemVo.id = id();
    return this.serviceItemRepo.create(serviceItemVo);
  }

  async updateaServiceItem(
    Id: string,
    user_id: string,
    serviceItemVo: ServiceItemVo,
  ) {
    serviceItemVo.updatedAt = new Date();

    serviceItemVo.updatedUid = user_id;
    return this.serviceItemRepo.update(Id, user_id, serviceItemVo);
  }

  async removeServiceItem(Ids: string[]) {
    return this.serviceItemRepo.remove(Ids);
  }

  async getServiceItemById(id: string) {
    return this.serviceItemRepo.getServiceItemsById(id);
  }

  async getServiceItem(search: ServiceItemSearchVo) {
    return this.serviceItemRepo.getServiceItem(search);
  }

  async getServiceItemAll(search: ServiceItemSearchVo) {
    return this.serviceItemRepo.getServiceItemAll(search);
  }

  async getServiceItemAllView() {
    return this.serviceItemRepo.getServiceItemAllView();
  }
}
