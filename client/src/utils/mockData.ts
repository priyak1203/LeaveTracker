export const usersData = [
  {
    id: 1,
    name: 'Mark Henry',
    email: 'mark@gmail.com',
    phone: 7878560976,
    department: 'tech',
    jobTitle: 'product owner',
    role: 'user',
    image:
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  },
  {
    id: 2,
    name: 'Susei Bates',
    email: 'susan@gmail.com',
    phone: 9748560976,
    department: 'humar resources',
    jobTitle: 'human resources manager',
    role: 'admin',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=1',
  },
  {
    id: 3,
    name: 'Priya Mehra',
    email: 'mpriya@gmail.com',
    phone: 7745450666,
    department: 'tech',
    jobTitle: 'senior developer',
    role: 'user',
  },
];

export const leavesData = [
  {
    id: 1,
    name: 'Mark Henry',
    type: 'study',
    year: 2024,
    status: 'approved',
    req_note: 'i want to be studying',
    updated: '4 days ago',
    updated_note: 'this you gonna need it i guess',
    updatedBy: 'Susie Bates',
  },
  {
    id: 2,
    name: 'Priya Mehra',
    type: 'year',
    year: 2024,
    status: 'pending',
    req_note: 'my yearly leaves',
    updated: '2 days ago',
    updated_note: 'you can take this',
    updatedBy: 'Susie Bates',
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Mark's Birthday",
    description: 'Birthday of Mark',
    date: '14-11-2024',
  },
  {
    id: 2,
    title: 'Staff Outing',
    description: 'Outing for all the staffs',
    date: '15-12-2024',
  },
  {
    id: 3,
    title: 'Suzie On Leave',
    description: 'Suzie off for 6 days',
    date: '30-11-2024',
  },
];

export const balancesData = [
  {
    id: 1,
    name: 'Susie Bates',
    year: 2024,
    annualCredit: 21,
    annualUsed: 11,
    annualAvailable: 11,
    familyCredit: 8,
    familyUsed: 2,
    familyAvailable: 6,
    healthCredit: 11,
    healthUsed: 2,
    healthAvailable: 9,
    maternityCredit: 20,
    maternityUsed: 0,
    maternityAvailable: 20,
    paternityCredit: 0,
    paternityUsed: 0,
    paternityAvailable: 0,
    studyCredit: 10,
    studyUsed: 3,
    studyAvailable: 7,
    unpaidCredit: 5,
    unpaidUsed: 3,
    unpaidAvailable: 2,
  },
  {
    id: 2,
    name: 'Mark Henry',
    year: 2024,
    annualCredit: 21,
    annualUsed: 6,
    annualAvailable: 15,
    familyCredit: 10,
    familyUsed: 0,
    familyAvailable: 0,
    healthCredit: 12,
    healthUsed: 0,
    healthAvailable: 0,
    maternityCredit: 0,
    maternityUsed: 0,
    maternityAvailable: 0,
    paternityCredit: 20,
    paternityUsed: 0,
    paternityAvailable: 20,
    studyCredit: 10,
    studyUsed: 5,
    studyAvailable: 5,
    unpaidCredit: 15,
    unpaidUsed: 10,
    unpaidAvailable: 5,
  },
  {
    id: 3,
    name: 'Priya Mehra',
    year: 2024,
    annualCredit: 8,
    annualUsed: 8,
    annualAvailable: 0,
    familyCredit: 6,
    familyUsed: 7,
    familyAvailable: -1,
    healthCredit: 5,
    healthUsed: 0,
    healthAvailable: 0,
    maternityCredit: 12,
    maternityUsed: 0,
    maternityAvailable: 12,
    paternityCredit: 0,
    paternityUsed: 0,
    paternityAvailable: 0,
    studyCredit: 12,
    studyUsed: 4,
    studyAvailable: 8,
    unpaidCredit: 10,
    unpaidUsed: 2,
    unpaidAvailable: 8,
  },
];

// Portal Page Mock Data
export const userLeaveBalances = [
  {
    year: '2023',
    leaveType: 'ANNUAL',
    credit: 22,
    used: 19,
    balance: 3,
  },
  {
    year: '2023',
    leaveType: 'HEALTH',
    credit: 15,
    used: 5,
    balance: 10,
  },
  {
    year: '2023',
    leaveType: 'MATERNITY',
    credit: 20,
    used: 8,
    balance: 12,
  },
  {
    year: '2023',
    leaveType: 'STUDY',
    credit: 10,
    used: 3,
    balance: 7,
  },
  {
    year: '2023',
    leaveType: 'FAMILY',
    credit: 18,
    used: 6,
    balance: 12,
  },
  {
    year: '2023',
    leaveType: 'PATERNITY',
    credit: 12,
    used: 4,
    balance: 8,
  },
  {
    year: '2023',
    leaveType: 'UNPAID',
    credit: 0,
    used: 5,
    balance: -5,
  },
];
