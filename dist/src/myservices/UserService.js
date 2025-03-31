"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const myrepositories_1 = require("../myrepositories");
class UserService {
    constructor() {
        this.userRepo = new myrepositories_1.UserRepo();
    }
    async getUserBaseAll() {
        return this.userRepo.getUserBaseAll();
    }
    async getUserBaseAllView() {
        return this.userRepo.getUserBaseAllView();
    }
    async getUserBaseById(Id) {
        return this.userRepo.getUserBaseById(Id);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map