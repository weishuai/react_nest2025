import { SelectQueryBuilder } from 'typeorm';
export declare function selectFields<T>(qb: SelectQueryBuilder<T>, fields: Record<string, string>): SelectQueryBuilder<T>;
export declare function andWhereEqual<T>(qb: SelectQueryBuilder<T>, alias: string, field: string, value: string | number | Date): SelectQueryBuilder<T>;
export declare function andWhereWithSign<T>(qb: SelectQueryBuilder<T>, alias: string, field: string, sign: string, value: string | number | Date): SelectQueryBuilder<T>;
export declare function multiSearch<T>(qb: SelectQueryBuilder<T>, fields: string[], keyWords: string): SelectQueryBuilder<T>;
export declare function setSorts<T>(qb: SelectQueryBuilder<T>, fields: Record<string, string>, sorts: string): SelectQueryBuilder<T>;
export declare function vo2Entity<T>(vo: any, groups: string[]): T;
export declare function any2Record(obj: any): Record<string, string[] | number[]>;
export declare function andWhereIn<T>(qb: SelectQueryBuilder<T>, alias: string, field: string, values: string[] | number[]): SelectQueryBuilder<T>;
