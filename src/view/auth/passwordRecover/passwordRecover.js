import React from 'react';
import { Box, Button, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../constants/context/context';

/**
 * Componente para la recuperación de la contraseña del usuario.
 * @param props Propiedades del componente.
 */
const PasswordRecover = (props) => {
    const { history } = props; // Propiedades del componente
    const [email, setEmail] = React.useState('');
    const authService = React.useContext(AuthContext); // Contexto de Autentificación

    /**
     * Método para enviar el correo de recuperación de contraseña.
     */
    const sendEmail = () => {
        authService
            .doPasswordReset(email)
            .then(() => alert('El correo de recuperación a sido enviado'))
            .catch((e) => alert(e.message));
    }
    return (
        <Box component={Paper} padding={3} style={{maxWidth:'40%'}}>
            <Typography variant="h3" align="center">Observatorio</Typography>
            <Typography variant={'body1'}>
                Para recuperar su contraseña, escriba su correo y a el le llegara su correo de restauración
             </Typography>
            <TextField
                label={'Correo'}
                type={'email'}
                margin={'dense'}
                value={email}
                fullWidth={true}
                variant={'outlined'}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <Email color={'primary'} />
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                color={'inherit'}
                style={{ margin: '0.2rem 0rem' }}
                fullWidth={true}
                variant={'text'}
                onClick={() => history.replace('/auth/login')}
            >
                volver
              </Button>
            <Button
                color={'primary'}
                style={{ margin: '0.2rem 0rem' }}
                fullWidth={true}
                variant={'contained'}
                onClick={sendEmail}
            >
                enviar
              </Button>
        </Box>
    );
};

export default withRouter(PasswordRecover);