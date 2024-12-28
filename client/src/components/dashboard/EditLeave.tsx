import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import DialogWrapper from '@/components/globals/DialogWrapper';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  CustomFormSelect,
  CustomFormTextarea,
} from '@/components/globals/CustomFormComponents';
import { LeaveStatus } from '@/utils/types';
import { UserLeavesType } from '@/utils/types';
import customFetch from '@/utils/axios';
import { AppContextType, useAppContext } from '@/context/appContext';

type EditLeavePropsType = {
  leave: UserLeavesType;
};

const EditLeaveScheme = z.object({
  notes: z.string().max(200).optional(),
  leaveStatus: z.nativeEnum(LeaveStatus),
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
          {/* LEAVE STATUS */}
          <CustomFormSelect
            name="leaveStatus"
            control={form.control}
            items={Object.values(LeaveStatus)}
            placeholder="Select a status"
            labelText="leave status"
          />
          {/* NOTES */}
          <CustomFormTextarea
            name="notes"
            control={form.control}
            placeholder="Notes..."
            description="Add extra notes to support your request"
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
