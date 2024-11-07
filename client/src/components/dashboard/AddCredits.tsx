import { FaPlus } from 'react-icons/fa6';
import DialogWrapper from '@/components/globals/DialogWrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { leaveTypes } from '@/utils/sampleData';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function AddCredits() {
  const form = useForm({});
  const suffix = 'Credit';

  return (
    <DialogWrapper
      isBtn={false}
      title="Add Credits"
      description="The credits you are about to add are for this year only!"
      icon={FaPlus}
    >
      <Form {...form}>
        <form className="space-y-2">
          {leaveTypes.slice(0, leaveTypes.length - 1).map(({ label }) => {
            return (
              <FormField
                key={label}
                control={form.control}
                name={`${label}${suffix}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{`${label} ${suffix}`}</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}

export default AddCredits;
