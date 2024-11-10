import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormCardWrapper from '@/components/globals/FormCardWrapper';

function Login() {
  const form = useForm();

  return (
    <>
      <FormCardWrapper title="Login">
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
      </FormCardWrapper>
    </>
  );
}

export default Login;
