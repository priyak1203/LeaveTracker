import { NavLink } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { createElement } from 'react';

type LinkPropsType = {
  links: { title: string; url: string; icon: React.ElementType }[];
};

export const RenderIconsLinks = ({ links }: LinkPropsType) => {
  return (
    <>
      {links.map((link, index) => (
        <NavLink to={link.url} key={index} className="my-1">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-slate-50 p-2 text-slate-500 rounded-md dark:bg-black">
                  {createElement(link.icon, { size: 24 })}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={2}>
                {link.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavLink>
      ))}
    </>
  );
};

export const RenderLinks = ({ links }: LinkPropsType) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <NavLink to={link.url} key={index} className="my-2">
            <span className="flex items-center justify-between">
              <span className="px-3">
                {createElement(link.icon, { size: 24 })}
              </span>
              <span className="w-24">{link.title}</span>
            </span>
          </NavLink>
        );
      })}
    </>
  );
};
