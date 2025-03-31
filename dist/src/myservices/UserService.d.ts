export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class UserService {
    private userRepo;
    getUserBaseAll(): Promise<any[]>;
    getUserBaseAllView(): Promise<any[]>;
    getUserBaseById(Id: string): Promise<any>;
}
