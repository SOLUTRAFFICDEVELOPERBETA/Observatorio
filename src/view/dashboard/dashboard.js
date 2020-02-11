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
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { usersService } = useContext(DBContext);
    const authService = useContext(AuthContext);
    const classes = useStyles();


    useEffect(() => {
        setIsLoading(true)
        usersService.doObserveCurrentUser(user => {
            if (!user.exists) {
                alert("Usuario no registrado");
                history.replace('/auth/login/');
            }
            if (user.data()) {
                setUser(user.data())
            }
            setIsLoading(false);
        })

    }, [usersService, authService, history])

    if (!authService.doCheckAuth()) {
        return <Redirect to={'/auth/login/'} />;
    }


    return (
        <>
            {isLoading ? <SpinkiSpinner /> : (
                <UserContext.Provider value={user}>
                    <div className={classes.root}>
                        <Nav
                            history={history}
                            authService={authService}
                            user={user} />
                    </div>
                </UserContext.Provider>
            )}
        </>
    )
}
export default DashboardLayout;