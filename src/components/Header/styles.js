/**

 * @author { tuberquia } Jose Manuel Garciano
 * @description 
 * HEADER
 * Estilos de Header
 */
const headerStyle = theme => ({
    containerTitle: {},
    containerNameCompany: {
        position: "absolute",
        left: "calc(50% - 10rem)",
        textAlign: "center"
    },
    containerPerfil: {
        justifyContent: "flex-end",
        display: "flex"
    },
    home: {
        display: "flex",
        flexGrow: 1,
    }
});
export default headerStyle;