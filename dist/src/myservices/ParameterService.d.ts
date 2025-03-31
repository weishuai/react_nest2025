import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ParameterService {
    private parameterRepo;
    findOneParameter(Id: string): Promise<any>;
    createParameter(parameterVo: ParameterVo): Promise<import("typeorm").InsertResult>;
    updateaParameter(Id: string, user_id: string, parameterVo: ParameterVo): Promise<import("typeorm").UpdateResult>;
    removeParameter(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getParameterById(id: string): Promise<any>;
    getParameter(search: ParameterSearchVo): Promise<any[]>;
    getParameterAll(search: ParameterSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getParameterAllView(): Promise<any[]>;
}
