import UsersTable from '@/components/dashboard/UsersTable';
import Container from '@/components/globals/Container';
import TableWrapper from '@/components/globals/TableWrapper';
import customFetch from '@/utils/axios';
import { UserType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get(`/users/all-users`);
  const usersData: UserType[] = data.users;
  return usersData;
};

function UsersPage() {
  const usersData = useLoaderData() as UserType[];

  return (
    <Container>
      <TableWrapper title="admin users">
        <UsersTable usersData={usersData} />
      </TableWrapper>
    </Container>
  );
}

export default UsersPage;
