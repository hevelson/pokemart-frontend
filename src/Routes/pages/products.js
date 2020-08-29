import Detail from '../../pages/products/Detail';

export default [
  {
    path: '/product/:id',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Detail,
  },
];
