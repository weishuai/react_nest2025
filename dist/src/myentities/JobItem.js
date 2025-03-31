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
exports.JobItem = void 0;
const typeorm_1 = require("typeorm");
let JobItem = class JobItem {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], JobItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'step', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "step", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'template', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', { name: 'require', nullable: true }),
    __metadata("design:type", Number)
], JobItem.prototype, "require", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], JobItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], JobItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobItem.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 10 }),
    __metadata("design:type", String)
], JobItem.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo', nullable: true, length: 500 }),
    __metadata("design:type", String)
], JobItem.prototype, "photo", void 0);
JobItem = __decorate([
    (0, typeorm_1.Entity)('job_item')
], JobItem);
exports.JobItem = JobItem;
//# sourceMappingURL=JobItem.js.map