import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FaRegTrashCan } from 'react-icons/fa6';
import { eventsData } from '@/utils/mockData';

function EventsTable() {
  const tableHeadData = ['Title', 'Description', 'Event Date', 'Delete'];

  return (
    <div className="px-6 rounded-lg shadow-md max-h-[50vh] overflow-y-auto bg-white dark:bg-black ">
      <div className="px-10 py-5 sticky top-0 z-10 shadow-md bg-white dark:bg-black">
        <h2 className="text-2xl text-center font-bold tracking-tight">
          Events
        </h2>
      </div>
      <div className="relative overflow-x-auto mt-2">
        <Table>
          <TableHeader className="whitespace-nowrap">
            <TableRow>
              {tableHeadData.map((item, index) => (
                <TableHead key={index}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="whitespace-nowrap">
            {eventsData.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>
                  <FaRegTrashCan size={14} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EventsTable;
