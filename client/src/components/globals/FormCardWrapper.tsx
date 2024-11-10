import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FormCardPropsType = {
  title?: string;
  children: React.ReactNode;
};

function FormCardWrapper({
  title = 'Please fill details',
  children,
}: FormCardPropsType) {
  return (
    <div className="bg-slate-200 min-h-screen p-10 dark:bg-slate-800">
      <Card className="w-[500px] mx-auto  p-4 ">
        <CardHeader className="text-center">
          <CardTitle className="tracking-wide font-bold text-2xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default FormCardWrapper;
