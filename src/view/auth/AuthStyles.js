import {flexCenterRow} from '../../styles/styles'
/**
 * Estilos de la capa de Administración
 * @param {*} theme Tema de la aplicación
 * @author { tuberquia2115 } Jose Manuel Graciano Tuberquia
 */
const authStyle = theme => ({
    content: {
        position:'relative',
        width: '100vw',
        height: '100vh',
        ...flexCenterRow,
        zIndex: 10,
        backgroundImage: '-webkit-linear-gradient(top left, #bddfeb 0%, #6c888a 40%, #b3cac7 100%)',
       
    }
})

export default authStyle;