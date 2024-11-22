import GreetingBanner from '@/components/portal/GreetingBanner';
import PortalCalendar from '@/components/portal/PortalCalendar';
import UserBalances from '@/components/portal/UserBalances';
import customFetch from '@/utils/axios';
import { type UserBalancesType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get('/leave/user-balance');
  const userBalances: UserBalancesType[] = data.userBalances;
  return userBalances;
};

function PortalPage() {
  const userBalances = useLoaderData() as UserBalancesType[];

  return (
    <>
      <GreetingBanner />
      <PortalCalendar />

      <h2 className="mt-10 text-lg text-center font-semibold leading-tight lg:text-xl">
        {userBalances.length === 0
          ? 'No Balances Data found!'
          : 'Current Year Balances'}
      </h2>
      {userBalances.length > 0 && <UserBalances balance={userBalances} />}
    </>
  );
}

export default PortalPage;
