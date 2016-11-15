import Dashboard from '../pages/app/dashboard/dashboard';
import About from '../pages/app/about/about';

export default {

  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    useAsDefault: true
  },

  about: {
    path: '/about',
    name: 'About',
    component: About
  }

};
