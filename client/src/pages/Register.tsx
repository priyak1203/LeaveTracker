import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log('submit function');
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-slate-200 min-h-screen p-10 dark:bg-slate-800">
      <Card className="w-[500px] mx-auto  p-4 ">
        <CardHeader className="text-center">
          <CardTitle className="tracking-wide font-bold text-2xl">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
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

export default Register;
