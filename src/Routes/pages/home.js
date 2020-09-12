import Home from '../../pages/company/Home';
import Login from '../../pages/users/Login';

export default [
  {
    path: '/',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Login,
  },
];
