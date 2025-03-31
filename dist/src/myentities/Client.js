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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_owner', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "accountOwner", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'reg_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "regNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'industry', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'website', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fax_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "faxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'street', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'state', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'post_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'don', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "don", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "ref", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "additionalField4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field5', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "additionalField5", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'gender', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'date_birth', nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "dateBirth", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'language', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'income', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "income", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'marital', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "marital", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'children', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'accounts_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "accountsType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_tag', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "accountTag", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_state', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Client.prototype, "clientState", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)('client')
], Client);
exports.Client = Client;
//# sourceMappingURL=Client.js.map