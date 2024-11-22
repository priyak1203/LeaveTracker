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

export const leaveHistory = [
  {
    id: 1,
    user: 'Mary Jones',
    type: 'ANNUAL',
    createdAt: '2023-09-20T20:33:29.000Z',
    startDate: '2023-10-07T00:00:00.000Z',
    endDate: '2023-10-10T00:00:00.000Z',
    days: 3,
    status: 'APPROVED',
    notes: 'There remaining are 5 days on your balance',
    updatedAt: '2023-09-20T20:40:29.000Z',
    updatedBy: 'Joe Doe ',
  },
  {
    id: 2,
    user: 'Cherly Mathews',
    type: 'HEALTH',
    createdAt: '2023-09-20T20:33:29.000Z',
    startDate: '2023-01-07T00:00:00.000Z',
    endDate: '2023-01-07T00:00:00.000Z',
    days: 1,
    status: 'APPROVED',
    notes: "Bring Doctor's medical note",
    updatedAt: '2023-09-20T20:33:29.000Z',
    updatedBy: 'Joe Doe ',
  },
  {
    id: 3,
    user: 'Mary Jones',
    type: 'STUDY',
    createdAt: '2023-09-20T20:33:29.000Z',
    startDate: '2023-10-07T00:00:00.000Z',
    endDate: '2023-10-07T00:00:00.000Z',
    days: 6,
    status: 'PENDING',
    notes: '',
    updatedAt: '2023-09-20T20:33:29.000Z',
    updatedBy: 'Joe Doe ',
  },
  {
    id: 4,
    user: 'Shyleen Marsh',
    type: 'FAMILY',
    createdAt: '2023-09-20T20:33:29.000Z',
    startDate: '2023-11-03T00:00:00.000Z',
    endDate: '2023-11-07T00:00:00.000Z',
    days: 4,
    status: 'INMODERATION',
    notes: 'Lets hear what the Manager says',
    updatedAt: '2023-09-20T20:33:29.000Z',
    updatedBy: 'Joe Doe ',
  },
  {
    id: 5,
    user: 'Moses Phiri',
    type: 'MATERNITY',
    createdAt: '2023-09-20T20:33:29.000Z',
    startDate: '2023-10-07T00:00:00.000Z',
    endDate: '2023-10-07T00:00:00.000Z',
    days: 5,
    status: 'APPROVED',
    notes: 'Take Care',
    updatedAt: '2023-09-20T20:33:29.000Z',
    updatedBy: 'Joe Doe ',
  },
  {
    id: 6,
    user: 'Wanguda',
    type: 'PATERNITY',
    createdAt: '2023-08-20T20:33:29.000Z',
    startDate: '2023-10-17T00:00:00.000Z',
    endDate: '2023-10-27T00:00:00.000Z',
    days: 10,
    status: 'PENDING',
    notes: '',
    updatedAt: '2023-08-20T20:33:29.000Z',
    updatedBy: ' ',
  },
  {
    id: 7,
    user: 'De Mawo',
    type: 'UNPAID',
    createdAt: '2023-02-20T20:33:29.000Z',
    startDate: '2023-03-01T00:00:00.000Z',
    endDate: '2023-03-07T00:00:00.000Z',
    days: 7,
    status: 'REJECTED',
    notes: "Man you don't have time",
    updatedAt: '2023-02-21T20:33:29.000Z',
    updatedBy: 'Jane Smith',
  },
];
