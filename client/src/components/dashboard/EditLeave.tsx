import { useState } from 'react';
import DialogWrapper from '@/components/globals/DialogWrapper';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from '../ui/select';
import { leaveStatus } from '@/utils/sampleData';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserLeavesType } from '@/utils/types';
import customFetch from '@/utils/axios';
import { AppContextType, useAppContext } from '@/context/appContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type EditLeavePropsType = {
  leave: UserLeavesType;
};

const EditLeaveScheme = z.object({
  notes: z.string().max(200).optional(),
  leaveStatus: z.enum(leaveStatus),
});

function EditLeave({ leave }: EditLeavePropsType) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof EditLeaveScheme>>({
    resolver: zodResolver(EditLeaveScheme),
    defaultValues: {
      notes: '',
    },
  });

  const { user: loggedInUser } = useAppContext() as AppContextType;

  const {
    _id: leaveId,
    days,
    leaveType,
    year,
    startDate,
    userName,
    userEmail,
    user: userId,
  } = leave;

  async function onSubmit(values: z.infer<typeof EditLeaveScheme>) {
    const inputValues = {
      ...values,
      days,
      leaveType,
      year,
      userId,
      userEmail,
      userName,
      startDate,
      moderatorId: loggedInUser?._id,
      moderatorName: loggedInUser?.name,
    };

    try {
      const { data } = await customFetch.patch(
        `/leave/${leaveId}`,
        inputValues
      );
      setOpen(false);
      toast.success(data.msg);
      form.reset();
      navigate('/dashboard/leaves');
    } catch (error: any) {
      const errMsg = error?.response?.data?.msg || `Something went wrong`;
      toast.error(errMsg);
    }
  }

  return (
    <DialogWrapper
      isBtn={true}
      btnTitle="Edit"
      btnSize={'sm'}
      title="Edit Leave"
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* LEAVE TYPE */}
          <FormField
            control={form.control}
            name="leaveStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leave Status</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {leaveStatus.map((status) => (
                      <SelectItem
                        key={status}
                        value={status}
                        className="capitalize"
                      >
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* NOTES */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Notes..." />
                </FormControl>
                <FormDescription>
                  Add extra notes to support your request
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" className="my-4">
            Submit
          </Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}

export default EditLeave;
