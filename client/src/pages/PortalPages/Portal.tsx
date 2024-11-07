import GreetingBanner from '@/components/portal/GreetingBanner';
import PortalCalendar from '@/components/portal/PortalCalendar';
import UserBalances from '@/components/portal/UserBalances';

function PortalPage() {
  // temp
  const currentYearBalances = 20;
  return (
    <>
      <GreetingBanner />
      <PortalCalendar />
      <h2 className="my-4 text-lg text-center font-semibold leading-tight lg:text-xl">
        {!currentYearBalances
          ? 'No Balances Data found...'
          : 'Current Year Balances'}
      </h2>
      <UserBalances />
    </>
  );
}

export default PortalPage;
