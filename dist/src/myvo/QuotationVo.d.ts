import { SearchVo } from '../myutils/searchvo';
export declare class QuotationVo {
    id: string;
    clientId: string;
    quotationName: string;
    salesPerson: string;
    opportunity: string;
    expirationDate: Date;
    paymentTerms: string;
    contact: string;
    taxes: string;
    currency: string;
    cat: string;
    test2: string;
    additionalField3: string;
    additionalField4: string;
    termsConditions: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    status: string;
    amount: string;
    percentage: string;
    discount: string;
    totalDiscount: string;
    name: string;
    test1: string;
    refNumber: string;
    discountType: string;
}
export declare class QuotationSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    mtable: string;
    status: number;
    startDate: string;
    endDate: string;
    stageName: string;
    Owner: string;
    month: string;
}
export declare class FHQuotationSearchVo {
    startDate: string;
    endDate: string;
    stageName: string;
    Owner: string;
    month: string;
    Client: string;
}
