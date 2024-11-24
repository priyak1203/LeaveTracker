export const leaveTypes = [
  { label: 'Annual', value: 'annual' },
  { label: 'Health', value: 'health' },
  { label: 'Study', value: 'study' },
  { label: 'Family', value: 'family' },
  { label: 'Maternity', value: 'maternity' },
  { label: 'Paternity', value: 'paternity' },
  { label: 'Unpaid', value: 'unpaid' },
] as const;

export const leaveStatus = [
  'pending',
  'approved',
  'inmoderation',
  'rejected',
] as const;

export const departments = [
  {
    label: 'finance',
    id: '1',
    desc: 'Handles Money',
    users: [],
  },
  {
    label: 'tech',
    id: '2',
    desc: 'Develop Software',
    users: [],
  },
  {
    label: 'human resources',
    id: '3',
    desc: 'Deals with human matters',
    users: [],
  },
  {
    label: 'operations',
    id: '4',
    desc: 'Runs operations',
    users: [],
  },
  {
    label: 'product',
    id: '5',
    desc: 'Manages product development',
    users: [],
  },
] as const;

export const titles = [
  {
    label: 'ceo',
    id: '1',
    desc: 'Handles the company',
    subordinates: [],
  },
  {
    label: 'senior developer',
    id: '2',
    desc: 'Develop Software',
    subordinates: [],
  },
  {
    label: 'human resources manager',
    id: '3',
    desc: 'Deals with human matters',
    subordinates: [],
  },
  {
    label: 'operations manager',
    id: '4',
    desc: 'Runs operations',
    subordinates: [],
  },
  {
    label: 'product owner',
    id: '5',
    desc: 'Manages product development',
    subordinates: [],
  },
  {
    label: 'associate',
    id: '6',
    desc: 'Entry level',
    subordinates: [],
  },
] as const;

export const userRoles = ['admin', 'user', 'moderator'] as const;
