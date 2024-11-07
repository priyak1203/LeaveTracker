import { userLeaveBalances } from '@/utils/mockData';
import Container from '../globals/Container';
import LeaveCard from './LeaveCard';

function UserBalances() {
  return (
    <Container>
      <section className="pt-2 pb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userLeaveBalances.map((balance, index) => {
          return <LeaveCard key={index} {...balance} />;
        })}
      </section>
    </Container>
  );
}

export default UserBalances;
