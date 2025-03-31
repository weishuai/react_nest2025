export declare class PythonShellController {
    pytAPIURL: string;
    sendMessage(FHType: string, FHtxt: string): Promise<{
        fhdata: string;
    }>;
}
