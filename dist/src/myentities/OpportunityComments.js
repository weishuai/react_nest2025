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
exports.OpportunityComments = void 0;
const typeorm_1 = require("typeorm");
let OpportunityComments = class OpportunityComments {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'subject', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'assign_to', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "assignTo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'note', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], OpportunityComments.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], OpportunityComments.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], OpportunityComments.prototype, "updatedUid", void 0);
OpportunityComments = __decorate([
    (0, typeorm_1.Entity)('opportunity_comments')
], OpportunityComments);
exports.OpportunityComments = OpportunityComments;
//# sourceMappingURL=OpportunityComments.js.map