import AuthLayout from '../../view/auth/auth';
import DashboardLayout from '../../view/dashboard/dashboard';

// Rutas de la aplicación.
const startPath = '/';
const appRoutes = [
    {
        name: 'Autentificación',
        path: `${startPath}auth`,
        component: AuthLayout,
    },
    {
        name: 'Dashboard',
        path: `${startPath}dashboard`,
        component: DashboardLayout,
    },
    {
        redirect: true,
        to: `${startPath}dashboard`,
    },
];

export {
    appRoutes,
    startPath
};