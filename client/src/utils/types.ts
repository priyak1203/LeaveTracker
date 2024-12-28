export enum LeaveTypes {
  Annual = 'annual',
  Health = 'health',
  Study = 'study',
  Family = 'family',
  Maternity = 'maternity',
  Paternity = 'paternity',
  Unpaid = 'unpaid',
}

export enum LeaveStatus {
  Pending = 'pending',
  Approved = 'approved',
  Inmoderation = 'inmoderation',
  Rejected = 'rejected',
}

export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

export enum RenderStyle {
  ICON = 'ICON',
  LINKS = 'LINKS',
}

export type UserType = {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  department?: string;
  jobTitle?: string;
  role: UserRole;
  image?: string;
};

export type UserBalancesType = {
  _id: string;
  year: string;
  annualCredit?: number;
  annualAvailable?: number;
  annualUsed?: number;
  healthCredit?: number;
  healthAvailable?: number;
  healthUsed?: number;
  studyCredit?: number;
  studyAvailable?: number;
  studyUsed?: number;
  familyCredit?: number;
  familyAvailable?: number;
  familyUsed?: number;
  maternityCredit?: number;
  maternityAvailable?: number;
  maternityUsed?: number;
  paternityCredit?: number;
  paternityAvailable?: number;
  paternityUsed?: number;
  unpaidUsed?: number;
  userName?: string;
  userEmail?: string;
  user: string;
};

export type UserLeavesType = {
  _id: string;
  leaveType: LeaveTypes;
  year: string;
  startDate: string;
  endDate: string;
  days?: number;
  userName?: string;
  userEmail?: string;
  userNotes?: string;
  leaveStatus?: LeaveStatus;
  user?: string;
  moderator?: string;
  moderatorName?: string;
  moderatorNotes?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UserEventType = {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
};
