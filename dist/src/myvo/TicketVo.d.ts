import { SearchVo } from '../myutils/searchvo';
export declare class TicketVo {
    id: string;
    name: string;
    rate: string;
    source: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TicketSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
