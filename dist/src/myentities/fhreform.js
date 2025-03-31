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
exports.Fhreform = void 0;
const typeorm_1 = require("typeorm");
let Fhreform = class Fhreform {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Fhreform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF1', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fhF5', nullable: true }),
    __metadata("design:type", String)
], Fhreform.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Fhreform.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Fhreform.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhreform.prototype, "updatedUid", void 0);
Fhreform = __decorate([
    (0, typeorm_1.Entity)('fhreform')
], Fhreform);
exports.Fhreform = Fhreform;
//# sourceMappingURL=fhreform.js.map