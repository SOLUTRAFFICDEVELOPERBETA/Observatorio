import React from 'react'; // Modulo de React
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import headerStyle from './styles';
import ProfileMenu from '../profile/profileButton';
import { defaultStartPath } from '../../config';
import { Toolbar, Button } from '@material-ui/core';


/**
 * @author { Zestian } Sebastian Botero, 
 * @author { tuberquia } Jose Manuel Garciano
 * @author Jose Fauricio Valencia
 * @author { Dalox } Jesus Daniel Neira Lara
 * @param {*} props Propiedades del componente
 * @description 
 * HEADER
 * Componente de encabezamiento de la pagina.
 */
const Header = ({ classes, authService, history, user }) => {
    const handleLogout = () => {
        authService.doSignOut();
        history.push("/auth/login");
    };
    return (
        <React.Fragment>
            <AppBar position="absolute">
                <Toolbar>
                    <div color="inherit" className={classes.home}>
                        <Button size="large" color="inherit" onClick={() => history.replace(defaultStartPath)}>
                            <strong>Observatorio</strong>
                        </Button>
                    </div>
                    <ProfileMenu
                        onLogOut={handleLogout}
                        user={user}
                    />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Header.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object.isRequired,
    authService: PropTypes.object,
    history: PropTypes.object
};

export default withStyles(headerStyle)(Header);