import { TicketSearchVo, TicketVo } from '../myvo/TicketVo';
export declare class TicketController {
    private ticketService;
    createTicket(TicketVo: TicketVo): Promise<import("typeorm").InsertResult>;
    updateaTicket(userToken: string, Id: string, TicketVo: TicketVo): Promise<import("typeorm").UpdateResult>;
    removeTicket(Id: string): Promise<import("typeorm").UpdateResult>;
    getTicketById(Id: string): Promise<any>;
    getTicket(search: TicketSearchVo): Promise<any[]>;
    getTicketAll(search: TicketSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTicketAllView(): Promise<any[]>;
}
