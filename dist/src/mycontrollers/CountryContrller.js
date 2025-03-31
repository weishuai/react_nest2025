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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const CountryService_1 = require("../myservices/CountryService");
const CountryVo_1 = require("../myvo/CountryVo");
let CountryController = class CountryController {
    constructor() {
        this.countryService = new CountryService_1.CountryService();
    }
    async createCountry(CountryVo) {
        return this.countryService.createCountry(CountryVo);
    }
    async updateaCountry(userToken, Id, CountryVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.countryService.updateaCountry(Id, userId, CountryVo);
    }
    async removeCountry(Id) {
        return this.countryService.removeCountry([Id]);
    }
    async getCountryById(Id) {
        return this.countryService.getCountryById(Id);
    }
    async getCountry(search) {
        return this.countryService.getCountry(search);
    }
    async getCountryAll(search) {
        return this.countryService.getCountryAll(search);
    }
    async getCountryAllView() {
        return this.countryService.getCountryAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createCountry'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CountryVo_1.CountryVo]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "createCountry", null);
__decorate([
    (0, common_1.Put)('/updateCountry/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, CountryVo_1.CountryVo]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "updateaCountry", null);
__decorate([
    (0, common_1.Get)('/removeCountry/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "removeCountry", null);
__decorate([
    (0, common_1.Get)('/getCountryById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryById", null);
__decorate([
    (0, common_1.Get)('/getCountry'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CountryVo_1.CountrySearchVo]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountry", null);
__decorate([
    (0, common_1.Get)('/getCountryAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CountryVo_1.CountrySearchVo]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryAll", null);
__decorate([
    (0, common_1.Get)('/getCountryAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryAllView", null);
CountryController = __decorate([
    (0, common_1.Controller)('/country')
], CountryController);
exports.CountryController = CountryController;
//# sourceMappingURL=CountryContrller.js.map