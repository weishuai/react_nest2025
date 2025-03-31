"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhtestService = void 0;
const myentities_1 = require("../myentities");
const myrepositories_1 = require("../myrepositories");
class FhtestService {
    constructor() {
        this.fhtestRepo = new myrepositories_1.FhtestRepo();
    }
    async findOneFhtest(Id) {
    }
    async createFhtest(fhtestVo) {
        const issue = new myentities_1.Fhtest();
    }
    async updateFhtest(Id, fhtestVo) {
        const issue = new myentities_1.Fhtest();
        issue.id = fhtestVo.id;
        issue.fhname = fhtestVo.fhname;
    }
    async removeFhtest(Ids) {
    }
}
exports.FhtestService = FhtestService;
//# sourceMappingURL=FhtestService.js.map