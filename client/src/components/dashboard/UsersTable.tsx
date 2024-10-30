import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { IoPencil } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';

import { type UserType } from '@/utils/types';

const url = 'http://localhost:5000/api/v1/users/all-users';

export const loader = async () => {
  const { data } = await axios.get(url);
  const usersData: UserType[] = data.users;
  return usersData;
};

function UsersTable() {
  const usersData = useLoaderData() as UserType[];

  const tableHeadData = [
    'Avatar',
    'Name',
    'Email',
    'Phone',
    'Department',
    'Job Title',
    'Role',
    'Edit',
    'Add Leave Credits',
  ];

  return (
    <Table>
      <TableHeader className="whitespace-nowrap">
        <TableRow>
          {tableHeadData.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="whitespace-nowrap">
        {usersData.map((user) => {
          return (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Badge variant={'outline'} className="capitalize">
                  {user.department}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={'secondary'} className="capitalize">
                  {user.jobTitle}
                </Badge>
              </TableCell>
              <TableCell className="uppercase">{user.role}</TableCell>
              <TableCell>
                <IoPencil className="text-primary w-4 h-4" />
              </TableCell>
              <TableCell>
                <FaPlus className="text-primary w-4 h-4" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default UsersTable;
