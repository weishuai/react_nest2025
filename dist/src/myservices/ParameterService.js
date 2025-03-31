"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterService = void 0;
const myrepositories_1 = require("../myrepositories");
class ParameterService {
    constructor() {
        this.parameterRepo = new myrepositories_1.ParameterRepo();
    }
    async findOneParameter(Id) {
        return this.parameterRepo.getParametersById(Id);
    }
    async createParameter(parameterVo) {
        return this.parameterRepo.create(parameterVo);
    }
    async updateaParameter(Id, user_id, parameterVo) {
        parameterVo.updatedAt = new Date();
        parameterVo.updatedUid = user_id;
        return this.parameterRepo.update(Id, user_id, parameterVo);
    }
    async removeParameter(Ids) {
        return this.parameterRepo.remove(Ids);
    }
    async getParameterById(id) {
        return this.parameterRepo.getParametersById(id);
    }
    async getParameter(search) {
        return this.parameterRepo.getParameter(search);
    }
    async getParameterAll(search) {
        return await this.parameterRepo.getParameterAll(search);
    }
    async getParameterAllView() {
        return this.parameterRepo.getParameterAllView();
    }
}
exports.ParameterService = ParameterService;
//# sourceMappingURL=ParameterService.js.map