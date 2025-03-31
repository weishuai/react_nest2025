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
exports.StockQuant = void 0;
const typeorm_1 = require("typeorm");
let StockQuant = class StockQuant {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], StockQuant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'position', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'batch', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'package', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "package", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'inHand', nullable: true }),
    __metadata("design:type", Number)
], StockQuant.prototype, "inHand", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'available', nullable: true }),
    __metadata("design:type", Number)
], StockQuant.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', nullable: true }),
    __metadata("design:type", Number)
], StockQuant.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], StockQuant.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], StockQuant.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockQuant.prototype, "updatedUid", void 0);
StockQuant = __decorate([
    (0, typeorm_1.Entity)('stock_quant')
], StockQuant);
exports.StockQuant = StockQuant;
//# sourceMappingURL=stock_quant.js.map