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
exports.myWorkCenter = void 0;
const typeorm_1 = require("typeorm");
let myWorkCenter = class myWorkCenter {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'workcenter', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "workcenter", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'working_hours', nullable: true }),
    __metadata("design:type", Number)
], myWorkCenter.prototype, "workingHours", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhreplace', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "fhreplace", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time_efficiency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "timeEfficiency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'capacity', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'oee', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "oee", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'set_time', nullable: true }),
    __metadata("design:type", Number)
], myWorkCenter.prototype, "setTime", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'cleaning_time', nullable: true }),
    __metadata("design:type", Number)
], myWorkCenter.prototype, "cleaningTime", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'hourly_cost', nullable: true }),
    __metadata("design:type", Number)
], myWorkCenter.prototype, "hourlyCost", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], myWorkCenter.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], myWorkCenter.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], myWorkCenter.prototype, "updatedUid", void 0);
myWorkCenter = __decorate([
    (0, typeorm_1.Entity)('mywork_center')
], myWorkCenter);
exports.myWorkCenter = myWorkCenter;
//# sourceMappingURL=mywork_center.js.map