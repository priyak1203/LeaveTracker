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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormCardWrapper from '@/components/globals/FormCardWrapper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import customFetch from '@/utils/axios';

const RegisterSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
  lastName: z.string({ message: 'last must be a string' }).optional(),
  phone: z.string({ message: 'Phone number must be a string' }).optional(),
});

function Register() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      const { data } = await customFetch.post(`/auth/register`, values);

      toast.success(data.msg);
      navigate('/login');
    } catch (error: any) {
      console.log(error);
      const msg =
        error?.response?.data?.msg || `something went wrong, try again`;
      toast.error(msg);
    }
  }

  return (
    <>
      <FormCardWrapper title="Register">
        <Form {...form}>
          <form
            className="space-y-2 border-slate-600"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
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
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
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
      </FormCardWrapper>
    </>
  );
}

export default Register;
