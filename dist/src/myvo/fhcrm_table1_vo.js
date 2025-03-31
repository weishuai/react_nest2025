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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHcrmTable1SearchVo = exports.FHcrmTable1Vo = void 0;
const searchvo_1 = require("../myutils/searchvo");
const class_validator_1 = require("class-validator");
class FHcrmTable1Vo {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], FHcrmTable1Vo.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], FHcrmTable1Vo.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "isactived", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "islocked", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "createUid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FHcrmTable1Vo.prototype, "updatedUid", void 0);
exports.FHcrmTable1Vo = FHcrmTable1Vo;
class FHcrmTable1SearchVo extends searchvo_1.SearchVo {
}
exports.FHcrmTable1SearchVo = FHcrmTable1SearchVo;
//# sourceMappingURL=fhcrm_table1_vo.js.map