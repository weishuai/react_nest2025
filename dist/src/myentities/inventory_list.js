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
exports.InventoryList = void 0;
const typeorm_1 = require("typeorm");
let InventoryList = class InventoryList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], InventoryList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'position', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'batch', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'package', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "package", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'owner', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'theoretical', nullable: true }),
    __metadata("design:type", Number)
], InventoryList.prototype, "theoretical", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'actual_quantity', nullable: true }),
    __metadata("design:type", Number)
], InventoryList.prototype, "actualQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], InventoryList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], InventoryList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InventoryList.prototype, "updatedUid", void 0);
InventoryList = __decorate([
    (0, typeorm_1.Entity)('inventory_list')
], InventoryList);
exports.InventoryList = InventoryList;
//# sourceMappingURL=inventory_list.js.map