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
  today: boolean;
};

function EventPopover({ date, event, today }: EventPopOverPropType) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <h2
              className={cn(
                'bg-picton-blue-600 border',
                'h-8 w-8 grid place-content-center rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground dark:hover:bg-picton-blue-300 dark:hover:text-primary',
                today &&
                  'bg-primary text-primary-foreground hover:bg-picton-blue-400 dark:hover:bg-picton-blue-400 dark:hover:text-primary-foreground'
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
