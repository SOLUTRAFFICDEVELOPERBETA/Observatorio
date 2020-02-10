import { flexCenterRow } from '../../../styles/styles';
/**
 * Estilos de la pagina de Registro
 * @param {*} theme Tema de la aplicación
 * @author { Tuberquia } Jose Manuel Graciano
 */
const registryStyle = theme => ({
  root: {
    display: 'flex',
    flexBasis: "25rem",
    padding: '1rem 0',
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
    maxHeight: '90vh',
  },
  containerForm: {
    marginLeft: '1vw',
    marginRight: '1vw',
  },
  containerNames: {
    ...flexCenterRow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '22vw',
  },
  terms: {
    ...flexCenterRow,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    fontSize: '0.9rem',
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    ...flexCenterRow
  },
  textField: {
    width: '22vw',
  },
  textNames: {
    width: '10vw',
  },
  containerInputs: {
    ...flexCenterRow,
    flexDirection: 'column'
  },
  label: {
    fontSize: '0.8em',
    color: '#43425D',
    marginTop: 10,
    cursor: 'pointer'
  },
  aceptTerms: {
    color: '#43425D',
  },
  Checkbox: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  conditions: {
    color: 'red',
    fontSize: '0.7em',
    position: 'relative',
    top: -15
  },
  containerTermsAndConditions: {
    height: "4rem",
    width: '100%'
  }
})
export default registryStyle;