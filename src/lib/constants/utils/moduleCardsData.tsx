import { ReactNode } from 'react';
import Icon from '../../../components/svg/Icon';
import { ICON_NAME } from '../enums';

interface ModuleLink {
  title: string;
  url: string;
}

export interface Module {
  icon: ReactNode;
  title: string;
  links: ModuleLink[];
  ctaLink: string;
}

export const MODULES: Module[] = [
  {
    icon: <Icon name={ICON_NAME.PEOPLE} />,
    title: 'People',
    links: [
      {
        title: 'Add New User Profiles',
        url: 'docs/users/add-users',
      },
      {
        title: 'Bulk Upload User Data',
        url: 'docs/users/user-bulk-upload',
      },
      {
        title: 'Manage Job Role Families',
        url: 'docs/job-families',
      },
      {
        title: 'Manage and Assign Teams',
        url: 'docs/teams',
      },
    ],
    ctaLink: 'docs/users/',
  },
  {
    icon: <Icon name={ICON_NAME.LEAVE} />,
    title: 'Leave',
    links: [
      {
        title: 'Apply Leave Request',
        url: 'docs/leave/manage-your-leaves',
      },
      {
        title: 'Review and Approve Leave',
        url: 'docs/leave/manage-leave-requests',
      },
      {
        title: 'Manage Leave Entitlements',
        url: 'docs/leave/leave-entitlements',
      },
      {
        title: 'Manage Leave types',
        url: 'docs/leave/leave-types',
      },
    ],
    ctaLink: 'docs/leave/',
  },
  {
    icon: <Icon name={ICON_NAME.ATTENDANCE} />,
    title: 'Attendance',
    links: [
      {
        title: 'Clock-in and Clock-out',
        url: 'docs/time-attendance/clock-in-clock-out',
      },
      {
        title: 'Manage your Timesheet',
        url: 'docs/time-attendance/timesheet',
      },
      {
        title: 'Apply Time Entry Requests',
        url: 'docs/time-attendance/manual-time-entries',
      },
      {
        title: 'Review and Approve Time Requests',
        url: 'docs/time-attendance/manage-time-requests',
      },
    ],
    ctaLink: 'docs/time-attendance/',
  },
];
