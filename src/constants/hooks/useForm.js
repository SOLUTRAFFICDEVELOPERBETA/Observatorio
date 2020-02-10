
/**
 * @author { Tuberquia } Jose Manuel Graciano
 * @param {*} props
 * @param {*} onSubmit Funcion para la validación del formulario
 * Componente, restriciones del formulario y validar datos
 */
export const useForm = ({ onSubmit }) => {
    let fields = [];
    const getFormData = () => {

        //Obtener un objeto que contiene datos en forma sin formato
        return fields.reduce((formData, field) => {
            formData[field.name] = field.value;
            return formData;
        }, {});
    };
     // campos validados
      // validar lo que llego;
    const validateFields = async (fieldNames) => {
        let fieldsToValidate = fieldNames instanceof Array ?
            fields.filter(field =>
                fieldNames.includes(field.name)
            ) : fields;
        let fieldsValid = await Promise.all(
            fieldsToValidate.map(field => field.validate())
        );
        let formValid = fieldsValid.every(isValid => isValid === true);
        return formValid;
    };
    return {
        onSubmit: async e => {
            e.preventDefault();
            // Evitar el envío de formularios por defecto
            const isValid = await validateFields();
            return onSubmit(getFormData(), isValid);
        },
        addField: field => {
            fields.push(field)
        },
        getFormData,
        isValid: () => {
            const valid = fields.every(f => f.errors.length === 0);
            return valid;
        },
        validateFields
    };
}

export default useForm;
