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

const EditLeaveScheme = z.object({
  notes: z.string().max(200).optional(),
  leaveStatus: z.enum(leaveStatus),
});

function EditLeave() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof EditLeaveScheme>>({
    resolver: zodResolver(EditLeaveScheme),
    defaultValues: {
      notes: '',
    },
  });

  function onSubmit(values: z.infer<typeof EditLeaveScheme>) {
    console.log(values);
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
                    <SelectTrigger>
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
