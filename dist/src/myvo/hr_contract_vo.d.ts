import { SearchVo } from '../myutils/searchvo';
export declare class HrContractVo {
    id: string;
    name: string;
    fhname: any;
    staff: any;
    department: any;
    job: any;
    company: any;
    payStructure: any;
    startDate: any;
    firstContractDate: any;
    endDate: any;
    workArrangement: any;
    HRSupervisor: any;
    wages: number;
    fhtxt: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class HrContractSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
