export type UserType = {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  department?: string;
  jobTitle?: string;
  role: string;
  image?: string;
};

export type roleType = 'admin' | 'moderator' | 'user';

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
