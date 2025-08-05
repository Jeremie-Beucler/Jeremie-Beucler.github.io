export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Jérémie Beucler',
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Publications',
    path: '/publications',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
