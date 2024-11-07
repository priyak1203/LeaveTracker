import { Card, CardContent } from '@/components/ui/card';

type LeaveCardProps = {
  year?: string;
  leaveType?: string;
  credit?: number;
  used?: number;
  balance?: number;
};

function LeaveCard({ year, leaveType, credit, used, balance }: LeaveCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col p-3 space-y-2">
        <div className="flex items-center justify-between py-1 px-2 bg-purple-200 rounded-md font-semibold dark:bg-slate-800">
          <h4>{year}</h4>
          <h4>{leaveType}</h4>
        </div>
        <p className="flex justify-between items-center px-2 text-sm">
          <span>Credit</span>
          <span>{credit}</span>
        </p>
        <p className="flex justify-between items-center px-2 text-sm">
          <span>Used</span>
          <span>{used}</span>
        </p>
        <p className="flex justify-between items-center px-2 text-sm">
          <span>Remaining</span>
          <span>{balance}</span>
        </p>
      </CardContent>
    </Card>
  );
}

export default LeaveCard;
