/* eslint-disable react/style-prop-object */
import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Paper } from '@material-ui/core';
import { UserContext, DBContext } from '../../../constants/context/context';



const Home = (props) => {
    const { history } = props
    const [datos, guardarDatos] = useState({
        iframe: '',
        nombre: '',
    });
    const [error, guardarError] = useState(false);
    const { iframeService } = useContext(DBContext)
    const user = React.useContext(UserContext);

    const obtenerInformacion = e => {
        guardarDatos({ ...datos, [e.target.name]: e.target.value })
    }
    const { iframe, nombre } = datos
    const guardarIframe = e => {
        e.preventDefault()
        // validación
        if (iframe.trim() === '' || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // guardar el iframe en la BD
        datos.userId = user.uid
        const body = datos;

        setTimeout(() => {
            iframeService.doCreateIframe(body).then(() => {
                alert("La url se guardo correctamente");
            }).catch(e => console.error(e))
        }, 3000)

        // limpiar campo
        guardarDatos({
            iframe: '',
            nombre: ''
        })

    }


    return (
        <div>
            <div>
                {error ? <p style={{
                    backgroundColor: "white",
                    border: "1px solid #D1D1D1",
                    borderRadius: "4px",
                    color: "red",
                    padding: "1rem",
                    fontSize: "2rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontFamily: 'Staatliches, cursive',
                    boxShadow: "none",
                    boxSizing: "border-box",

                }}>{"Todos los campos son obligatorios"}</p> : null}
                <Box component={Paper} padding={2} style={{ marginBottom: '2rem' }}>
                    <form onSubmit={guardarIframe} noValidate>
                        <TextField
                            name="iframe"
                            label={'URL'}

                            margin={'dense'}
                            value={iframe}
                            fullWidth={true}
                            variant={'outlined'}
                            onChange={obtenerInformacion}
                        />
                        <TextField
                            name="nombre"
                            label={'Nombre'}

                            margin={'dense'}
                            value={nombre}
                            fullWidth={true}
                            variant={'outlined'}
                            onChange={obtenerInformacion}
                        />
                        <Button
                            type={"submit"}
                            color={'primary'}
                            style={{ margin: '0.2rem 0rem' }}
                            fullWidth={true}
                            variant={'contained'}
                        >
                            Guardar Iframe
                    </Button>
                    </form>
                    <Button
                        color={'inherit'}
                        style={{ margin: '0.2rem 0rem' }}
                        fullWidth={true}
                        variant={'text'}
                        onClick={() => history.replace('/dashboard/admiiframe')}
                    >
                        ir A administración
                      </Button>
                </Box>
            </div>
        </div>
    )
}




export default Home;