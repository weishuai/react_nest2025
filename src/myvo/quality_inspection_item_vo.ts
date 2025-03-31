import { SearchVo } from '../myutils/searchvo';
export class QualitylnspectionItemVo {
  id = '';
  name = '';
  mid = null 
  fhitem = null 
  fhtxt = null 
  fhnotes = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class QualitylnspectionItemSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
