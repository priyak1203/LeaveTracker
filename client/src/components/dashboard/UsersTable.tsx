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
import { type UserType } from '@/utils/types';
import AddCredits from './AddCredits';
import EditUser from './EditUser';

type UsersDataTableProps = {
  usersData: UserType[];
};

function UsersTable({ usersData }: UsersDataTableProps) {
  const tableHeadData = [
    'Avatar',
    'Name',
    'Email',
    'Phone',
    'Department',
    'Job Title',
    'Role',
    'Edit User Info',
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
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium capitalize">{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>
                {department && (
                  <Badge variant={'outline'} className="capitalize">
                    {department}
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                {jobTitle && (
                  <Badge variant={'secondary'} className="capitalize">
                    {jobTitle}
                  </Badge>
                )}
              </TableCell>
              <TableCell className="uppercase">{role}</TableCell>
              <TableCell>
                <EditUser user={user} />
              </TableCell>
              <TableCell>
                <AddCredits user={user} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default UsersTable;
