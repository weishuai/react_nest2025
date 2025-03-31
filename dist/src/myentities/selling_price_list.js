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
exports.SellingPriceList = void 0;
const typeorm_1 = require("typeorm");
let SellingPriceList = class SellingPriceList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'variant', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "variant", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'miniMumQuantity', nullable: true }),
    __metadata("design:type", Number)
], SellingPriceList.prototype, "miniMumQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', nullable: true }),
    __metadata("design:type", Number)
], SellingPriceList.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'startDate', nullable: true }),
    __metadata("design:type", Date)
], SellingPriceList.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'endDate', nullable: true }),
    __metadata("design:type", Date)
], SellingPriceList.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], SellingPriceList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], SellingPriceList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SellingPriceList.prototype, "updatedUid", void 0);
SellingPriceList = __decorate([
    (0, typeorm_1.Entity)('selling_price_list')
], SellingPriceList);
exports.SellingPriceList = SellingPriceList;
//# sourceMappingURL=selling_price_list.js.map