import { CustomizationSearchVo, CustomizationVo } from '../myvo/CustomizationVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class CustomizationService {
    private customizationRepo;
    findOneCustomization(Id: string): Promise<any>;
    createCustomization(customizationVo: CustomizationVo): Promise<void>;
    updateaCustomization(Id: string, user_id: string, customizationVo: CustomizationVo): Promise<void>;
    removeCustomization(Ids: string[]): Promise<void>;
    getCustomizationById(id: string): Promise<any>;
    getCustomization(search: CustomizationSearchVo): Promise<any[]>;
    getCustomizationAll(search: CustomizationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCustomizationAllView(): Promise<any[]>;
}
