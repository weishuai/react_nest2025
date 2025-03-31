"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const lodash_1 = require("lodash");
const myrepositories_1 = require("../myrepositories");
class MessageService {
    constructor() {
        this.FHuserRepo = new myrepositories_1.FHUserRepo();
    }
    async sendMailUser(userId, refNumber, temp) {
        const user = await this.FHuserRepo.getFHUsersById(userId);
        if (lodash_1.default.isNil(user)) {
            return;
        }
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=MessageService.js.map