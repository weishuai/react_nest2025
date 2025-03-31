import { SearchVo } from '../myutils/searchvo';
export declare class TbreturnvisitVo {
    id: string;
    name: string;
    mid: any;
    project: any;
    fhdate: any;
    location: any;
    contacts: any;
    contactInformation: any;
    rreturnVisitDescription: any;
    annex: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TbreturnvisitSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
