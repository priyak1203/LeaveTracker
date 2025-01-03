import {
  HiMiniComputerDesktop,
  HiOutlineCog6Tooth,
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import { MdOutlineBalance, MdOutlineFormatListBulleted } from 'react-icons/md';
import { TbListCheck } from 'react-icons/tb';

export const adminLinks = [
  { title: 'Portal', url: '/portal', icon: HiMiniComputerDesktop },
  { title: 'Dashboard', url: '/dashboard', icon: HiOutlineSquares2X2 },
  { title: 'Balances', url: '/dashboard/balances', icon: MdOutlineBalance },
  { title: 'Leaves', url: '/dashboard/leaves', icon: TbListCheck },
  { title: 'Users', url: '/dashboard/users', icon: HiOutlineUserGroup },
  { title: 'Settings', url: '/dashboard/settings', icon: HiOutlineCog6Tooth },
  {
    title: 'History',
    url: '/portal/history',
    icon: MdOutlineFormatListBulleted,
  },
];

export const moderatorLinks = [
  { title: 'Portal', url: '/portal', icon: HiMiniComputerDesktop },
  { title: 'Dashboard', url: '/dashboard', icon: HiOutlineSquares2X2 },
  { title: 'Balances', url: '/dashboard/balances', icon: MdOutlineBalance },
  { title: 'Leaves', url: '/dashboard/leaves', icon: TbListCheck },
  { title: 'Users', url: '/dashboard/users', icon: HiOutlineUserGroup },
  { title: 'Settings', url: '/dashboard/settings', icon: HiOutlineCog6Tooth },
  {
    title: 'History',
    url: '/portal/history',
    icon: MdOutlineFormatListBulleted,
  },
];

export const userLinks = [
  { title: 'Portal', url: '/portal', icon: HiMiniComputerDesktop },
  { title: 'History', url: '/portal/history', icon: TbListCheck },
];
