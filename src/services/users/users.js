import Firebase from "../firebase/firebase"; // Contructor de Firebase

/**
 * @author { tuberquia2115 } Jose Manuel Graciano Tubequia
 * @param {} props
 * UsersService
 * Componente...Realiza una instancia a la configuracion de firebase
 *  para crear un servicio de usuario
 */
class UsersService {
    constructor() {
        this.usersProvider = new Firebase();
    }
    /**
     * Funcion para crear el documento del usuario
     * @param {*} user Información del usuario
     * @returns {Promise}
     */
    doCreateUser = (user) => {
        this.usersProvider.doCreateUser(user);
    }
    /**
     * Funcion para obtener el usuario actual en sesión
     * @returns {Promise}
     */
    doObserveCurrentUser = (func) => {
        const user = JSON.parse(localStorage.getItem('authUser'));
        return this.usersProvider.doObserveCollectionDocument('users', user.uid, func);
    };
    /**
     * Funcion para editar la información de un usuario
     * @param {string} id identificador del usuario
     * @param {*} newData Nuevo contedio del documento
     * @returns {Promise}
     */
    doEditUser = (id, newData) => {
        return this.usersProvider.doEditUser(id, newData)
    }
    /**
     * 
     * @returns {Promise}
     */
    doGetUser = (id) => {
        return this.usersProvider.doGetUser(id)

    }
    doDeleteUser = id => {
        return this.usersProvider.doDeleteUser(id)
    }
    doGetAllUsers = () => {
        return this.usersProvider.doGetAllUsers()
    }

}


export default UsersService;