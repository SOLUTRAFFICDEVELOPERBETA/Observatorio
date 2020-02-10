import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core'

const PaperGenerico = ({ texto, boton, botonText, functionBoton }) => {
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={3} square style={{ padding: '3rem' }}
        >
            <Typography variant="h3" align="center">{texto}</Typography>
            {boton ? <Button
                fullWidth={true}
                color="primary"
                style={{ margin: '0.5rem 0rem' }}
                variant="contained"
                onClick={functionBoton}>{botonText}</Button> : null}
        </Paper>
    </div>)
}
export default PaperGenerico;