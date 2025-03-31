import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TicketService {
    private ticketRepo;
    findOneTicket(Id: string): Promise<any>;
    createTicket(ticketVo: TicketVo): Promise<import("typeorm").InsertResult>;
    updateaTicket(Id: string, user_id: string, ticketVo: TicketVo): Promise<import("typeorm").UpdateResult>;
    removeTicket(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTicketById(id: string): Promise<any>;
    getTicket(search: TicketSearchVo): Promise<any[]>;
    getTicketAll(search: TicketSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTicketAllView(): Promise<any[]>;
}
