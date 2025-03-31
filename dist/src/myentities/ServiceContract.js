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
exports.ServiceContract = void 0;
const typeorm_1 = require("typeorm");
let ServiceContract = class ServiceContract {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contract_ref', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "contractRef", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'created_by', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contract_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "contractName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'status', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contract_value', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "contractValue", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'start_date', nullable: true }),
    __metadata("design:type", Date)
], ServiceContract.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'end_date', nullable: true }),
    __metadata("design:type", Date)
], ServiceContract.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sla', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "sla", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'period', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contract_values', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "contractValues", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_po', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "clientPo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field5', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "additionalField5", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'terms_conditions', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "termsConditions", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], ServiceContract.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ServiceContract.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ServiceContract.prototype, "currency", void 0);
ServiceContract = __decorate([
    (0, typeorm_1.Entity)('service_contract')
], ServiceContract);
exports.ServiceContract = ServiceContract;
//# sourceMappingURL=ServiceContract.js.map