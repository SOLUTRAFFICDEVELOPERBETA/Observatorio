import Firebase from "../firebase/firebase"; // Contructor de Firebase

/**
 * @param {} props
 * AuthService
 * Componenente..servicio de auntenticacion con firebase
 * @author { Tuberquia } Jose Manuel Graciano
 */

class AuthService {
    constructor() {
        this.authProvider = new Firebase();
    }
    /**
     * Funcion para crear un nuevo usuario
     * @param {string} email Correo del usuario a crear
     * @param {string} password Contraseña del usuario a crear
     * @returns {Promise}
     */
    doCreateUserWithEmailAndPassword = async (email, password) => {
        return this.authProvider.doCreateUserWithEmailAndPassword(email, password);
    }
    /**
     * Funcion para realizar le inicio de sesión
     * @param {string} email Correo del usuario a autentificar
     * @param {string} password Contraseña del usuario
     * @returns {Promise}
     */
    doSignInWithEmailAndPassword = async (email, password) => {
        return this.authProvider.doSignInWithEmailAndPassword(email, password);
    }
    /**
     * Funcion para cerrar sesión
     * @returns {Promise}
     */
    doSignOut = async () => {
        localStorage.removeItem('authUser');
        return this.authProvider.doSignOut();
    }
    /**
     * Funcion para reiniciar la contraseña del usuario
     * @param {string} email Correo del usuario
     * @returns {Promise}
     */
    doPasswordReset = async (email) => {
        return this.authProvider.doPasswordReset(email);
    }
    /**
     * Funcion para cambiar la contraseña del usuario
     * @param {string} password Contraseña Nueva.
     * @returns {Promise}
     */
    doPasswordUpdate = async (password) => {
        return this.authProvider.doPasswordUpdate(password);
    }
    /**
     * Funcion para observar el estado de autentificación
     * @param {*} func Funcion de realización del usuario
     * @returns {Promise}
     */
    observeAuthState = async func => {
        return this.authProvider.doCheckAuth(func)
    }
    /**
     * Funcion para obtener la informaicón del usuario activo
     * @param {*} user usuario
     * @returns {Promise}
     */
    doCheckAuth = () => {
        return  JSON.parse(localStorage.getItem('authUser'));
    }
    /**
     * Función para realizar la autentificación del usuario
     * @param {*} user Usuario
     */
    doAuthenticate = user => {
        if (user) {
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('authUser');
        }
    }
    /**
     * Funcion para obtener las credenciales del usuario
     * @param {string} email Correo del usuario
     * @param {string} paasword Contraseña del usuario
     * @returns {Promise}
     */
    doGetCredential = (email, password) => {
        return this.authProvider.doGetCredential(email, password);
    }
    /**
     * Funcion para realizar la reautentificación de la sesión
     * @param {*} credential Credenciales del usuario
     * @returns {Promise}
     */
    doReAuthenticate = credentials => {
        return this.authProvider.doReAuthenticate(credentials);
    }
    
}


export default AuthService;