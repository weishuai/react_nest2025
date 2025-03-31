import {
  CustomizationRepo,
  ServiceContractRepo,
  ServiceItemRepo,
} from '../myrepositories';
import {
  ServiceContractSearchVo,
  ServiceContractVo,
} from '../myvo/ServiceContractVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ServiceContractService {
  private serviceContractRepo = new ServiceContractRepo();
  private customizationRepo = new CustomizationRepo();
  private serviceItemRepo = new ServiceItemRepo();

  async findOneServiceContract(Id: string) {
    ///const issue = new Fhtest();
    return this.serviceContractRepo.getserviceContractsById(Id);
  }

  async createServiceContract(serviceContractVo: ServiceContractVo) {
    const mid = serviceContractVo.id;
    ///serviceContractVo.id = id();
    this.serviceItemRepo.updateServiceItemByMid(mid, serviceContractVo.id);
    const refNumber = 'SC-';
    ////serviceContractVo.contractRef = String((await this.customizationRepo.nextGetNo(refNumber)).No);
    return this.serviceContractRepo.create(serviceContractVo);
  }

  async updateaServiceContract(
    Id: string,
    user_id: string,
    serviceContractVo: ServiceContractVo,
  ) {
    serviceContractVo.updatedAt = new Date();

    serviceContractVo.updatedUid = user_id;
    return this.serviceContractRepo.update(Id, user_id, serviceContractVo);
  }

  async removeServiceContract(Ids: string[]) {
    return this.serviceContractRepo.remove(Ids);
  }

  async getServiceContractById(id: string) {
    return this.serviceContractRepo.getserviceContractsById(id);
  }

  async getServiceContract(userId: string, search: ServiceContractSearchVo) {
    return this.serviceContractRepo.getserviceContract(userId, search);
  }

  async getServiceContractAll(search: ServiceContractSearchVo) {
    return this.serviceContractRepo.getserviceContractAll(search);
  }

  async getServiceContractAllView() {
    return this.serviceContractRepo.getserviceContractAllView();
  }
}
