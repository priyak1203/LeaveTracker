import { FaPlus } from 'react-icons/fa6';
import DialogWrapper from '@/components/globals/DialogWrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { type UserType } from '@/utils/types';
import customFetch from '@/utils/axios';
import toast from 'react-hot-toast';

type AddCreditPropsType = {
  user: UserType;
};

const leaveCreditNames = [
  { label: 'Annual Credit', type: 'annualCredit' },
  { label: 'Health Credit', type: 'healthCredit' },
  { label: 'Study Credit', type: 'studyCredit' },
  { label: 'Family Credit', type: 'familyCredit' },
  { label: 'Maternity Credit', type: 'maternityCredit' },
  { label: 'Paternity Credit', type: 'paternityCredit' },
];

const initialCreditValues: { [key: string]: number } = {
  annualCredit: 0,
  healthCredit: 0,
  studyCredit: 0,
  familyCredit: 0,
  maternityCredit: 0,
  paternityCredit: 0,
};

function AddCredits({ user }: AddCreditPropsType) {
  const [open, setOpen] = useState(false);
  const [creditValues, setCreditValues] = useState(initialCreditValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCreditValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.valueAsNumber,
    }));
  }

  async function submitCredits(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const year = new Date().getFullYear().toString();
    const creditData = {
      year,
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      ...creditValues,
    };

    try {
      const { data } = await customFetch.post(
        `/leave/add-leave-credits`,
        creditData
      );
      toast.success(data.msg);
    } catch (error: any) {
      const errMsg = error?.response?.data?.msg || `Something went wrong`;
      toast.error(errMsg);
    }
    setOpen(false);
    setCreditValues(initialCreditValues);
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
      <form onSubmit={submitCredits}>
        {leaveCreditNames.map(({ label, type }) => {
          return (
            <div key={label} className="my-2">
              <Label htmlFor={type}>{label}</Label>
              <Input
                type="number"
                name={type}
                value={creditValues[type]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <Button type="submit" className="my-2">
          Submit
        </Button>
      </form>
    </DialogWrapper>
  );
}

export default AddCredits;
