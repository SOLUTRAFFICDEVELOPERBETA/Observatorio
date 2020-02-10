import Home from "../../../view/dashboard/home/home";
import Admin from "../../../view/dashboard/admin/admin";
import Observatorio from "../../../view/dashboard/observatorio/observatorio";
import { Folder, ViewList } from '@material-ui/icons';
const startPath = '/dashboard/';

const dashboardRoutes = [

    {
        path: `${startPath}home`,
        name: 'Inicio',
        component: Home,
        ico: Folder

    },
    {
        path: `${startPath}admiiframe`,
        name: 'Administración',
        component: Admin,
        ico: ViewList
    },
    {
        path: startPath + "observatorio/id/:idFrame",
        hidden: true,
        component: Observatorio
    },
    {
        redirect: true,
        hidden: true,
        to: `${startPath}home`,
    },
]

export {
    startPath,
    dashboardRoutes
}