import TextField from "@material-ui/core/TextField";
import React from "react"; // Modulo de React
import PropTypes from "prop-types"; // Proptypes para definir las propiedades de un componente
/**
 * @author Jose Manuel Graciano
 * @param {*} props Propiedades del componente
 * @param {array} errors Determinante de si hay errores o no en el Campo
 * @param {boolean} multiline Determinante de si se admiten mas de una linea de texto
 * @param {number} rowsMax Numero maximo de lineas admitidas en el texto. 
 * @description
 * CustomInput
 * Componente... CAMPO personalizado.
 */
const CustomInput = props => {
  const { errors, multiline, rowsMax } = props;
  const hasErrors = Boolean(errors) && Boolean(errors.length > 0); // Determinate de si hay errores
  return (
    <div className={props.classNameContainer}>
      <TextField
        style={{ marginTop: "0px", marginBottom: "0px" }}
        label={props.label}
        value={props.value}
        fullWidth
        error={hasErrors}
        margin="normal"
        helperText={hasErrors ? props.errors[0] : " "}
        required={props.required}
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        multiline={multiline}
        rowsMax={rowsMax}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  errors: PropTypes.array,
  multiline: PropTypes.bool,
  rowsMax: PropTypes.number
};
CustomInput.defaultProps = {
  multiline: false,
  rowsMax: 4
};

export default CustomInput;