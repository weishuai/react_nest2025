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
exports.Returnorder = void 0;
const typeorm_1 = require("typeorm");
let Returnorder = class Returnorder {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Returnorder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'project', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'custom', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "custom", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Invoice', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "Invoice", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contractNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "contractNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'contractQuantity', nullable: true }),
    __metadata("design:type", Number)
], Returnorder.prototype, "contractQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'shipper', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "shipper", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'deliveryQuantity', nullable: true }),
    __metadata("design:type", Number)
], Returnorder.prototype, "deliveryQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'outageQuantity', nullable: true }),
    __metadata("design:type", Number)
], Returnorder.prototype, "outageQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'deliveryType', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "deliveryType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'trackingNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "trackingNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'recipient', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Returnorder.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Returnorder.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Returnorder.prototype, "updatedUid", void 0);
Returnorder = __decorate([
    (0, typeorm_1.Entity)('returnorder')
], Returnorder);
exports.Returnorder = Returnorder;
//# sourceMappingURL=returnorder.js.map