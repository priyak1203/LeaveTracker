import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import customFetch from '@/utils/axios';
import { type UserLeavesType } from '@/utils/types';
import dayjs from 'dayjs';
import { useLoaderData } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { formatDistance, parseISO, subDays } from 'date-fns';
import EditLeave from './EditLeave';

export const loader = async () => {
  const { data } = await customFetch.get('/leave/all-leaves');
  const allLeaves: UserLeavesType[] = data.allLeaves;
  return allLeaves;
};

function LeavesTable() {
  const tableHeadData = [
    'Edit',
    'User',
    'Type',
    'Year',
    'Requested On',
    'Period',
    'Days',
    'Status',
    'Requester Note',
    'Updated At',
    'Updated Notes',
    'Updated By',
  ];
  const allUserLeaves = useLoaderData() as UserLeavesType[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeadData.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUserLeaves.map((leave) => {
          const {
            _id: leaveId,
            userName,
            leaveType,
            year,
            createdAt,
            startDate,
            endDate,
            days,
            leaveStatus,
            userNotes,
            updatedAt,
            moderatorName,
            moderatorNotes,
          } = leave;

          const updated = parseISO(updatedAt as string);

          return (
            <TableRow key={leaveId}>
              <TableCell>
                <EditLeave leave={leave} />
              </TableCell>
              <TableCell className="capitalize">{userName}</TableCell>
              <TableCell className="capitalize">{leaveType}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>
                {dayjs(createdAt).format('DD/MM/YYYY HH:mm')}
              </TableCell>
              <TableCell>
                <span>{dayjs(startDate).format('DD/MM/YYYY')}</span> {' - '}
                <span>{dayjs(endDate).format('DD/MM/YYYY')}</span>
              </TableCell>
              <TableCell>{days}</TableCell>
              <TableCell className="uppercase">
                <Badge
                  className={`
                    ${leaveStatus === 'approved' && 'bg-green-700'} 
                    ${leaveStatus === 'pending' && 'bg-amber-500'}
                    ${leaveStatus === 'inmoderation' && 'bg-indigo-500'}
                    ${leaveStatus === 'rejected' && 'bg-red-700'}
                    
                    `}
                >
                  {leaveStatus}
                </Badge>
              </TableCell>
              <TableCell>{userNotes}</TableCell>
              <TableCell>
                {formatDistance(subDays(new Date(updated), 0), new Date(), {
                  addSuffix: true,
                })}
              </TableCell>
              <TableCell>{moderatorNotes}</TableCell>
              <TableCell>{moderatorName}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default LeavesTable;
