import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { leavesData } from '@/utils/mockData';

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
        {leavesData.map((leave) => (
          <TableRow key={leave.id}>
            <TableCell>edit</TableCell>
            <TableCell>{leave.name}</TableCell>
            <TableCell>{leave.type}</TableCell>
            <TableCell>{leave.year}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{leave.status}</TableCell>
            <TableCell>{leave.req_note}</TableCell>
            <TableCell>{leave.updated}</TableCell>
            <TableCell>{leave.updated_note}</TableCell>
            <TableCell>{leave.updatedBy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LeavesTable;
