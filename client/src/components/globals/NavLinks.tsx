import { NavLink } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { createElement } from 'react';

type Props = {
  links: { title: string; url: string; icon: React.ElementType }[];
};

export const RenderIconsLinks = ({ links }: Props) => {
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
