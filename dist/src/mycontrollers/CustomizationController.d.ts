import { CustomizationSearchVo, CustomizationVo } from '../myvo/CustomizationVo';
export declare class CustomizationController {
    private customizationService;
    createCustomization(CustomizationVo: CustomizationVo): Promise<void>;
    updateaCustomization(userToken: string, Id: string, CustomizationVo: CustomizationVo): Promise<void>;
    removeCustomization(Id: string): Promise<void>;
    getCustomizationById(Id: string): Promise<any>;
    getCustomization(search: CustomizationSearchVo): Promise<any[]>;
    getCustomizationAll(search: CustomizationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCustomizationAllView(): Promise<any[]>;
}
