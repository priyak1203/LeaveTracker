import { useForm } from 'react-hook-form';
import DialogWrapper from '@/components/globals/DialogWrapper';
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
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { PiCaretUpDownBold } from 'react-icons/pi';
import { leaveTypes } from '@/utils/sampleData';

import { IoCalendarOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { Textarea } from '../ui/textarea';

function RequestForm() {
  const form = useForm({});

  return (
    <DialogWrapper
      isBtn={true}
      btnTitle="Apply For Leave"
      title="Submit Your Leave Application"
      description="Make sure you select the right dates for leave."
    >
      <Form {...form}>
        <form className="space-y-4">
          {/* LEAVE TYPE */}
          <FormField
            control={form.control}
            name="leave"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Leave Type</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? leaveTypes.find(
                              (leave) => leave.value === field.value
                            )?.label
                          : 'Select a leave'}
                        <PiCaretUpDownBold className="h-4 w-4 ml-2 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0"></PopoverContent>
                </Popover>
              </FormItem>
            )}
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
                          'inline-flex justify-between',
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
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
                          'inline-flex justify-between',
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
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
                  <Textarea placeholder="Notes" {...field} />
                </FormControl>
                <FormDescription>
                  Add extra notes to support your request
                </FormDescription>
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

export default RequestForm;
