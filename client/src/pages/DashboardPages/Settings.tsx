import AddEvent from '@/components/dashboard/AddEvent';
import EventsTable from '@/components/dashboard/EventsTable';
import Container from '@/components/globals/Container';
import customFetch from '@/utils/axios';
import { type UserEventType } from '@/utils/types';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const { data } = await customFetch.get(`/event/all-events`);
  const allEvents: UserEventType[] = data.events;
  return allEvents;
};

function SettingsPage() {
  const events = useLoaderData() as UserEventType[];

  return (
    <Container>
      <div className="my-4 py-6 bg-primary-foreground dark:bg-secondary rounded-md">
        <h2 className="text-xl text-center font-extrabold leading-tight lg:text-2xl">
          Event Settings
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pb-8">
        <AddEvent />
        <div className="col-span-2">
          <EventsTable events={events} />
        </div>
      </div>
    </Container>
  );
}

export default SettingsPage;
