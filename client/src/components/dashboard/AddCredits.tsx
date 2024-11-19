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
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

const leaveCreditNames = [
  { label: 'Annual Credit', value: 'annualCredit' },
  { label: 'Health Credit', value: 'healthCredit' },
  { label: 'Study Credit', value: 'studyCredit' },
  { label: 'Family Credit', value: 'familyCredit' },
  { label: 'Maternity Credit', value: 'maternityCredit' },
  { label: 'Paternity Credit', value: 'paternityCredit' },
];

function AddCredits() {
  const [open, setOpen] = useState(false);

  const form = useForm<any>({});

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <DialogWrapper
      isBtn={false}
      title="Add Credits"
      description="The credits you are about to add are for this year only!"
      icon={FaPlus}
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          {leaveCreditNames.map(({ label, value }) => {
            return (
              <FormField
                key={label}
                control={form.control}
                name={`${value}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{`${label}`}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        onChange={field.onChange}
                        value={field.value}
                      />
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
