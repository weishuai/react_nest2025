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
exports.Tbreturnvisit = void 0;
const typeorm_1 = require("typeorm");
let Tbreturnvisit = class Tbreturnvisit {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'project', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhdate', nullable: true }),
    __metadata("design:type", Date)
], Tbreturnvisit.prototype, "fhdate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contacts', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contactInformation', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "contactInformation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'returnVisitDescription', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "rreturnVisitDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'annex', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "annex", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Tbreturnvisit.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Tbreturnvisit.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbreturnvisit.prototype, "updatedUid", void 0);
Tbreturnvisit = __decorate([
    (0, typeorm_1.Entity)('tbreturnvisit')
], Tbreturnvisit);
exports.Tbreturnvisit = Tbreturnvisit;
//# sourceMappingURL=tbreturnvisit.js.map