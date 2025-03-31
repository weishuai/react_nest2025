import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';
export declare class ParameterRepo {
    create(accountTagVo: ParameterVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ParameterVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getParametersById(id: string): Promise<any>;
    getParameterAll(search: ParameterSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getParameterAllView(): Promise<any[]>;
    getParameter(search: ParameterSearchVo): Promise<any[]>;
}
