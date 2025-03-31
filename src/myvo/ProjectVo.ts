import { SearchVo } from '../myutils/searchvo';

import { AttachmentVo } from '../myvo/AttachmentVo';

export class IssueAddVo {
  condoId: string;

  fundItemId: string;

  locationItemId: string;

  createDate: Date;

  description: string;

  raisedBy: string;
}

export class IssueAddWithAttachmentVo extends IssueAddVo {
  attachments: AttachmentVo[];
}

export class IssueItemAddVo {
  projectId: string;

  description: string;
}

export class IssueItemGetVo extends IssueItemAddVo {
  id: string;
}

export class IssueRfqVo {
  id: string;

  siteSurvey: Date;

  quoteExpire: Date;

  caseExpire: Date;

  quoteCategories: string;

  vendors: string;
}

export class ProjectVendorVo {
  id: string;
}

export class IssueDetailVo {
  id: string;

  caseId: string;

  condoId: string;

  condoName: string;

  raisedBy: string;

  raisedDate: string;

  fundType: string;

  fundCategory: string;

  fundItem: string;

  locationCategory: string;

  locationItem: string;

  description: string;

  status: number;

  rejectReason: string;

  rejectDate: Date;

  siteSurvey: Date;

  quoteExpire: Date;

  caseExpire: Date;

  service: string;

  rfqDate: string;

  soqExpire: Date;

  soqTitle: string;

  soqPurpose: string;

  recommendation: string;

  soqApproval: string;

  soqDate: Date;

  councilVote?: string;

  recommendVendor: string;

  fundTotal: number;

  fundUsed: number;

  fundBalance: number;

  costOfWork: number;

  balanceAfterWork: number;

  poDate: Date;

  reviewDate: Date;

  resultDate: Date;

  dueDate: Date;

  wipDate: Date;

  completionDate: Date;

  daysOpen: number;

  councilVotes: IssueCouncilVoteVo[];

  items: IssueItemGetVo[];

  attachments: AttachmentVo[];

  vendors: IssueVendorQuotationVo[];
}

export class IssueCouncilVoteVo {
  councilId: string;

  councilName: string;

  vote: number;
}

export class IssueQuotationVo {
  projectId: string;

  vendorId: string;

  warranty: number;

  itemQuotations: IssueItemQuotationVo[];
}

export class IssueQuotationUpdateVo extends IssueQuotationVo {
  sqDate: Date;

  siteSurvey: number;

  soqSelected: number;
}

export class IssueItemQuotationVo {
  itemId: string;

  quotation: number;
}

export class IssueVendorQuotationVo {
  vendorId: string;

  vendorName: string;

  sqDate: Date;

  warranty: number;

  siteSurvey: number;

  soqSelected: number;

  totalAmount: number;

  quotation?: string;

  quotations: IssueItemQuotationVo[];
}

export class IssueBriefVo {
  issueId: string;

  caseId: string;

  description: string;

  fundType: string;

  reporter: string;

  raisedDate: Date;

  status: number;

  condo: string;

  dueDate: Date;
}

export class IssueSearchVo extends SearchVo {
  condoId: string;

  locationCategoryId: string;

  fundType: string;

  status: number;
}

export class IssueRejectVo {
  issueId: string;

  rejectReason: string;
}

export class IssueSoqVo {
  issueId: string;

  soqExpire: Date;

  subject: string;

  soqTitle: string;

  soqPurpose: string;

  recommendation: string;

  soqApproval: string;

  councils: string[];
}

export class IssueBasicVo {
  caseId: string;

  description: string;

  fundType: string;

  raisedBy: string;

  raisedDate: Date;

  fundCategory: string;

  fundItem: string;

  condoName: string;

  locationCategory: string;

  locationItem: string;

  status: number;

  rejectReason: string;
}

export class ProjectStartVo {
  projectId: string;

  poDate: Date;

  targetCompletionDate: Date;
}

export class IssueStatusVo {
  createDate: Date;

  rejectDate: Date;

  rfqDate: Date;

  soqDate: Date;

  poDate: Date;

  reviewDate: Date;

  resultDate: Date;

  dueDate: Date;

  wipDate: Date;

  completionDate: Date;
}
