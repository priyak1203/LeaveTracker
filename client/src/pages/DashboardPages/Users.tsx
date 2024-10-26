import UsersTable from '@/components/dashboard/UsersTable';
import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';

function UsersPage() {
  return (
    <Container>
      <TableWrapper title="admin users">
        <UsersTable />
      </TableWrapper>
    </Container>
  );
}

export default UsersPage;
