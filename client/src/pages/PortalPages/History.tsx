import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';
import HistoryTable from '@/components/portal/HistoryTable';

function HistoryPage() {
  return (
    <Container>
      <TableWrapper title="my leave history">
        <HistoryTable />
      </TableWrapper>
    </Container>
  );
}

export default HistoryPage;
