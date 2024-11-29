import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FaRegTrashCan } from 'react-icons/fa6';
import { UserEventType } from '@/utils/types';
import dayjs from 'dayjs';

type EventsPropType = {
  events: UserEventType[];
};

function EventsTable({ events }: EventsPropType) {
  const tableHeadData = ['Title', 'Description', 'Event Date', 'Delete'];

  return (
    <div className="px-6 rounded-lg shadow-md max-h-[50vh] overflow-y-auto bg-primary-foreground dark:bg-secondary border">
      <div className="px-10 py-5 sticky top-0 z-10 shadow-md bg-primary-foreground dark:bg-secondary">
        <h2 className="text-2xl text-center font-bold tracking-tight">
          Events
        </h2>
      </div>

      {events.length < 1 ? (
        <div className="text-center py-10 font-medium">
          <h2 className="text-xl">No events to show</h2>
        </div>
      ) : (
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
              {events.map((event) => (
                <TableRow key={event._id}>
                  <TableCell className="font-medium capitalize">
                    {event.title}
                  </TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>
                    {dayjs(event.startDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <FaRegTrashCan size={14} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default EventsTable;
