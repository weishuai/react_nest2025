export declare class ProductsController {
    private fhuserService;
    getFHAccountTagList(query: any): Promise<{
        data: {
            id: string;
            code: string;
            name: string;
            description: string;
            image: string;
            price: number;
            category: string;
            quantity: number;
            inventoryStatus: string;
            rating: number;
        }[];
    }>;
}
