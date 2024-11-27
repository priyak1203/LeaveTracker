import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { UserEventType } from '@/utils/types';

type EventPopOverPropType = {
  date: number;
  event: UserEventType;
};

function EventPopover({ date, event }: EventPopOverPropType) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <h2
              className={cn(
                'bg-purple-200 text-slate-600 border',
                'h-8 w-8 grid place-content-center rounded-lg cursor-pointer hover:bg-purple-800 hover:text-white dark:hover:bg-slate-500'
              )}
            >
              {date}
            </h2>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="shadow-lg">
            <div className="flex flex-col w-32 p-2 text-xs">
              <p className="underline underline-offset-2">{event.title}</p>
              <p>{event.description}</p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default EventPopover;
