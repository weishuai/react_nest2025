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
exports.Leads = void 0;
const typeorm_1 = require("typeorm");
let Leads = class Leads {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Leads.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'job_title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'industry', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'website', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fax_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "faxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'remark', nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lead_owner', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "leadOwner", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lead_pool', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "leadPool", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'campaign', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'source', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'street_road', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "streetRoad", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ctate', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "ctate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'post_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Leads.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Leads.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'satus', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "satus", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'linked_in', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "linkedIn", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "updatedUid", void 0);
Leads = __decorate([
    (0, typeorm_1.Entity)('leads')
], Leads);
exports.Leads = Leads;
//# sourceMappingURL=Leads.js.map