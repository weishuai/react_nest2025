export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class MessageService {
    private FHuserRepo;
    sendMailUser(userId: string, refNumber: string, temp: string): Promise<void>;
}
