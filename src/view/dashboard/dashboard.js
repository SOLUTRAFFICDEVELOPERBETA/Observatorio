import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';
import { UserContext, AuthContext, DBContext } from '../../constants/context/context';
import dashboardStyles from './dashboardStyles'
import Nav from '../../components/Nav';
import SpinkiSpinner from '../../components/SpinkiSpinner/SpinkiSpinner';
const useStyles = makeStyles(dashboardStyles);

const DashboardLayout = (props) => {
    const { history } = props;
    const [data, setData] = useState();
    const { usersService } = useContext(DBContext);
    const authService = useContext(AuthContext);
    const classes = useStyles();


    useEffect(() => {
        const obtenerInfoData = async () => {
            await usersService.doObserveCurrentUser(async (user) => {
                if (!user.exists && !user.data()) {
                    await authService.doSignOut().then(() => {
                        alert("Usuario no registrado");
                        history.replace('/auth/login/');
                    });
                }

                setData(user.data())


            });
        };
        obtenerInfoData();

    }, [usersService, authService, history])
    console.log("Esta es la data que me llega", data)
    if (!authService.doCheckAuth()) {
        return <Redirect to={'/auth/login/'} />;
    }


    if (!data) {
        return <SpinkiSpinner />;
    }

    return (
        data && (
            <UserContext.Provider value={data}>
                <div className={classes.root}>
                    <Nav
                        history={history}
                        authService={authService}
                        user={data} />
                </div>
            </UserContext.Provider>
        )
    )
}
export default DashboardLayout;