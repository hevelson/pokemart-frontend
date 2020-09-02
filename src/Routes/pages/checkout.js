import Cart from '../../pages/company/Cart';

export default [
  {
    path: '/cart',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Cart,
  },
];
