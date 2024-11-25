import { FormEvent, useReducer, useState } from 'react';
import { IoPencil } from 'react-icons/io5';
import DialogWrapper from '../globals/DialogWrapper';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { UserBalancesType } from '@/utils/types';

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

type EditBalancesPropsType = {
  balance: UserBalancesType;
};

type StateType = {
  [key: string]: number | undefined;
};

type ActionType = {
  type: string;
  value: number;
};

function EditBalances({ balance }: EditBalancesPropsType) {
  //   console.log(balance);
  const initialState: StateType = {
    annualCredit: balance.annualCredit,
    annualUsed: balance.annualUsed,
    annualAvailable: balance.annualAvailable,
    familyCredit: balance.familyCredit,
    familyUsed: balance.familyUsed,
    familyAvailable: balance.familyAvailable,
    healthCredit: balance.healthCredit,
    healthUsed: balance.healthUsed,
    healthAvailable: balance.healthAvailable,
    maternityCredit: balance.maternityCredit,
    maternityUsed: balance.maternityUsed,
    maternityAvailable: balance.maternityAvailable,
    paternityCredit: balance.paternityCredit,
    paternityUsed: balance.paternityUsed,
    paternityAvailable: balance.paternityAvailable,
    studyCredit: balance.studyCredit,
    studyUsed: balance.studyUsed,
    studyAvailable: balance.studyAvailable,
    unpaidUsed: balance.unpaidUsed,
  };

  const reducer = (state: StateType, action: ActionType) => {
    return { ...state, [action.type]: action.value };
  };

  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange =
    (type: string) => (e: FormEvent<HTMLInputElement>) => {
      dispatch({ type, value: e.currentTarget.valueAsNumber });
    };

  //   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
  //     dispatch({
  //       type: e.currentTarget.name,
  //       value: e.currentTarget.valueAsNumber,
  //     });
  //   };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(balance._id);
    console.log(state);
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
              <Input
                type="number"
                name={value}
                onChange={handleInputChange(value)}
                value={state[value]}
              />
            </div>
          ))}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </DialogWrapper>
  );
}

export default EditBalances;
