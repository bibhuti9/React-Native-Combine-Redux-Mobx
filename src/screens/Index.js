import AddProductScreen from './AddProductScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
export const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    key: 'HomeScreen',
    icon: 'home',
  },
  {
    name: 'Add Product',
    component: AddProductScreen,
    key: 'AddProductScreen',
    icon: 'add-circle',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    key: 'ProfileScreen',
    icon: 'person',
  },
];
