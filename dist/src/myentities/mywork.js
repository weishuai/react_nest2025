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
exports.myWork = void 0;
const typeorm_1 = require("typeorm");
let myWork = class myWork {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], myWork.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'operationName', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "operationName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'duration', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'workCenter', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "workCenter", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'defaultDuration', nullable: true }),
    __metadata("design:type", Number)
], myWork.prototype, "defaultDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'serialNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "serialNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bom', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "bom", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'worksheet', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "worksheet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhtext', nullable: true }),
    __metadata("design:type", String)
], myWork.prototype, "fhtext", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], myWork.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], myWork.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWork.prototype, "updatedUid", void 0);
myWork = __decorate([
    (0, typeorm_1.Entity)('mywork')
], myWork);
exports.myWork = myWork;
//# sourceMappingURL=mywork.js.map