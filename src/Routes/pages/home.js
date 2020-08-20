import Home from '../../pages/company/Home';

export default [
  {
    path: '/',
    exact: true,
    auth: false,
    groups: ['guest'],
    component: Home,
  },
];
