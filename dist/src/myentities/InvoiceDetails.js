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
exports.InvoiceDetails = void 0;
const typeorm_1 = require("typeorm");
let InvoiceDetails = class InvoiceDetails {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'linked_uotation', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "linkedUotation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'invoice_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "invoiceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'invoice_status', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "invoiceStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'invoice_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "invoiceName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_person', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "salesPerson", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "clientContact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'invoice_date', nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "invoiceDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'due_date', nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tech_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "techName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tracking_no', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "trackingNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "additionalField3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "additionalField4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "clientNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tax', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "tax", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'over_date', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "overDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'is_alert', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "isAlert", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'total_amount',
        nullable: true,
        precision: 255,
        scale: 0,
    }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_po_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "clientPoNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "refNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'paid_amount',
        nullable: true,
        precision: 255,
        scale: 0,
    }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "paidAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'outstanding_amount',
        nullable: true,
        precision: 255,
        scale: 0,
    }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "outstandingAmount", void 0);
InvoiceDetails = __decorate([
    (0, typeorm_1.Entity)('invoice_details')
], InvoiceDetails);
exports.InvoiceDetails = InvoiceDetails;
//# sourceMappingURL=InvoiceDetails.js.map