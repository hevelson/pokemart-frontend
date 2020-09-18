import Home from '../../pages/company/Home';
import Login from '../../pages/users/Login';
import RegisterSuccess from '../../pages/users/RegisterSuccess';
import Profile from '../../pages/users/Profile';
import OrderSuccess from '../../pages/company/OrderSuccess';
import OrderDetail from '../../pages/users/Order';

export default [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/register-success',
    exact: true,
    auth: false,
    component: RegisterSuccess,
  },
  {
    path: '/profile',
    exact: true,
    auth: false,
    component: Profile,
  },
  {
    path: '/profile/order/detail',
    exact: true,
    auth: false,
    component: OrderDetail,
  },
  {
    path: '/order-success',
    exact: true,
    auth: false,
    component: OrderSuccess,
  },
];
