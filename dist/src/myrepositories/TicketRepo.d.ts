import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';
export declare class TicketRepo {
    create(accountTagVo: TicketVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TicketVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTicketsById(id: string): Promise<any>;
    getTicketAll(search: TicketSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTicketAllView(): Promise<any[]>;
    getTicket(search: TicketSearchVo): Promise<any[]>;
}
