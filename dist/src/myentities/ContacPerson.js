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
exports.ContacPerson = void 0;
const typeorm_1 = require("typeorm");
let ContacPerson = class ContacPerson {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'no', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "no", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islogin', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "islogin", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isnotification', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "isnotification", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isemail', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "isemail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], ContacPerson.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ContacPerson.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'job_title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fax_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "faxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'gender', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'date_birth', nullable: true }),
    __metadata("design:type", Date)
], ContacPerson.prototype, "dateBirth", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'language', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'income', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "income", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'marital', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "marital", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'children', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'street', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'state', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'post_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'emergency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "emergency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'security_course', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "securityCourse", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "additionalField3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "additionalField4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field5', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "additionalField5", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'is_alert', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContacPerson.prototype, "isAlert", void 0);
ContacPerson = __decorate([
    (0, typeorm_1.Entity)('contac_person')
], ContacPerson);
exports.ContacPerson = ContacPerson;
//# sourceMappingURL=ContacPerson.js.map