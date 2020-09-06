import Cart from '../../pages/company/Cart';
import Checkout from '../../pages/company/Checkout';

export default [
  {
    path: '/cart',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Cart,
  },
  {
    path: '/checkout',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Checkout,
  },
];
