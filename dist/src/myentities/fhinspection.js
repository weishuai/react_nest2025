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
exports.Fhinspection = void 0;
const typeorm_1 = require("typeorm");
let Fhinspection = class Fhinspection {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF1', nullable: true }),
    __metadata("design:type", Date)
], Fhinspection.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF5', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF6', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "fhF6", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Fhinspection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Fhinspection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhinspection.prototype, "updatedUid", void 0);
Fhinspection = __decorate([
    (0, typeorm_1.Entity)('fhinspection')
], Fhinspection);
exports.Fhinspection = Fhinspection;
//# sourceMappingURL=fhinspection.js.map