import { useState } from 'react';
import { cn } from '@/lib/utils';
import { addMonths, endOfMonth, formatDate, startOfMonth } from 'date-fns';
import { type DateRange } from 'react-day-picker';
import { IoCalendarOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

function MonthDateRangePicker() {
  const currentMonth = new Date();
  const lastMonth = addMonths(currentMonth, -1);

  const startDate = startOfMonth(lastMonth);
  const endDate = endOfMonth(currentMonth);

  const [date, setDate] = useState<DateRange | undefined>({
    from: startDate,
    to: endDate,
  });

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[260px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <IoCalendarOutline className="mr-2 w-4 h-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDate(date.from, 'LLL dd, y')} -{' '}
                  {formatDate(date.to, 'LLL dd, y')}
                </>
              ) : (
                <>{formatDate(date.from, 'LLL dd,y')}</>
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MonthDateRangePicker;
