import { Button } from '@/components/ui/button';
import MonthDateRangePicker from '@/components/dashboard/MonthDateRangePicker';
import StatsCards from '@/components/dashboard/StatsCards';
import Container from '@/components/globals/Container';

function DashboardPage() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row py-6 items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <MonthDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div>
        <StatsCards />
      </div>
    </Container>
  );
}

export default DashboardPage;
