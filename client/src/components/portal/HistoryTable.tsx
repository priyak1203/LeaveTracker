import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { leaveHistory } from '@/utils/mockData';
import dayjs from 'dayjs';
import { Badge } from '../ui/badge';
import { formatDistance, subDays } from 'date-fns';

function HistoryTable() {
  const tableHeadData = [
    'Type',
    'Requested On',
    'Period',
    'Days',
    'Status',
    'Updated At',
    'Update Notes',
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
        {leaveHistory.map((history) => {
          const {
            id,
            type,
            createdAt,
            days,
            startDate,
            endDate,
            status,
            notes,
            updatedBy,
          } = history;
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>
                {dayjs(createdAt).format('DD/MM/YYYY HH:MM')}
              </TableCell>
              <TableCell>
                <span>{dayjs(startDate).format('DD/MM/YYYY')}</span> {' - '}
                <span>{dayjs(endDate).format('DD/MM/YYYY')}</span>
              </TableCell>
              <TableCell>{days}</TableCell>
              <TableCell>
                <Badge
                  className={`
                    ${status === 'APPROVED' && 'bg-green-500'} 
                    ${status === 'PENDING' && 'bg-amber-500'}
                    ${status === 'REJECTED' && 'bg-red-500'}
                    ${status === 'INMODERATION' && 'bg-indigo-500'}
                    `}
                >
                  {status}
                </Badge>
              </TableCell>
              <TableCell>
                {formatDistance(subDays(new Date(createdAt), 0), new Date(), {
                  addSuffix: true,
                })}
              </TableCell>
              <TableCell>{notes}</TableCell>
              <TableCell>{updatedBy}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
