import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableWrapper from '@/components/globals/TableWrapper';
import { Badge } from '@/components/ui/badge';
import customFetch from '@/utils/axios';
import { useLoaderData } from 'react-router-dom';
import { UserBalancesType } from '@/utils/types';
import EditBalances from './EditBalances';

export const loader = async () => {
  const { data } = await customFetch.get(`/leave/all-balances`);
  const allBalances: UserBalancesType[] = data.balances;
  return allBalances;
};

type BalanceRowTypes = {
  title: string;
  values: string[];
};

const BalanceRowHead = ({ title, values }: BalanceRowTypes) => {
  return (
    <TableHead className="text-center">
      {title}

      <TableRow className="border-none block">
        {values.map((value, index) => (
          <TableHead key={index}>{value}</TableHead>
        ))}
      </TableRow>
    </TableHead>
  );
};

function BalancesTable() {
  const allBalances = useLoaderData() as UserBalancesType[];

  const balanceCategories = [
    { title: 'ANNUAL', values: ['Credit', 'Used', 'Available'] },
    { title: 'FAMILY', values: ['Credit', 'Used', 'Available'] },
    { title: 'HEALTH', values: ['Credit', 'Used', 'Available'] },
    { title: 'MATERNITY', values: ['Credit', 'Used', 'Available'] },
    { title: 'PATERNITY', values: ['Credit', 'Used', 'Available'] },
    { title: 'STUDY', values: ['Credit', 'Used', 'Available'] },
    { title: 'UNPAID', values: ['Credit', 'Used', 'Available'] },
  ];

  const renderBalaceRows = (balanceData: any) => {
    const categories = [
      'annual',
      'family',
      'health',
      'maternity',
      'paternity',
      'study',
      'unpaid',
    ];

    return categories.map((category) => (
      <TableCell key={category}>
        <TableRow>
          {['Credit', 'Used', 'Available'].map((type, index) => (
            <TableCell key={index} className="w-[100px]">
              {balanceData[`${category}${type}`]}
            </TableCell>
          ))}
        </TableRow>
      </TableCell>
    ));
  };

  return (
    <TableWrapper title="All User Balances">
      <Table>
        <TableHeader className="whitespace-nowrap">
          <TableRow>
            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Year</TableHead>
            {balanceCategories.map((category, index) => (
              <BalanceRowHead
                key={index}
                title={category.title}
                values={category.values}
              />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="whitespace-nowrap text-center">
          {allBalances.map((balance) => (
            <TableRow key={balance._id}>
              <TableCell>
                <EditBalances balance={balance} />
              </TableCell>
              <TableCell className="capitalize">{balance.userName}</TableCell>
              <TableCell>
                <Badge>{balance.year}</Badge>
              </TableCell>
              {renderBalaceRows(balance)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}

export default BalancesTable;
