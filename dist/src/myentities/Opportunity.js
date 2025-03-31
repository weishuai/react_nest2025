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
exports.Opportunity = void 0;
const typeorm_1 = require("typeorm");
let Opportunity = class Opportunity {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Opportunity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'opportunity_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "opportunityName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'opportunity_owner', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "opportunityOwner", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'expiry_date', nullable: true }),
    __metadata("design:type", Date)
], Opportunity.prototype, "expiryDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'stage_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "stageName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'probability', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "probability", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_value', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "salesValue", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cost', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Opportunity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Opportunity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'stage', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "stage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'priority', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'deal_age', nullable: true }),
    __metadata("design:type", Number)
], Opportunity.prototype, "dealAge", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'close_probabilitclose_probability',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Opportunity.prototype, "closeProbabilitcloseProbability", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'forecast_value',
        nullable: true,
        precision: 255,
        scale: 0,
    }),
    __metadata("design:type", Number)
], Opportunity.prototype, "forecastValue", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'expected_close_date', nullable: true }),
    __metadata("design:type", Date)
], Opportunity.prototype, "expectedCloseDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunity.prototype, "refNumber", void 0);
Opportunity = __decorate([
    (0, typeorm_1.Entity)('opportunity')
], Opportunity);
exports.Opportunity = Opportunity;
//# sourceMappingURL=Opportunity.js.map