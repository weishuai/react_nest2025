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
exports.Role = void 0;
const typeorm_1 = require("typeorm");
let Role = class Role {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'app', length: 255 }),
    __metadata("design:type", String)
], Role.prototype, "app", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', { name: 'is_default' }),
    __metadata("design:type", Number)
], Role.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', { name: 'is_del', default: () => "'0'" }),
    __metadata("design:type", Number)
], Role.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at' }),
    __metadata("design:type", Date)
], Role.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Role.prototype, "updatedAt", void 0);
Role = __decorate([
    (0, typeorm_1.Index)('id', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('role')
], Role);
exports.Role = Role;
//# sourceMappingURL=Role.js.map