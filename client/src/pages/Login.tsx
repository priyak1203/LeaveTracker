import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
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
import { Link, useNavigate } from 'react-router-dom';
import { AppContextType, useAppContext } from '@/context/appContext';
import customFetch from '@/utils/axios';

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

  const isSubmitting = form.formState.isSubmitting;
  const navigate = useNavigate();

  const { setUser } = useAppContext() as AppContextType;

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      const { data } = await customFetch.post('/auth/login', values);
      setUser(data.user);
      toast.success('Login Successful');
      setTimeout(() => {
        navigate('/portal');
      }, 1000);
    } catch (error: any) {
      console.log(error);
      const msg =
        error?.response?.data?.msg || `something went wrong, try again`;
      toast.error(msg);
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
              <Button
                type="submit"
                className="mx-auto"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : ' Submit'}
              </Button>
            </div>
          </form>
        </Form>
        <h3 className="capitalize text-center text-md mt-4">
          not registered yet?
          <Link to="/register">
            <Button variant={'link'} className="capitalize ml-0 pl-2 font-bold">
              register
            </Button>
          </Link>
        </h3>
      </FormCardWrapper>
    </>
  );
}

export default Login;
