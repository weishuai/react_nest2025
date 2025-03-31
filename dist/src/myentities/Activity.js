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
exports.Activity = void 0;
const typeorm_1 = require("typeorm");
let Activity = class Activity {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'types', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "types", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'subject', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'starts', nullable: true }),
    __metadata("design:type", Date)
], Activity.prototype, "starts", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'ends', nullable: true }),
    __metadata("design:type", Date)
], Activity.prototype, "ends", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', { name: 'all_day_event', nullable: true }),
    __metadata("design:type", Number)
], Activity.prototype, "allDayEvent", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'attendees1', nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "attendees1", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'attendees2', nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "attendees2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'related_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "relatedType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'related_to', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "relatedTo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'event_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'collaborate1', nullable: true }),
    __metadata("design:type", String)
], Activity.prototype, "collaborate1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'collaborate2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "collaborate2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'priority', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'status', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'attachment', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "attachment", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email_to', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "emailTo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "cc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'send_mine', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "sendMine", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'caller', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "caller", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sender_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "senderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'receiver_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "receiverNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Activity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Activity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mtable', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "mtable", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)('activity')
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map