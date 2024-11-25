import { FormEvent, useState } from 'react';
import { IoPencil } from 'react-icons/io5';
import DialogWrapper from '../globals/DialogWrapper';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const balanceCategories = [
  { label: 'annual credit', value: 'annualCredit' },
  { label: 'annual used', value: 'annualUsed' },
  { label: 'annual available', value: 'annualAvailable' },
  { label: 'family credit', value: 'familyCredit' },
  { label: 'family used', value: 'familyUsed' },
  { label: 'family available', value: 'familyAvailable' },
  { label: 'health credit', value: 'healthCredit' },
  { label: 'health used', value: 'healthUsed' },
  { label: 'health available', value: 'healthAvailable' },
  { label: 'maternity credit', value: 'maternityCredit' },
  { label: 'maternity used', value: 'maternityUsed' },
  { label: 'maternity available', value: 'maternityAvailable' },
  { label: 'paternity credit', value: 'paternityCredit' },
  { label: 'paternity used', value: 'paternityUsed' },
  { label: 'paternity available', value: 'paternityAvailable' },
  { label: 'study credit', value: 'studyCredit' },
  { label: 'study used', value: 'studyUsed' },
  { label: 'study available', value: 'studyAvailable' },
  { label: 'unpaid used', value: 'unpaidUsed' },
];

function EditBalances() {
  const [open, setOpen] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submitting form');
  }

  return (
    <DialogWrapper
      isBtn={false}
      title="Edit Credits"
      icon={IoPencil}
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-3 gap-2 my-3 ">
          {balanceCategories.map(({ label, value }, index) => (
            <div key={index}>
              <Label className="capitalize">{label}</Label>
              <Input type="number" name={value} />
            </div>
          ))}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </DialogWrapper>
  );
}

export default EditBalances;
