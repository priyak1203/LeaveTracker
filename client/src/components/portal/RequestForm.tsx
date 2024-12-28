import { useForm } from 'react-hook-form';
import DialogWrapper from '@/components/globals/DialogWrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LeaveTypes } from '@/utils/types';
import { IoCalendarOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import customFetch from '@/utils/axios';
import { AppContextType, useAppContext } from '@/context/appContext';
import toast from 'react-hot-toast';
import {
  CustomFormSelect,
  CustomFormTextarea,
} from '../globals/CustomFormComponents';

const LeaveSchema = z.object({
  leaveType: z.string({ required_error: 'Please select a leave type' }),
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
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'inline-flex justify-between focus:border-purple-700 hover:border-purple-700 ',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <IoCalendarOutline className="h-4 w-4 opacity-90" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      onSelect={field.onChange}
                      selected={field.value}
                      disabled={(date: Date) => {
                        const today = new Date();
                        const currentYear = today.getFullYear();
                        // this disables the older dates than today and next year dates
                        return date < today || date.getFullYear() > currentYear;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* END DATE  */}
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'inline-flex justify-between focus:border-purple-700 hover:border-purple-700',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <IoCalendarOutline className="h-4 w-4 opacity-90" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="p-0 w-auto">
                    <Calendar
                      mode="single"
                      onSelect={field.onChange}
                      selected={field.value}
                      disabled={(date: Date) => {
                        const today = new Date();
                        const currentYear = today.getFullYear();
                        // this disables the older dates than today and next year dates
                        return date < today || date.getFullYear() > currentYear;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
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
