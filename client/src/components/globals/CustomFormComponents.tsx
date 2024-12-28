import { Control } from 'react-hook-form';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { IoCalendarOutline } from 'react-icons/io5';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

type CustomFormInputProps = {
  name: string;
  type: string;
  control: Control<any>;
  labelText?: string;
  description?: string;
  placeholder?: string;
  border?: boolean;
};

export function CustomFormInput({
  name,
  type,
  control,
  labelText,
  description,
  placeholder,
  border,
}: CustomFormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <FormControl>
            <Input
              type={type}
              {...field}
              placeholder={placeholder}
              className={border ? 'border' : 'border-slate-300'}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormTextareaProps = {
  name: string;
  control: Control<any>;
  description: string;
  placeholder: string;
  labelText?: string;
};

export function CustomFormTextarea({
  name,
  control,
  labelText,
  description,
  placeholder,
}: CustomFormTextareaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  placeholder: string;
  labelText?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  placeholder,
  labelText,
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormDatePickerProps = {
  name: string;
  control: Control<any>;
  labetText?: string;
  event?: boolean;
};

export function CustomFormDatePicker({
  name,
  control,
  labetText,
  event,
}: CustomFormDatePickerProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="capitalize">{labetText || name}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    'inline-flex justify-between',
                    event
                      ? 'border'
                      : 'focus:border-purple-700 hover:border-purple-700',
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
                  return event
                    ? date < new Date()
                    : date < today || date.getFullYear() > currentYear;
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
