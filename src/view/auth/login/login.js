//Importar componetes de material y compontes importados.
import React, { useContext, useState } from 'react'; // Modulo de React
import { makeStyles } from '@material-ui/styles';
import styles from './loginStyles';
import { Link } from 'react-router-dom'
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../../constants/context/context'; // Contextos de la aplicación
import PropTypes from 'prop-types';
import useForm from '../../../constants/hooks/useForm';
import useField from '../../../constants/hooks/useField';
import CustomInput from '../../../components/customInput/CustomInput';
import { emailHex } from '../../../constants/validators/validators';

/**
 * @param {*} props Propiedades del programa
 * @param {*} history Historial de navegación
 * handleLogin
 * Componente validacion del iniciar sesion
 * @author { Tuberquia } Jose Manuel Graciano

 */
const useStyles = makeStyles(styles);
const Login = props => {
    const { history } = props;
    const classes = useStyles();
    const authService = useContext(AuthContext);
    const [menssgeError, setMenssageError] = useState(false);

    const form = useForm({
        onSubmit: (formData, valid) => {
            if (!valid) return;
            authService.doSignInWithEmailAndPassword(formData.email.trim(), formData.password).then(
                res => {
                    history.replace('/observatorio');
                }).catch(error => { setMenssageError(true) })
        }
    });
    const email = useField(
        "email",
        "",
        [
            async formData => !emailHex.test(formData.email) && "Email no es valido",
            async formData => formData.email.length === 0 && "Campo obligatorio"
        ],
        form
    );
    const password = useField(
        "password",
        "",
        [async formData => formData.password.length === 0 && "Campo obligatorio"],
        form
    );

    // Componente para mostrar la alerta de información incorrecta
    const Menssage = () => {

        return (
            <div className={classes.containerMensaje}>
                Datos incorrectos
      </div>
        )
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form className={classes.form} onSubmit={form.onSubmit}>
                    <div className={classes.logo}>
                        <h6 className={classes.title}>
                            <strong>OBSERVATORIO NACIONAL</strong>
                        </h6>
                    </div>
                    <div className={classes.content}>
                        <CustomInput
                            classNameContainer={classes.textField}
                            className={classes.field}
                            required
                            {...email}
                            label={"Email"}
                            type="email"
                        />
                        <CustomInput
                            classNameContainer={classes.textField}
                            className={classes.field}
                            required
                            {...password}
                            label={"Contraseña"}
                            type="password"
                        />
                        {menssgeError && <Menssage />}
                    </div>

                    <div className={classes.actionsContainer}>
                        <Link className={classes.link} to='/auth/password'><i>Olvide mi contraseña</i></Link>
                    </div>
                    <div className={classes.buttonsContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.button}
                        >
                            Iniciar
                       </Button>

                        <Button variant="contained" color="secondary" onClick={() => history.push('/auth/register')} className={classes.button}>
                            Registrarse
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.object
};

export default Login;
