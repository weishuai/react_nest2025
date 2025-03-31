import { SearchVo } from '../myutils/searchvo';
export declare class TrackingLogVo {
    id: string;
    no: string;
    category: string;
    sourceType: string;
    description: string;
    raisedBy: string;
    raisedDate: Date;
    assignTo: string;
    actionPlan: string;
    remarks: string | null;
    dateCompleted: Date;
    daysOpened: number;
    status: string;
    attachment: string;
    isDel: number;
    condoId: string;
}
export declare class TrackingLogAddVo {
    category: string;
    sourceType: string;
    description: string;
    raisedBy: string;
    raisedDate: Date;
    assignTo: string;
    actionPlan: string;
    remarks: string | null;
    condoId: string;
}
export declare class TrackingLogUpdateVo {
    id: string;
    category: string;
    sourceType: string;
    description: string;
    assignTo: string;
    actionPlan: string;
    remarks: string | null;
    condoId: string;
    status: string;
}
export declare class TrackingLogSearchVo extends SearchVo {
    condoId: string;
    status: string;
}
export declare class TrackingLogGetVo extends TrackingLogUpdateVo {
    no: string;
    assignTo: string;
    raisedBy: string;
    raisedDate: Date;
    dateCompleted: Date;
    daysOpened: number;
}
