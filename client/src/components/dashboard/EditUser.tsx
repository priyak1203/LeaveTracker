import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoPencil } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { departments, titles } from '@/utils/sampleData';
import { UserRole, type UserType } from '@/utils/types';
import customFetch from '@/utils/axios';
import DialogWrapper from '@/components/globals/DialogWrapper';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  CustomFormInput,
  CustomFormSelect,
} from '@/components/globals/CustomFormComponents';

type EditUserPropsType = {
  user: UserType;
};

const EditUserSchema = z.object({
  phone: z.string().max(10).optional(),
  department: z.string({ required_error: 'Provide department' }),
  jobTitle: z.string({ required_error: 'Provide job title' }),
  role: z.nativeEnum(UserRole),
});

function EditUser({ user }: EditUserPropsType) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const jobTitles = titles.map((title) => title.label);
  const depts = departments.map((dept) => dept.label);

  const values = {
    phone: user.phone as string,
    department: user.department as string,
    jobTitle: user.jobTitle as string,
    role: user.role,
  };

  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      phone: user.phone,
      department: user.department,
      jobTitle: user.jobTitle,
      role: user.role,
    },
    values,
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
    form.reset();
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
          <CustomFormInput
            name="phone"
            type="text"
            control={form.control}
            placeholder="Phone"
            border
          />
          {/* DEPARTMENT  */}
          <CustomFormSelect
            name="department"
            control={form.control}
            items={depts}
            placeholder="Select a department"
          />
          {/* TITLE */}
          <CustomFormSelect
            name="jobTitle"
            control={form.control}
            items={jobTitles}
            labelText="job title"
            placeholder="Select a Job Title"
          />
          {/* ROLE */}
          <CustomFormSelect
            name="role"
            control={form.control}
            items={Object.values(UserRole)}
            placeholder="Select a role"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}

export default EditUser;
