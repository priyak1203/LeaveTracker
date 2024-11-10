import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

function Login() {
  const form = useForm();

  return (
    <div className="bg-slate-200 min-h-screen p-10 dark:bg-slate-800">
      <Card className="w-[500px] mx-auto  p-4 ">
        <CardHeader className="text-center">
          <CardTitle className="tracking-wide font-bold text-2xl">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-2 border-slate-600">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        required
                        className="border-slate-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        required
                        className="border-slate-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex pt-6">
                <Button type="submit" className="mx-auto" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
