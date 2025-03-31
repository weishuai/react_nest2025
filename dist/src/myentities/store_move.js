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
exports.StoreMove = void 0;
const typeorm_1 = require("typeorm");
let StoreMove = class StoreMove {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], StoreMove.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'partners', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "partners", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'delivery_date', nullable: true }),
    __metadata("design:type", Date)
], StoreMove.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'source_location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "sourceLocation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'source_document', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "sourceDocument", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'owner', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fhtime', nullable: true }),
    __metadata("design:type", Date)
], StoreMove.prototype, "fhtime", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'notes', nullable: true }),
    __metadata("design:type", String)
], StoreMove.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], StoreMove.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], StoreMove.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StoreMove.prototype, "updatedUid", void 0);
StoreMove = __decorate([
    (0, typeorm_1.Entity)('store_move')
], StoreMove);
exports.StoreMove = StoreMove;
//# sourceMappingURL=store_move.js.map