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
exports.StoreMoveList = void 0;
const typeorm_1 = require("typeorm");
let StoreMoveList = class StoreMoveList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'demand', nullable: true }),
    __metadata("design:type", Number)
], StoreMoveList.prototype, "demand", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'reserve', nullable: true }),
    __metadata("design:type", Number)
], StoreMoveList.prototype, "reserve", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'complete', nullable: true }),
    __metadata("design:type", Number)
], StoreMoveList.prototype, "complete", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'selling_price', nullable: true }),
    __metadata("design:type", Number)
], StoreMoveList.prototype, "sellingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'cost_price', nullable: true }),
    __metadata("design:type", Number)
], StoreMoveList.prototype, "costPprice", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], StoreMoveList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], StoreMoveList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMoveList.prototype, "updatedUid", void 0);
StoreMoveList = __decorate([
    (0, typeorm_1.Entity)('store_move_list')
], StoreMoveList);
exports.StoreMoveList = StoreMoveList;
//# sourceMappingURL=store_move_list.js.map