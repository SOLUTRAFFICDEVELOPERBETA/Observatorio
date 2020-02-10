import React, { useState } from "react"; // Modulo de React
import { makeStyles } from "@material-ui/styles";  // Componentes de estilos de Material UI
import Styles from "./styles"; // Estilos del componente
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types"; // Proptypes para definir las propiedades de un componente
import { IconButton } from "@material-ui/core"; // Componentes de Material UI

const useStyles = makeStyles(Styles);

/**
 
 * @author { Tuberquia } Jose Manuel Graciano
 * @param {*} onLogOut Funcion de cierre de sesión
 * @description
 * ProfileMenu
 * @description
 * Componente... vista del menu de las acciones el usuario
 */
const ProfileMenu = ({ onLogOut, user }) => {
    // variables de tipo booleano cambia constantemente
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <IconButton
                className={classes.button}
                aria-owns={() => (Boolean(anchorEl) ? "simple-menu" : undefined)}
                aria-haspopup="true"
                onClick={e => setAnchorEl(e.currentTarget)}
            >
                <Avatar
                    className={classes.img}>{user.names[0]}</Avatar>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={onLogOut}>Cerrar sesión</MenuItem>
            </Menu>
        </div>
    );
};

ProfileMenu.propTypes = {
    classes: PropTypes.object,
    onLogOut: PropTypes.func,
    user: PropTypes.object
};
export default ProfileMenu;