import { IoCalendarOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import customFetch from '@/utils/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    <div className="p-4 rounded-md shadow-md bg-white dark:bg-black">
      <h2 className="text-2xl text-center font-bold tracking-tight">
        Add an Event
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>Add a title to the event.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormDescription>
                  Describe briefly the Event details.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                        variant={'outline'}
                        className={cn(
                          'inline-flex justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <IoCalendarOutline className="w-4 h-4 opacity-90" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default AddEvent;
