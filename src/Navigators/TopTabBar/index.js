import HomeTop from './HomeTop';
import ProfileTop from './ProfileTop';
import NotificationTop from './NotificationTop';

export const topScreens = [
  {
    name: 'Home',
    lable: 'Home',
    key: 'Home',
    component: HomeTop,
  },
  {
    name: 'Notification',
    lable: 'Notifications',
    key: 'Notification',
    component: NotificationTop,
  },
  {
    name: 'Profile',
    lable: 'Profile',
    key: 'Profile',
    component: ProfileTop,
  },
];
