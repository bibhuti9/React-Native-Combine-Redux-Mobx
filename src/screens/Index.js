import AddProductScreen from './AddProductScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
export const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    key: 'HomeScreen',
    icon: 'home',
    lable: 'Home',
  },
  {
    name: 'Add Product',
    component: AddProductScreen,
    key: 'AddProductScreen',
    icon: 'add-circle',
    lable: 'Notification',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    key: 'ProfileScreen',
    icon: 'person',
    lable: 'Profile',
  },
];
