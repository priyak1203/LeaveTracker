import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import customFetch from '@/utils/axios';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  CustomFormDatePicker,
  CustomFormInput,
  CustomFormTextarea,
} from '@/components/globals/CustomFormComponents';

const EventSchema = z.object({
  title: z.string({ required_error: 'Please provide a title' }).max(30),
  description: z
    .string({ required_error: 'Please add a description' })
    .max(500),
  startDate: z.date({ required_error: 'A start date is required' }),
});

function AddEvent() {
  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof EventSchema>) {
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate.toISOString(),
      };
      const { data } = await customFetch.post(`/event/create`, formattedValues);
      toast.success(data.msg);
      form.reset();
      navigate('/dashboard/settings');
    } catch (error: any) {
      const errMsg = error?.response?.data?.msg || `Something went wrong`;
      toast.error(errMsg);
    }
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-primary-foreground dark:bg-secondary border">
      <h2 className="text-2xl text-center font-bold tracking-tight">
        Add an Event
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* TITLE */}
          <CustomFormInput
            name="title"
            type="text"
            control={form.control}
            placeholder="Title"
            description="Add a title to the event."
            border
          />
          {/* DESCRIPTION */}
          <CustomFormTextarea
            name="description"
            placeholder="Description..."
            control={form.control}
            description=" Describe briefly the Event details."
          />
          {/* START DATE */}
          <CustomFormDatePicker
            name="startDate"
            control={form.control}
            labetText="start date"
            event
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default AddEvent;
