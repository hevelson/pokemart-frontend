import Home from '../../pages/company/Home';
import Login from '../../pages/users/Login';
import RegisterSuccess from '../../pages/users/RegisterSuccess';

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
  {
    path: '/register-success',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: RegisterSuccess,
  },
];
