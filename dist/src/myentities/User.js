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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_name', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'app', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "app", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'timezone', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'mobile_country_code',
        nullable: true,
        length: 16,
    }),
    __metadata("design:type", String)
], User.prototype, "mobileCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'mobile_calling_country_code',
        nullable: true,
        length: 16,
    }),
    __metadata("design:type", String)
], User.prototype, "mobileCallingCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'avatar', nullable: true, length: 2048 }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'last_sign_in', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "lastSignIn", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
exports.User = User;
//# sourceMappingURL=User.js.map