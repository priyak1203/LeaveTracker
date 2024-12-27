import { Control } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type CustomFormInputProps = {
  name: string;
  type: string;
  control: Control<any>;
  labelText?: string;
};

export function CustomFormInput({
  name,
  type,
  control,
  labelText,
}: CustomFormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <FormControl>
            <Input type={type} {...field} className="border-slate-300" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
