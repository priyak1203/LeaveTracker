import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';
import HistoryTable from '@/components/portal/HistoryTable';
import customFetch from '@/utils/axios';
import { UserLeavesType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get(`/leave/user-leaves`);
  const userLeaves: UserLeavesType[] = data.userLeaves;
  return userLeaves;
};

function HistoryPage() {
  const userLeaves = useLoaderData() as UserLeavesType[];

  return (
    <Container>
      <TableWrapper title="my leave history">
        <HistoryTable leaves={userLeaves} />
      </TableWrapper>
    </Container>
  );
}

export default HistoryPage;
