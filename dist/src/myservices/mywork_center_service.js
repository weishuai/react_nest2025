"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkCenterService = void 0;
const mywork_center_repo_1 = require("../myrepositories/mywork_center_repo");
class myWorkCenterService {
    constructor() {
        this.myworkCenterRepo = new mywork_center_repo_1.myWorkCenterRepo();
    }
    async findOnemyWorkCenter(Id) {
        return await this.myworkCenterRepo.getmyWorkCentersById(Id);
    }
    async createmyWorkCenter(myworkCenterVo) {
        return await this.myworkCenterRepo.create(myworkCenterVo);
    }
    async updateamyWorkCenter(Id, user_id, myworkCenterVo) {
        return await this.myworkCenterRepo.update(Id, user_id, myworkCenterVo);
    }
    async removemyWorkCenter(Ids) {
        console.log(Ids);
        return await this.myworkCenterRepo.remove([Ids]);
    }
    async getmyWorkCenterById(id) {
        return await this.myworkCenterRepo.getmyWorkCentersById(id);
    }
    async getmyWorkCenterList(search) {
        return await this.myworkCenterRepo.getmyWorkCenterList(search);
    }
    async getmyWorkCenterAll() {
        return await this.myworkCenterRepo.getmyWorkCenterAll();
    }
    async getmyWorkCenterAllView() {
        return await this.myworkCenterRepo.getmyWorkCenterAllView();
    }
}
exports.myWorkCenterService = myWorkCenterService;
//# sourceMappingURL=mywork_center_service.js.map