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

import { type UserType } from '@/utils/types';
import AddCredits from './AddCredits';

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

  if (usersData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl m-4 text-red-800">No users to display</h2>
      </div>
    );
  }

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
          const {
            _id: userId,
            name,
            image,
            email,
            phone,
            department,
            jobTitle,
            role,
          } = user;
          return (
            <TableRow key={userId}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>
                    {name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>
                <Badge variant={'outline'} className="capitalize">
                  {department}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={'secondary'} className="capitalize">
                  {jobTitle}
                </Badge>
              </TableCell>
              <TableCell className="uppercase">{role}</TableCell>
              <TableCell>
                <IoPencil className="text-primary w-4 h-4" />
              </TableCell>
              <TableCell>
                <AddCredits />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default UsersTable;
