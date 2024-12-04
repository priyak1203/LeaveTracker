import { NavLink } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { createElement } from 'react';
import { adminLinks, moderatorLinks, userLinks } from '@/utils/links';
import { RenderStyle, UserRole } from '@/utils/types';

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
                <button className="p-2 rounded-md text-primary dark:text-primary-foreground">
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
            <span className="flex items-center justify-between text-primary dark:text-primary-foreground">
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
  if (userRole === UserRole.ADMIN && renderStyle === RenderStyle.ICON) {
    return <RenderIconsLinks links={adminLinks} />;
  }
  if (userRole === UserRole.ADMIN && renderStyle === RenderStyle.LINKS) {
    return <RenderLinks links={adminLinks} />;
  }

  // moderator links
  if (userRole === UserRole.MODERATOR && renderStyle === RenderStyle.ICON) {
    return <RenderIconsLinks links={moderatorLinks} />;
  }
  if (userRole === UserRole.MODERATOR && renderStyle === RenderStyle.LINKS) {
    return <RenderLinks links={moderatorLinks} />;
  }

  // user links
  if (userRole === UserRole.USER && renderStyle === RenderStyle.ICON) {
    return <RenderIconsLinks links={userLinks} />;
  }
  if (userRole === UserRole.USER && renderStyle === RenderStyle.LINKS) {
    return <RenderLinks links={userLinks} />;
  }

  return null;
};
