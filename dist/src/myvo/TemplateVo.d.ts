import { SearchVo } from '../myutils/searchvo';
export declare class TemplateVo {
    id: string;
    templateName: string;
    photo: number;
    templateType: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TemplateSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
