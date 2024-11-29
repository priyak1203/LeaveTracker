import { HiOutlineUserGroup } from 'react-icons/hi2';
import { TbListCheck } from 'react-icons/tb';
import { BsCalendar4Event } from 'react-icons/bs';
import { MdOutlineBalance } from 'react-icons/md';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createElement } from 'react';

function StatsCards() {
  const statsCardsData = [
    {
      key: 'leave',
      title: 'Total Leaves',
      change: -2,
      value: 10,
      icon: TbListCheck,
    },
    {
      key: 'user',
      title: 'Total Users',
      change: 4,
      value: 45,
      icon: HiOutlineUserGroup,
    },
    {
      key: 'event',
      title: 'Upcoming Events',
      change: -20,
      value: 5,
      icon: BsCalendar4Event,
    },
    {
      key: 'balance',
      title: 'Balances Added',
      change: 3,
      value: 20,
      icon: MdOutlineBalance,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsCardsData.map((stat) => {
        return (
          <Card
            key={stat.key}
            className="bg-primary-foreground dark:bg-secondary"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {createElement(stat.icon, { size: 24 })}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">
                <span className="flex items-center my-2">
                  {stat.change > 0 ? (
                    <HiArrowNarrowUp className="text-green-500" size={16} />
                  ) : (
                    <HiArrowNarrowDown className="text-red-500" size={16} />
                  )}
                  {stat.change}
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default StatsCards;
