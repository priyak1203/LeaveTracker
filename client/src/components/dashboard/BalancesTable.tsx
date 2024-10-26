import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function BalancesTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>head</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default BalancesTable;
