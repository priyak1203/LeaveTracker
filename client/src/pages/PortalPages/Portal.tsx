import GreetingBanner from '@/components/portal/GreetingBanner';
import PortalCalendar from '@/components/portal/PortalCalendar';
import UserBalances from '@/components/portal/UserBalances';
import customFetch from '@/utils/axios';
import { UserEventType, type UserBalancesType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

type PortalLoaderType = {
  userBalances: UserBalancesType[];
  allEvents: UserEventType[];
};

export const loader = async (): Promise<PortalLoaderType> => {
  const balanceResponse = await customFetch.get('/leave/user-balance');
  const eventResponse = await customFetch.get('/event/all-events');
  const userBalances: UserBalancesType[] = balanceResponse.data.userBalances;
  const allEvents: UserEventType[] = eventResponse.data.events;
  return { userBalances, allEvents };
};

function PortalPage() {
  const { userBalances, allEvents } = useLoaderData() as PortalLoaderType;

  return (
    <>
      <GreetingBanner />
      <PortalCalendar events={allEvents} />

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
