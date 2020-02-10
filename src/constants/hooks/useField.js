import { useState, useEffect } from "react"; // Modulo de React
import PropTypes from 'prop-types';


/**
 * @author { Tuberquia } Jose Manuel Graciano
 * @param {string} name Nombre del elemento
 * @param {string} defaultValue Valor por defecto
 * @param {string} validators Validadores del componente
 * @param {*} form Formulario al que pertenece
 * useField.
 * Componente se encarga de la validar los campos del formulario.
 */
export const useField = (name, defaultValue, validators, form) => {
    let [value, setValue] = useState(defaultValue);
    let [errors, setErrors] = useState([]);
    let [dirty, setDirty] = useState(false);
    const validate = async () => {
        let formData = form.getFormData();
        let errorMessages = await Promise.all(
            validators.map(validation => validation(formData, name))
        )
        errorMessages = errorMessages.filter(errorMsg => !!errorMsg);
        setErrors(errorMessages);
        let fieldValid = errorMessages.length === 0;
        return fieldValid;
    }
    useEffect(() => {
        if (!dirty) return;
        form.validateFields([name]);

    }, [value, dirty, name, form]);
    let field = {
        name,
        value,
        errors,
        validate,
        onChange: e => {
            if (!dirty) {
                setDirty(true);
            }
            setValue(e.target.value);
        }
    }
    form.addField(field);
    return field;
}
useField.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.array,
    validators: PropTypes.object,
    form: PropTypes.array

}

export default useField;