import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import dayjs from 'dayjs';
import { Badge } from '../ui/badge';
import { formatDistance, parseISO, subDays } from 'date-fns';
import { UserLeavesType } from '@/utils/types';
import { getBadgeClass } from '@/utils/getStyles';

type HistoryPropsType = {
  leaves: UserLeavesType[];
};

function HistoryTable({ leaves }: HistoryPropsType) {
  const tableHeadData = [
    'Type',
    'Requested On',
    'Period',
    'Days',
    'Status',
    'Updated At',
    'Updated Notes',
    'Updated By',
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
        {leaves.map((history) => {
          const {
            _id: id,
            leaveType,
            createdAt,
            days,
            startDate,
            endDate,
            updatedAt,
            leaveStatus,
            moderatorName,
            moderatorNotes,
          } = history;

          const updated = parseISO(updatedAt as string);

          return (
            <TableRow key={id}>
              <TableCell className="capitalize">{leaveType}</TableCell>
              <TableCell>
                {dayjs(createdAt).format('DD/MM/YYYY HH:MM')}
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

export default HistoryTable;
