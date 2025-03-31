export declare class CondoAddVo {
    name: string;
    location: string;
    remarks: string;
    adminId: string;
}
export declare class CondoBriefVo extends CondoAddVo {
    id: string;
    adminId: string;
    createDate: Date;
    adminName: string;
}
export declare class CondoDetailVo extends CondoBriefVo {
    adminTel: string;
    adminEmail: string;
    creatorId: string;
    creatorName: string;
    createDate: Date;
    lastUpdate: Date;
}
export declare class CondoSelectVo {
    id: string;
    name: string;
}
