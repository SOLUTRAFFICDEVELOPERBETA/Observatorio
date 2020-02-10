/* eslint-disable object-curly-spacing */
import login from '../../../view/auth/login/login';
import password from '../../../view/auth/passwordRecover/passwordRecover';
import register from '../../../view/auth/register/register';

// Rutas de la autentificación.
const startPath = '/auth/';
const authRoutes = [
    {
        name: 'Login',
        path: `${startPath}login`,
        component: login,
    },
    {
        name: 'Recuperación de contraseña',
        path: `${startPath}password`,
        component: password,
    },
    {
        name: 'Registro',
        path: `${startPath}register`,
        component: register,
    },
    {
        redirect: true,
        to: `${startPath}login`,
    },
];

export { authRoutes, startPath };