import { SearchVo } from '../myutils/searchvo';
import {
  IsDate,
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
  IsBoolean,
  IsNotEmpty,
  Length,
  ValidateNested,
  min,
  max,
} from 'class-validator';
export class FHcrmTable1Vo {
  @IsString()
  ///@IsPositive()
  ///@MaxLength(20, { each: true }) 
  id : string

  @IsString()
  @IsNotEmpty()
  @Length(1,100)
  ///@MaxLength(10, { each: true })   
  name : string 
 
  //@IsString()
  fhF1? : string

  //@IsString()
  fhF2? : string
 
  ///@IsBoolean()
  fhF3? : boolean
  
  ///@IsNumber()
  fhF4? : number

  //@IsDate()
  fhF5? : Date

  ///@IsDate()
  fhF6? : Date

  //@IsDate()
  fhF7? : Date

  //@IsNumber()
  fhF8? : number

  //@IsNumber()
  fhF9? : number
  
  //@IsNumber()
  fhF10? : number

  @IsString()
  description? : string

  //@IsDate()
  @IsDateString()
  createdAt? : Date

  //@IsDate()
  @IsDateString()
  updatedAt? : Date

  @IsString() 
  isactived? : string

  @IsString()
  islocked?: string

  @IsString()
  createUid? : string

  @IsString()
  updatedUid? : string
}

export class FHcrmTable1SearchVo extends SearchVo {
  fundType: string;
  status: number;
}
