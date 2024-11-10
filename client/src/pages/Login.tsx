import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormCardWrapper from '@/components/globals/FormCardWrapper';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter your email' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
});

function Login() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log('login submit');
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <FormCardWrapper title="Login">
        <Form {...form}>
          <form
            className="space-y-2 border-slate-600"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                      className="border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
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
                      className="border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
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
