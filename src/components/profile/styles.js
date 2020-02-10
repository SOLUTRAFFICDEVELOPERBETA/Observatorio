
/**
 * @author { tuberquia2115 } Jose Manuel Graciano Tubequia
 * @param {*} theme Estilos de la aplicación
 * @description Nav
 * @description Componete.. menu de la pagina principal.
 */
const navStyle = theme => ({
    containerToolbar: {
        display: 'flex',
        justifyContent: "center",
        height: '2rem'
    },
    isSelect: {
        height: 3,
        width: '40%',
        background: '#455a64',
        marginLeft: '30%'
    },
    typography: {
        color: '#4B4B4B',
        textDecoration: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 6,
        '&:hover': {
            color: '#455a64'
        },
        '&:active': {
            color: '#455a64'
        }


    },
    selectTypography: {
        color: '#455a64',
        textDecoration: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontWeight: 'bold',
        marginTop: 12,
        fontSize: 15,
    },
    nav: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: "space-around",
        maxWidth: '1200px'
    },
    navItem: {
        textDecoration: 'none',
        padding: "5px",
        height: "100%",
        borderBottom: 'solid 1px "455a64"',
        transition: "border-bottom .3s ease-in",
        position: "relative"
    },
    active: {
        "&:after": {
            position: "absolute",
            top: "100%",
            left: "0",
            content: "' '",
            width: '100%',
            height: '3px',
            background: "#455a64"
        }
    },
})
export default navStyle