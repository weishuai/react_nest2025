"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PythonShellController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let PythonShellController = class PythonShellController {
    constructor() {
        this.pytAPIURL = 'http://crmreport:5000';
    }
    async sendMessage(FHType, FHtxt) {
        let URL = '';
        const data = {
            FHType: FHType,
            FHJosn: FHtxt,
        };
        await (0, axios_1.default)({
            method: 'POST',
            url: '/sendMessage',
            baseURL: this.pytAPIURL,
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
            URL = res.data;
        })
            .catch((err) => {
            URL = err;
        });
        console.log(URL);
        return { fhdata: URL };
    }
};
__decorate([
    (0, common_1.Get)('/sendMessage/:FHType/:FHtxt'),
    __param(0, (0, common_1.Param)('FHType')),
    __param(1, (0, common_1.Param)('FHtxt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PythonShellController.prototype, "sendMessage", null);
PythonShellController = __decorate([
    (0, common_1.Controller)('/pythonShell')
], PythonShellController);
exports.PythonShellController = PythonShellController;
//# sourceMappingURL=PythonShellController.js.map