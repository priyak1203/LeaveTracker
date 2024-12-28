import LeavesTable from '@/components/dashboard/LeavesTable';
import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';
import customFetch from '@/utils/axios';
import { type UserLeavesType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get('/leave/all-leaves');
  const allLeaves: UserLeavesType[] = data.allLeaves;
  return allLeaves;
};

function LeavesPage() {
  const allUserLeaves = useLoaderData() as UserLeavesType[];

  return (
    <Container>
      <TableWrapper title="all leaves">
        <LeavesTable allUserLeaves={allUserLeaves} />
      </TableWrapper>
    </Container>
  );
}

export default LeavesPage;
