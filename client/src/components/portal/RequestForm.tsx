import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { AppContextType, useAppContext } from '@/context/appContext';
import customFetch from '@/utils/axios';
import { LeaveTypes } from '@/utils/types';
import DialogWrapper from '@/components/globals/DialogWrapper';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  CustomFormDatePicker,
  CustomFormSelect,
  CustomFormTextarea,
} from '@/components/globals/CustomFormComponents';

const LeaveSchema = z.object({
  leaveType: z.nativeEnum(LeaveTypes),
  startDate: z.date({ required_error: 'A start date is required' }),
  endDate: z.date({ required_error: 'An end date is required' }),
  userNotes: z.string().max(500).optional(),
});

function RequestForm() {
  const [open, setOpen] = useState(false);

  const { user } = useAppContext() as AppContextType;

  const form = useForm<z.infer<typeof LeaveSchema>>({
    resolver: zodResolver(LeaveSchema),
    defaultValues: {
      userNotes: '',
      leaveType: LeaveTypes.Annual,
    },
  });

  async function onSubmit(values: z.infer<typeof LeaveSchema>) {
    const inputValues = {
      ...values,
      userName: user?.name,
      userEmail: user?.email,
    };

    try {
      const { data } = await customFetch.post(
        '/leave/apply-leave',
        inputValues
      );
      toast.success(data.msg);
      setOpen(false);
      form.reset();
    } catch (error: any) {
      const errMsg = error?.response?.data?.msg || `Something went wrong.`;
      toast.error(errMsg);
    }
  }

  return (
    <DialogWrapper
      isBtn={true}
      btnTitle="Apply For Leave"
      title="Submit Your Leave Application"
      description="Make sure you select the right dates for leave."
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/* LEAVE TYPE */}
          <CustomFormSelect
            name="leaveType"
            control={form.control}
            items={Object.values(LeaveTypes)}
            placeholder="Select a leave type"
            labelText="leave type"
          />
          {/* START DATE  */}
          <CustomFormDatePicker
            name="startDate"
            control={form.control}
            labetText="start date"
          />
          {/* END DATE  */}
          <CustomFormDatePicker
            name="endDate"
            control={form.control}
            labetText="end date"
          />
          {/* NOTES */}
          <CustomFormTextarea
            name="userNotes"
            labelText="notes"
            control={form.control}
            placeholder="Notes..."
            description="Add extra notes to support your request"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}

export default RequestForm;
