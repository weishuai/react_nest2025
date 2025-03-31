import { ParameterSearchVo, ParameterVo } from '../myvo/ParameterVo';
export declare class ParameterController {
    private parameterService;
    createParameter(ParameterVo: ParameterVo): Promise<import("typeorm").InsertResult>;
    updateaParameter(userToken: string, Id: string, ParameterVo: ParameterVo): Promise<import("typeorm").UpdateResult>;
    removeParameter(Id: string): Promise<import("typeorm").UpdateResult>;
    getParameterById(Id: string): Promise<any>;
    getParameter(search: ParameterSearchVo): Promise<any[]>;
    getParameterAll(search: ParameterSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getParameterAllView(): Promise<any[]>;
}
