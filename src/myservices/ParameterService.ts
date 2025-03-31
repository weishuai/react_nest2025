import { ParameterRepo } from '../myrepositories';
import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ParameterService {
  private parameterRepo = new ParameterRepo();

  async findOneParameter(Id: string) {
    ///const issue = new Fhtest();
    return this.parameterRepo.getParametersById(Id);
  }

  async createParameter(parameterVo: ParameterVo) {
    ///parameterVo.id = id();
    return this.parameterRepo.create(parameterVo);
  }

  async updateaParameter(
    Id: string,
    user_id: string,
    parameterVo: ParameterVo,
  ) {
    parameterVo.updatedAt = new Date();

    parameterVo.updatedUid = user_id;
    return this.parameterRepo.update(Id, user_id, parameterVo);
  }

  async removeParameter(Ids: string[]) {
    return this.parameterRepo.remove(Ids);
  }

  async getParameterById(id: string) {
    return this.parameterRepo.getParametersById(id);
  }

  async getParameter(search: ParameterSearchVo) {
    return this.parameterRepo.getParameter(search);
  }

  async getParameterAll(search: ParameterSearchVo) {
    return await this.parameterRepo.getParameterAll(search);
  }

  async getParameterAllView() {
    return this.parameterRepo.getParameterAllView();
  }
}
