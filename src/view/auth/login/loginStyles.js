import { flexCenterRow, flexRowWrap } from "../../../styles/styles";
/**
 * Estilos de la pagina de Login
 * @param {*} theme Tema de la aplicación
 */
const loginStyle = theme => ({
  root: {
    ...flexCenterRow,
    width: "26rem",
    minHeight: "23rem",
  },
  paper: {
    width: "100%",
    height: "100%",
    padding: "2rem",
    position: "relative"
  },
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between"
  },
  logo: {
    ...flexCenterRow,
    fontSize: "2rem",
    height: "3rem"
  },
  title: {
    fontWeight: "200",
    textAling: "center"
  },
  containerMensaje: {
    color: "#d93025",
    lineHeigth: "normal",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  content: {
    ...flexRowWrap,
    padding: "3rem,"
  },
  textField: {
    width: "100%",
    margin: "0 1rem"
  },
  field: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: "gray"
  },
  inputsContainer: {},
  actionsContainer: {
    ...flexCenterRow,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "1rem",
    fontSize: "0.8rem",
    color: "gray"
  },
  buttonsContainer: {
    ...flexCenterRow,
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  button: {
    width: "8rem",
    padding: "0.5rem",
    margin: "1rem"
  }
});

export default loginStyle;
