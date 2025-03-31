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
exports.StockWarehouseOrderpoint = void 0;
const typeorm_1 = require("typeorm");
let StockWarehouseOrderpoint = class StockWarehouseOrderpoint {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'position', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'inHand', nullable: true }),
    __metadata("design:type", Number)
], StockWarehouseOrderpoint.prototype, "inHand", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'prediction', nullable: true }),
    __metadata("design:type", Number)
], StockWarehouseOrderpoint.prototype, "prediction", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'route', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "route", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'min', nullable: true }),
    __metadata("design:type", Number)
], StockWarehouseOrderpoint.prototype, "min", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'max', nullable: true }),
    __metadata("design:type", Number)
], StockWarehouseOrderpoint.prototype, "max", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'order', nullable: true }),
    __metadata("design:type", Number)
], StockWarehouseOrderpoint.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], StockWarehouseOrderpoint.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], StockWarehouseOrderpoint.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StockWarehouseOrderpoint.prototype, "updatedUid", void 0);
StockWarehouseOrderpoint = __decorate([
    (0, typeorm_1.Entity)('stock_warehouse_orderpoint')
], StockWarehouseOrderpoint);
exports.StockWarehouseOrderpoint = StockWarehouseOrderpoint;
//# sourceMappingURL=stock_warehouse_orderpoint.js.map