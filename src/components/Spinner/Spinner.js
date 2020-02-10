import React from "react"; // Modulo de React
import { CircularProgress } from "@material-ui/core";
/**
 * @author Jose Manuel Graciano
 * CircularUnderLoad
 * Componente personalizado de Spinner
 */
export const CircularUnderLoad = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
            <CircularProgress disableShrink color="primary" size={props.size ? props.size : 90} />
            <h4>{props.children}</h4>
        </div>
    );
};

export default CircularUnderLoad;