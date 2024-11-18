import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type IconType } from 'react-icons/lib';
import { Button } from '@/components/ui/button';
import React from 'react';

type DialogPropsType = {
  children: React.ReactNode;
  isBtn: boolean;
  btnTitle?: string;
  title?: string;
  description?: string;
  icon?: IconType;
  open?: boolean;
  setOpen?: () => void;
};

function DialogWrapper({
  children,
  isBtn,
  btnTitle,
  title,
  description,
  icon: Icon,
  open,
  setOpen,
}: DialogPropsType) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isBtn ? (
          <Button className="text-white">{btnTitle}</Button>
        ) : (
          Icon && (
            <span>
              <Icon className="text-purple-600 cursor-pointer h-5 w-5 mx-auto" />
            </span>
          )
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DialogWrapper;
