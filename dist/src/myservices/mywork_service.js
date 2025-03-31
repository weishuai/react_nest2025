"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWorkService = void 0;
const mywork_repo_1 = require("../myrepositories/mywork_repo");
class myWorkService {
    constructor() {
        this.myworkRepo = new mywork_repo_1.myWorkRepo();
    }
    async findOnemyWork(Id) {
        return await this.myworkRepo.getmyWorksById(Id);
    }
    async createmyWork(myworkVo) {
        return await this.myworkRepo.create(myworkVo);
    }
    async updateamyWork(Id, user_id, myworkVo) {
        return await this.myworkRepo.update(Id, user_id, myworkVo);
    }
    async removemyWork(Ids) {
        console.log(Ids);
        return await this.myworkRepo.remove([Ids]);
    }
    async getmyWorkById(id) {
        return await this.myworkRepo.getmyWorksById(id);
    }
    async getmyWorkList(search) {
        return await this.myworkRepo.getmyWorkList(search);
    }
    async getmyWorkAll() {
        return await this.myworkRepo.getmyWorkAll();
    }
    async getmyWorkAllView() {
        return await this.myworkRepo.getmyWorkAllView();
    }
}
exports.myWorkService = myWorkService;
//# sourceMappingURL=mywork_service.js.map