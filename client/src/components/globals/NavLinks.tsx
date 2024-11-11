import { NavLink } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { createElement } from 'react';
import { adminLinks, moderatorLinks, userLinks } from '@/utils/links';

type LinkPropsType = {
  links: { title: string; url: string; icon: React.ElementType }[];
};

const RenderIconsLinks = ({ links }: LinkPropsType) => {
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

const RenderLinks = ({ links }: LinkPropsType) => {
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

type NavLinksPropsType = {
  userRole?: string;
  renderStyle: string;
};

export const RenderNavLinks = ({
  userRole = '',
  renderStyle,
}: NavLinksPropsType) => {
  // admin links
  if (userRole === 'admin' && renderStyle === 'ICON') {
    return <RenderIconsLinks links={adminLinks} />;
  }
  if (userRole === 'admin' && renderStyle === 'LINKS') {
    return <RenderLinks links={adminLinks} />;
  }

  // moderator links
  if (userRole === 'moderator' && renderStyle === 'ICON') {
    return <RenderIconsLinks links={moderatorLinks} />;
  }
  if (userRole === 'moderator' && renderStyle === 'LINKS') {
    return <RenderLinks links={moderatorLinks} />;
  }

  // user links
  if (userRole === 'user' && renderStyle === 'ICON') {
    return <RenderIconsLinks links={userLinks} />;
  }
  if (userRole === 'user' && renderStyle === 'LINKS') {
    return <RenderLinks links={userLinks} />;
  }

  return null;
};
