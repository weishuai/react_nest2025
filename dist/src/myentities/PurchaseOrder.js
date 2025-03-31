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
exports.PurchaseOrder = void 0;
const typeorm_1 = require("typeorm");
let PurchaseOrder = class PurchaseOrder {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "refNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payment_terms', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "paymentTerms", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'taxes', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "taxes", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], PurchaseOrder.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], PurchaseOrder.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], PurchaseOrder.prototype, "updatedUid", void 0);
PurchaseOrder = __decorate([
    (0, typeorm_1.Entity)('purchase_order')
], PurchaseOrder);
exports.PurchaseOrder = PurchaseOrder;
//# sourceMappingURL=PurchaseOrder.js.map