import AddEvent from '@/components/dashboard/AddEvent';
import EventsTable from '@/components/dashboard/EventsTable';
import Container from '@/components/globals/Container';

function SettingsPage() {
  return (
    <Container>
      <div className="my-4 py-6 bg-white dark:bg-black">
        <h2 className="text-xl text-center font-extrabold leading-tight lg:text-2xl">
          Event Settings
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pb-8">
        <AddEvent />
        <div className="col-span-2">
          <EventsTable />
        </div>
      </div>
    </Container>
  );
}

export default SettingsPage;
