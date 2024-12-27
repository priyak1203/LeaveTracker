import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormCardWrapper from '@/components/globals/FormCardWrapper';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import customFetch from '@/utils/axios';
import { CustomFormInput } from '@/components/globals/CustomFormComponents';

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
            {/* Name */}
            <CustomFormInput name="name" type="text" control={form.control} />

            {/* Last Name */}
            <CustomFormInput
              name="lastName"
              type="text"
              control={form.control}
              labelText="last name"
            />

            {/* Email */}
            <CustomFormInput name="email" type="email" control={form.control} />

            {/* Password */}
            <CustomFormInput
              name="password"
              type="password"
              control={form.control}
            />

            {/* Phone */}
            <CustomFormInput name="phone" type="text" control={form.control} />

            <div className="flex pt-4">
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
        <h3 className="capitalize text-center text-md mt-2">
          already registered?
          <Link to="/login">
            <Button variant={'link'} className="capitalize ml-0 pl-2 font-bold">
              login
            </Button>
          </Link>
        </h3>
      </FormCardWrapper>
    </>
  );
}

export default Register;
