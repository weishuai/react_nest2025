import { SearchVo } from '../myutils/searchvo';
export declare class ContacPersonVo {
    name: string;
    id: string;
    description: string;
    client: string;
    no: string;
    email: string;
    jobTitle: string;
    account: string;
    phoneNumber: string;
    mobileNumber: string;
    faxNumber: string;
    gender: string;
    dateBirth: Date;
    language: string;
    income: string;
    marital: string;
    children: string;
    street: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    emergency: string;
    securityCourse: string;
    additionalField3: string;
    additionalField4: string;
    additionalField5: string;
    islogin: string;
    login: string;
    password: string;
    isnotification: string;
    isemail: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    isAlert: string;
}
export declare class ContacPersonSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    mtable: string;
    status: number;
}
