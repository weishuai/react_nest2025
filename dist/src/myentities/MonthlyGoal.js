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
exports.MonthlyGoal = void 0;
const typeorm_1 = require("typeorm");
let MonthlyGoal = class MonthlyGoal {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'target_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "targetNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'team_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "teamId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'personal_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "personalId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'by_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "byType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], MonthlyGoal.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], MonthlyGoal.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], MonthlyGoal.prototype, "updatedUid", void 0);
MonthlyGoal = __decorate([
    (0, typeorm_1.Entity)('monthly_goal')
], MonthlyGoal);
exports.MonthlyGoal = MonthlyGoal;
//# sourceMappingURL=MonthlyGoal.js.map