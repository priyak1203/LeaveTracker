import dayjs from 'dayjs';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const getDays = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDayofMonth = dayjs().year(year).month(month).startOf('month');
  const lastDayofMonth = dayjs().year(year).month(month).endOf('month');

  const dateArray = [];

  // previous month days
  for (let i = 0; i < firstDayofMonth.day(); i++) {
    dateArray.push({ date: firstDayofMonth.day(i), currentMonth: false });
  }

  // current month days
  for (let i = firstDayofMonth.date(); i <= lastDayofMonth.date(); i++) {
    const currentDate = firstDayofMonth.date(i);
    dateArray.push({
      currentMonth: true,
      date: currentDate,
      today:
        currentDate.toDate().toDateString() === dayjs().toDate().toDateString(),
    });
  }

  // next month days
  const nextMonthDays = 42 - dateArray.length;
  for (
    let i = lastDayofMonth.date() + 1;
    i <= lastDayofMonth.date() + nextMonthDays;
    i++
  ) {
    dateArray.push({ date: lastDayofMonth.date(i), currentMonth: false });
  }

  return dateArray;
};
