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
import { usersData } from '@/utils/mockData';

function UsersTable() {
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
    <div>
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
              <TableRow key={user.id}>
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
    </div>
  );
}

export default UsersTable;
