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
exports.StaffList = void 0;
const typeorm_1 = require("typeorm");
let StaffList = class StaffList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], StaffList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'full_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact_no', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "contactNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'role', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'clients', nullable: true }),
    __metadata("design:type", String)
], StaffList.prototype, "clients", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'type', nullable: true }),
    __metadata("design:type", String)
], StaffList.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], StaffList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], StaffList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], StaffList.prototype, "updatedUid", void 0);
StaffList = __decorate([
    (0, typeorm_1.Entity)('staff_list')
], StaffList);
exports.StaffList = StaffList;
//# sourceMappingURL=StaffList.js.map