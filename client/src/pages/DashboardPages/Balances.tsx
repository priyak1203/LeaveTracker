import BalancesTable from '@/components/dashboard/BalancesTable';
import Container from '@/components/globals/Container';
import customFetch from '@/utils/axios';
import { UserBalancesType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get(`/leave/all-balances`);
  const allBalances: UserBalancesType[] = data.balances;
  return allBalances;
};

function BalancesPage() {
  const allBalances = useLoaderData() as UserBalancesType[];

  return (
    <Container>
      <BalancesTable allBalances={allBalances} />
    </Container>
  );
}

export default BalancesPage;
