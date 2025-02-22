import { useState } from 'react';
import dayjs from 'dayjs';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import Container from '@/components/globals/Container';
import { months, daysOfTheWeek, getDays } from '@/utils/getDays';
import { cn } from '@/lib/utils';
import { UserEventType } from '@/utils/types';
import EventPopover from './EventPopover';

type PortalCalenderPropType = {
  events: UserEventType[];
};

function PortalCalendar({ events }: PortalCalenderPropType) {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <Container>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-5 px-10 rounded-t-md bg-primary text-primary-foreground">
        <h2 className="select-none font-semibold">
          {months[today.month()]}, {today.year()}
        </h2>
        <div className="flex items-center gap-6">
          <IoMdArrowDropleft
            className="h-5 w-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setToday(today.month(today.month() - 1))}
          />
          <h2
            className="cursor-pointer hover:scale-105 transition-all"
            onClick={() => setToday(currentDate)}
          >
            Today
          </h2>
          <IoMdArrowDropright
            className="h-5 w-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setToday(today.month(today.month() + 1))}
          />
        </div>
      </div>
      {/* DAYS OF THE MONTH */}
      <section className="py-2 rounded-b-md border bg-primary-foreground dark:bg-secondary dark:border-t-0">
        <div className="grid grid-cols-7">
          {daysOfTheWeek.map((day, index) => (
            <h2
              key={index}
              className="h-10 font-bold grid place-content-center"
            >
              {day}
            </h2>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {getDays(today.month(), today.year()).map((item, index) => {
            const { date, currentMonth, today } = item;
            const event = events.find((event) =>
              dayjs(event.startDate).isSame(date, 'day')
            );

            return (
              <div key={index} className="h-10  grid place-content-center ">
                {!event ? (
                  <h2
                    className={cn(
                      !currentMonth && 'text-slate-400',
                      'h-8 w-8 grid place-content-center rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary',
                      today &&
                        'bg-primary text-primary-foreground hover:bg-picton-blue-400 dark:hover:bg-picton-blue-400 dark:hover:text-primary-foreground'
                    )}
                  >
                    {date.date()}
                  </h2>
                ) : (
                  <EventPopover
                    event={event}
                    date={date.date()}
                    today={today as boolean}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}

export default PortalCalendar;
