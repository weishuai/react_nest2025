export declare class User {
    id: string;
    userName: string;
    email: string;
    password: string | null;
    createdAt: Date;
    app: string;
    timezone: string;
    mobileCountryCode: string | null;
    mobileCallingCountryCode: string | null;
    mobileNumber: string | null;
    avatar: string | null;
    lastSignIn: Date | null;
}
