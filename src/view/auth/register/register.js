import React, { useState, useContext } from "react"; // Modulo de React
import Button from "@material-ui/core/Button";
import registryStyle from "./styles"; // Estilos del componente
import { makeStyles } from "@material-ui/styles";  // Componentes de estilos de Material UI

import classNames from "classnames";
import { AuthContext, DBContext } from "../../../constants/context/context"; // Contextos

//  IMPORT COMPONENTS
import CustomInput from "../../../components/customInput/CustomInput";
import CircularUnderLoad from "../../../components/Spinner/Spinner";
import useForm from "../../../constants/hooks/useForm";
import useField from "../../../constants/hooks/useField";
import PropTypes from 'prop-types';
import { emailHex } from "../../../constants/validators/validators";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(registryStyle);
//validar caracteres en el email.


/**
 * Pagina de registro de usuario
 * @param {*} props Propiedades del componente
 * @param {*} history Historial de navegación
 * @author { Tuberquia } Jose Manuel Graciano
 */

const Register = props => {
    const classes = useStyles();
    const authService = useContext(AuthContext)
    const dbService = useContext(DBContext)
    //valida campos de formulario
    const form = useForm({
        onSubmit: (formData, valid) => {
            if (!valid) return;
            createUserFirebase();
        }
    });

    const namesField = useField(
        "names",
        "",
        [async formData => formData.names.length === 0 && "Campo obligatorio"],
        form
    );

    const lastNamesField = useField(
        "lastNames",
        "",
        [async formData => formData.lastNames.length === 0 && "Campo obligatorio"],
        form
    );


    const usuarioField = useField(
        "usuario",
        "",
        [async formData => formData.usuario.length === 0 && "Campo obligatorio"],
        form
    );

    const emailField = useField(
        "email",
        "",
        [async formData => !emailHex.test(formData.email) && "Email no es valido"],
        form
    );
    const passwordField = useField(
        "password",
        "",
        [
            async formData =>
                formData.password.length <= 5 &&
                "La contraseña debe tener mas de 5 caracteres"
        ],
        form
    );
    const rePasswordField = useField(
        "rePassword",
        "",
        [
            async formData =>
                formData.rePassword !== formData.password &&
                "No coincide con la contraseña ingresada"
        ],
        form
    );
    const [stateSpinner, setStateSpinner] = useState(false);

    /**
     * Funcion para crear el usuario
     * @returns {*} Redireccionamiento a la pagina de Login
     */
    const createUserFirebase = () => {
        let body = {
            names: namesField.value,
            lastNames: lastNamesField.value,
            user: usuarioField.value,
            email: emailField.value
        };
        authService
            .doCreateUserWithEmailAndPassword(emailField.value, passwordField.value)
            .then(user => {
                console.log(user)
                alert("¡Registro existoso!, se ha enviado un correo de validación")
                setStateSpinner(false);
                createUserFireStore(body, user.uid);
                return redirectLogin();
            })
            .catch(e => {
                setStateSpinner(false);
                alert(e.message);
            });
    };

    /**
     * Funcion para crear el documento de usuario
     * @param {*} body Contenido del usuario 
     * @param {*} uid Identificador del usuario
     */
    const createUserFireStore = (body, uid) => {
        dbService.usersService.doCreateUser({
            ...body,
            uid
        });
    };
    /**
     * Funcion para redireccionar a la pagina de login
     */
    const redirectLogin = () => props.history.replace("/auth/login");

    return stateSpinner ? (
        <CircularUnderLoad />
    ) : (
            <Paper className={classNames(classes.root)}>
                <h2 className={classes.title}>
                    Observatorio Registro
                </h2>
                <form onSubmit={form.onSubmit} className={classes.containerForm}>
                    <div className={classes.containerInputs}>
                        <CustomInput
                            label={"Nombres"}
                            {...namesField}
                            classNameContainer={classes.textField}
                        />
                        <CustomInput
                            label={"Apellidos"}
                            {...lastNamesField}
                            classNameContainer={classes.textField}
                        />

                        <CustomInput
                            label={"Usuario"}
                            {...usuarioField}
                            classNameContainer={classes.textField}
                        />
                        <CustomInput
                            label={"Email"}
                            {...emailField}
                            classNameContainer={classes.textField}
                        />
                        <CustomInput
                            label={"Contraseña"}
                            {...passwordField}
                            type="password"
                            classNameContainer={classes.textField}
                        />
                        <CustomInput
                            label={"Confirmar contraseña"}
                            {...rePasswordField}
                            type="password"
                            classNameContainer={classes.textField}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!form.isValid()}
                            className={classes.button}
                        >
                            Registrarse
                      </Button>
                        <p onClick={redirectLogin} className={classes.label}>
                            ¿Ya tienes cuenta? Inicia sesión
                        </p>
                    </div>
                </form>
            </Paper>
        );
};


Register.propTypes = {
    history: PropTypes.object
}


export default Register;
