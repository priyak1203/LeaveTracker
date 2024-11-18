import { IoPencil } from 'react-icons/io5';
import DialogWrapper from '@/components/globals/DialogWrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { z } from 'zod';
import { departments, titles, userRoles } from '@/utils/sampleData';
import { zodResolver } from '@hookform/resolvers/zod';
import { roleType, type UserType } from '@/utils/types';
import customFetch from '@/utils/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type EditUserPropsType = {
  user: UserType;
};

const EditUserSchema = z.object({
  phone: z.string().max(10).optional(),
  department: z.string({ required_error: 'Provide department' }),
  jobTitle: z.string({ required_error: 'Provide job title' }),
  role: z.enum(userRoles),
});

function EditUser({ user }: EditUserPropsType) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      phone: user.phone,
      department: user.department,
      jobTitle: user.jobTitle,
      role: user.role as roleType,
    },
  });

  async function onSubmit(values: z.infer<typeof EditUserSchema>) {
    try {
      const { data } = await customFetch.patch(`/users/${user._id}`, values);
      toast.success(data.msg);
      setOpen(false);
      form.reset();
      navigate('/dashboard/users');
    } catch (error: any) {
      const errMsg = error?.response?.data?.msg || `Something went wrong`;
      toast.error(errMsg);
    }
  }

  return (
    <DialogWrapper
      isBtn={false}
      title="Edit User"
      icon={IoPencil}
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {/* PHONE  */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* DEPARTMENT  */}
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="capitalize">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments.map((department) => (
                      <SelectItem
                        key={department.id}
                        value={department.label}
                        className="capitalize"
                      >
                        {department.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TITLE */}
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="uppercase">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Job Title" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {titles.map((title) => (
                      <SelectItem
                        key={title.id}
                        value={title.label}
                        className="uppercase"
                      >
                        {title.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ROLE */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="uppercase">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {userRoles.map((role, index) => (
                      <SelectItem
                        key={index}
                        value={role}
                        className="uppercase"
                      >
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}

export default EditUser;
