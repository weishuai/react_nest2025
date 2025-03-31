"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHUserRepo = void 0;
const pagination_1 = require("../myutils/pagination");
const typeorm_1 = require("typeorm");
const my_utils_1 = require("../myutils/my.utils");
const User_1 = require("../myentities/User");
class FHUserRepo {
    async getFHUsersById(id) {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            userName: 'user.userName',
            id: 'user.id',
            email: 'user.email',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'user', 'id', id);
        const res = await qb.getRawOne();
        return res;
    }
    async UsersLogin(email, password) {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            email: 'user.email',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        (0, my_utils_1.andWhereEqual)(qb, 'user', 'email', email);
        (0, my_utils_1.andWhereEqual)(qb, 'user', 'password', password);
        const res = await qb.getRawMany();
        return res;
    }
    async getFHUserAll() {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            email: 'user.email',
            userName: 'user.user_name',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        qb.orderBy('user.created_at', 'DESC');
        console.info('44');
        const raws = await qb.getRawMany();
        return raws;
    }
    async getFHUserAll002(search) {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            email: 'user.email',
            userName: 'user.user_name',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        console.info('44');
        (0, my_utils_1.multiSearch)(qb, ['user.user_name'], search.search);
        qb.orderBy('user.created_at', 'DESC');
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return { 'raws': raws, 'count': count };
    }
    async getFHUserAllView() {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            userName: 'user.user_name',
            email: 'user.email',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('1=1');
        const res = await qb.getRawMany();
        return res;
    }
    async getFHUser(search) {
        const qb = (0, typeorm_1.getRepository)(User_1.User).createQueryBuilder('user');
        const fields = {
            id: 'user.id',
            userName: 'user.user_name',
            email: 'user.email',
            password: 'user.password',
            app: 'user.app',
            timezone: 'user.timezone',
            mobileCountryCode: 'user.mobile_country_code',
            mobileCallingCountryCode: 'user.mobile_calling_country_code',
            mobileNumber: 'user.mobile_number',
            avatar: 'user.avatar',
            lastSignIn: 'user.last_sign_in',
            createdAt: 'user.created_at',
        };
        (0, my_utils_1.selectFields)(qb, fields);
        qb.where('user.is_del=0');
        (0, my_utils_1.multiSearch)(qb, ['user.name'], search.search);
        (0, my_utils_1.setSorts)(qb, fields, search.sort);
        const count = await qb.getCount();
        const { skip, take } = (0, pagination_1.skipAndTake)(count, search);
        const raws = await qb.offset(skip).limit(take).getRawMany();
        return raws;
    }
}
exports.FHUserRepo = FHUserRepo;
//# sourceMappingURL=FHUserRepo.js.map