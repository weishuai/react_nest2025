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
exports.DeliveryOrder = void 0;
const typeorm_1 = require("typeorm");
let DeliveryOrder = class DeliveryOrder {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "refNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'linked_invoice', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "linkedInvoice", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'delivery_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "deliveryName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "clientCompany", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'delivery_date', nullable: true }),
    __metadata("design:type", Date)
], DeliveryOrder.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "clientContact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'creator', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'post_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'street', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'state', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'terms_conditions', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "termsConditions", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], DeliveryOrder.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], DeliveryOrder.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], DeliveryOrder.prototype, "updatedUid", void 0);
DeliveryOrder = __decorate([
    (0, typeorm_1.Entity)('delivery_order')
], DeliveryOrder);
exports.DeliveryOrder = DeliveryOrder;
//# sourceMappingURL=DeliveryOrder.js.map