import LeavesTable from '@/components/dashboard/LeavesTable';
import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';

function LeavesPage() {
  return (
    <Container>
      <TableWrapper title="all leaves">
        <LeavesTable />
      </TableWrapper>
    </Container>
  );
}

export default LeavesPage;
