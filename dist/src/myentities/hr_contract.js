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
exports.HrContract = void 0;
const typeorm_1 = require("typeorm");
let HrContract = class HrContract {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], HrContract.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'staff', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'department', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'job', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payStructure', nullable: true }),
    __metadata("design:type", String)
], HrContract.prototype, "payStructure", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'startDate', nullable: true }),
    __metadata("design:type", Date)
], HrContract.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'firstContractDate', nullable: true }),
    __metadata("design:type", Date)
], HrContract.prototype, "firstContractDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'endDate', nullable: true }),
    __metadata("design:type", Date)
], HrContract.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'workArrangement', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "workArrangement", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'HRSupervisor', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "HRSupervisor", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'wages', nullable: true }),
    __metadata("design:type", Number)
], HrContract.prototype, "wages", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fhtxt', nullable: true }),
    __metadata("design:type", String)
], HrContract.prototype, "fhtxt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], HrContract.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], HrContract.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], HrContract.prototype, "updatedUid", void 0);
HrContract = __decorate([
    (0, typeorm_1.Entity)('hr_contract')
], HrContract);
exports.HrContract = HrContract;
//# sourceMappingURL=hr_contract.js.map