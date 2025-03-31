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
exports.Tbaftersale = void 0;
const typeorm_1 = require("typeorm");
let Tbaftersale = class Tbaftersale {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'project', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhdate', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "fhdate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contacts', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contactInformation', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "contactInformation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'VisitDescription', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "VisitDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'problemHandling', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "problemHandling", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remainingProblems', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "remainingProblems", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'afterSalesType', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "afterSalesType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'annex', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "annex", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'processedBy', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "processedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Tbaftersale.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Tbaftersale.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbaftersale.prototype, "updatedUid", void 0);
Tbaftersale = __decorate([
    (0, typeorm_1.Entity)('tbaftersale')
], Tbaftersale);
exports.Tbaftersale = Tbaftersale;
//# sourceMappingURL=tbaftersale.js.map