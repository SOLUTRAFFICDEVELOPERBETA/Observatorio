import React from 'react'
import AppRouter from '../containers/Router/Router';
import { appRoutes } from '../constants/routes/AppRoutes';
/**
 * @author { Tuberquia } Jose Manuel Graciano
 */
export default function MainLayout() {
    return (
        <>
            <AppRouter routes={appRoutes} />
        </>
    )
}