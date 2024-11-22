import { UserBalancesType } from './types';

export const formatBalances = (data: UserBalancesType) => {
  const {
    year,
    annualCredit,
    annualUsed,
    annualAvailable,
    healthCredit,
    healthUsed,
    healthAvailable,
    studyCredit,
    studyUsed,
    studyAvailable,
    familyCredit,
    familyAvailable,
    familyUsed,
    maternityCredit,
    maternityAvailable,
    maternityUsed,
    paternityCredit,
    paternityAvailable,
    paternityUsed,
    unpaidUsed,
  } = data;

  const result = [
    {
      year: year,
      leaveType: 'annual',
      credit: annualCredit,
      used: annualUsed,
      balance: annualAvailable,
    },
    {
      year: year,
      leaveType: 'health',
      credit: healthCredit,
      used: healthUsed,
      balance: healthAvailable,
    },
    {
      year: year,
      leaveType: 'study',
      credit: studyCredit,
      used: studyUsed,
      balance: studyAvailable,
    },
    {
      year: year,
      leaveType: 'family',
      credit: familyCredit,
      used: familyUsed,
      balance: familyAvailable,
    },
    {
      year: year,
      leaveType: 'maternity',
      credit: maternityCredit,
      used: maternityUsed,
      balance: maternityAvailable,
    },
    {
      year: year,
      leaveType: 'paternity',
      credit: paternityCredit,
      used: paternityUsed,
      balance: paternityAvailable,
    },
    {
      year: year,
      leaveType: 'unpaid',

      used: unpaidUsed,
    },
  ];

  return result;
};
