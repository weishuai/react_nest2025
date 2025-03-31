import { SearchVo } from '../myutils/searchvo';
export declare class QualityInspectionVo {
    id: string;
    name: string;
    fhname: any;
    title: any;
    team: any;
    productTmlp: any;
    head: any;
    product: any;
    label: any;
    batch: any;
    rootCause: string;
    pick: any;
    priority: any;
    fhtxt: string;
    inspectionItems: any;
    checkAddress: any;
    correctiveAction: string;
    preventiveActions: string;
    sundry: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class QualityInspectionSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
