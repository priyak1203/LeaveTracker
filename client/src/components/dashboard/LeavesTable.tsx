import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { type UserLeavesType } from '@/utils/types';
import dayjs from 'dayjs';
import { Badge } from '../ui/badge';
import { formatDistance, parseISO, subDays } from 'date-fns';
import EditLeave from './EditLeave';
import { getBadgeClass } from '@/utils/getStyles';

type LeavesTableProps = {
  allUserLeaves: UserLeavesType[];
};

function LeavesTable({ allUserLeaves }: LeavesTableProps) {
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
                <Badge className={getBadgeClass(leaveStatus as string)}>
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
