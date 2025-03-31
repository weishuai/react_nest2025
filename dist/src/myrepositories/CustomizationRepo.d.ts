import { CustomizationSearchVo } from '../myvo/CustomizationVo';
export declare class CustomizationRepo {
    nextVal(name: string, table?: string): Promise<{
        No: string;
    }>;
    nextGetNo(name: string, table?: string): Promise<{
        No: string;
    }>;
    getCustomizationsById(id: string): Promise<any>;
    getCustomizationAll(search: CustomizationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCustomizationAllView(): Promise<any[]>;
    getCustomization(search: CustomizationSearchVo): Promise<any[]>;
}
