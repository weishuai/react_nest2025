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
exports.BankCash = void 0;
const typeorm_1 = require("typeorm");
let BankCash = class BankCash {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], BankCash.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'report', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhdate', nullable: true }),
    __metadata("design:type", Date)
], BankCash.prototype, "fhdate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lable', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "lable", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'refer', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "refer", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'partners', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "partners", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'amount_money', nullable: true }),
    __metadata("design:type", Number)
], BankCash.prototype, "amountMoney", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'serial_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "serialNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'notes', nullable: true }),
    __metadata("design:type", String)
], BankCash.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'accounting_voucher', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "accountingVoucher", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], BankCash.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], BankCash.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], BankCash.prototype, "updatedUid", void 0);
BankCash = __decorate([
    (0, typeorm_1.Entity)('bank_cash')
], BankCash);
exports.BankCash = BankCash;
//# sourceMappingURL=bank_cash.js.map