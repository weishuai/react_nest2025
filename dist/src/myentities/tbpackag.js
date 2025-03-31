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
exports.Tbpackag = void 0;
const typeorm_1 = require("typeorm");
let Tbpackag = class Tbpackag {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'project', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productCode', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "productCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'deliveryQuantity', nullable: true }),
    __metadata("design:type", Number)
], Tbpackag.prototype, "deliveryQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deliveryDate', nullable: true }),
    __metadata("design:type", Date)
], Tbpackag.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'factoryOrderNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "factoryOrderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'trackingNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "trackingNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'expressCompany', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "expressCompany", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'recipient', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'shipper', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "shipper", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Tbpackag.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Tbpackag.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbpackag.prototype, "updatedUid", void 0);
Tbpackag = __decorate([
    (0, typeorm_1.Entity)('tbpackag')
], Tbpackag);
exports.Tbpackag = Tbpackag;
//# sourceMappingURL=tbpackag.js.map