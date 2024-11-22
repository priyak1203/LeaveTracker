import Container from '../globals/Container';
import LeaveCard from './LeaveCard';
import { UserBalancesType } from '@/utils/types';
import { formatBalances } from '@/utils/getBalances';

type UserBalancePropType = {
  balance: UserBalancesType[];
};

function UserBalances({ balance }: UserBalancePropType) {
  const balanceData = formatBalances(balance[0]);

  return (
    <Container>
      <section className="pt-2 pb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {balanceData.map((balance, index) => {
          return <LeaveCard key={index} {...balance} />;
        })}
      </section>
    </Container>
  );
}

export default UserBalances;
