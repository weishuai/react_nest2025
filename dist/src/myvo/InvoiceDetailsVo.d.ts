import { SearchVo } from '../myutils/searchvo';
export declare class InvoiceDetailsVo {
    id: string;
    linkedUotation: string;
    invoiceNumber: string;
    invoiceStatus: string;
    isAlert: string;
    invoiceDate: Date;
    dueDate: Date;
    invoiceName: string;
    account: string;
    salesPerson: string;
    clientContact: string;
    currency: string;
    techName: string;
    trackingNo: string;
    additionalField3: string;
    additionalField4: string;
    remark: string;
    clientNumber: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    tax: string;
    overDate: number;
    totalAmount: number;
    paidAmount: number;
    outstandingAmount: number;
    clientPoNumber: string;
    refNumber: string;
}
export declare class InvoiceDetailsSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    mtable: string;
    status: number;
}
