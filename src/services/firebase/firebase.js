import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { serverConfig } from "../../config/index";

const getOptions = {
    source: "server"
};



class Firebase {
    constructor() {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(serverConfig);
        } else {
            app = firebase.app();
        }

        this.auth = app.auth(); // Autentificación de Firebase
        this.firestore = app.firestore(); // Aplicación de Firestore
        this.firebaseStorage = firebase.storage(); // Aplicación de Firebase Storage
        this.storage = firebase.storage().ref(); // Referencia de ruta a almacenamiento
        this.userCollection = this.firestore.collection("users"); // Collección de Usuarios
        this.iframeCollection = this.firestore.collection("iframes");
    }

    /**
   * Función para Crear un usuario con correo u contraseña
   * @param {string} email Correo del usuario a crear
   * @param {string} password Contraseña del usuario
   * @returns {Promise}
   */
    doCreateUserWithEmailAndPassword = async (email, password) => {
        return this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(res => res.user);
    };
    /**
     * Función para iniciar sesión con correo u contraseña
     * @param {string} email Correo del usuario a crear
     * @param {string} password Contraseña del usuario
     * @returns {Promise}
     */
    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    };
    /**
     * Función para cerrar sesión
     * @returns {Promise}
     */
    doSignOut = () => {
        return this.auth.signOut();
    };
    /**
     * Función para Recuperar la contraseña del usuario
     * @param {string} email Correo del usuario
     * @returns {Promise}
     */
    doPasswordReset = email => {
        return this.auth.sendPasswordResetEmail(email);
    };
    /**
     * Función para cambiar la contraseña del usuario
     * @param {string} password Contraseña nueva
     * @returns {Promise}
     */
    doPasswordUpdate = password => {
        return this.auth.currentUser.updatePassword(password);
    };
    /**
       * Funcion para obtener el estado de la autentificacion
       * @param {*} func 
       * @returns {Promise}
       */
    doCheckAuth = func => {
        return this.auth.onAuthStateChanged(func);
    };
    /**
   * @author Jesus Daniel Neira Lara
   * @param {string} email Correo del usuario
   * @param {string} password Contraseña del usuario
   * @returns {Promise}
 */
    doGetCredential = (email, password) => {
        return firebase.auth.EmailAuthProvider.credential(email, password);
    }
    /**
 * Función para reautentificar la usuario
 * @param {*} credential Credenciales para la reautentificacion
 * @returns {Promise}
 */
    doReAuthenticate = credential => {
        return firebase.auth().currentUser.reauthenticateWithCredential(credential);
    }

    /**
   * Funcion para crear la información de la colleción de usuarios
   * @param {*} user Información del usuario
   * @returns {Promise}
   */
    doCreateUser = user => {
        return this.userCollection.doc(user.uid).set({
            ...user,
            role: ""
        });
    };

    /**
 * Funcion para crear la información de la colleción de usuarios
 * @param {*} user Información del usuario
 * @returns {Promise}
 */
    doGetUser = id => {
        return this.userCollection.doc(id).get(getOptions);
    };

    /**
  * Función para observar el contenido de un documento.
  * @param collection Nombre de la colección
  * @param docId Identificador del documento
  * @param func Función de observación
  */
    doObserveCollectionDocument = (
        collection,
        docId,
        func
    ) => {
        return this.firestore
            .collection(collection)
            .doc(docId)
            .onSnapshot(func);
    };
    /**
   * Funcion para editar la información de la colleción de usuarios
   * @param {string} id Identificador del usuario
   * @param {*} data Nueva información
   * @returns {Promise}
   */
    doEditUser = (id, newData) => {
        return this.userCollection.doc(id).set(
            {
                ...newData
            },
            {
                merge: true
            }
        );
    };
    /**
  * Funcion para borrar la información de la colleción de usuarios
  * @param {*} id Identificador del usuario
  * @returns {Promise}
  */
    doDeleteUser = id => {
        return this.userCollection.doc(id).delete();
    };

    /**
   * Funcion para obtener la información de todos los usuarios
   * @returns {Promise}
   */
    doGetAllUsers = () => {
        return this.userCollection.get(getOptions);
    };

    doCreateCollectionDocument = (collection, data) => {
        return this.firestore.collection(collection).add(data)
    }
    doEditCollectionDocument = (collection, docId, newData) => {
        return this.firestore.collection(collection).doc(docId).set({ ...newData }, { merge: true })
    }
    doGetCollectionDocument = (collection, docId) => {
        return this.firestore.collection(collection).doc(docId).get(getOptions);
    }
    doDeleteCollectionDocumento = (collection, docId) => {
        return this.firestore.collection(collection).doc(docId).delete();
    }
    doObserveCollectionDocument = (
        collection,
        docId,
        func
    ) => {
        return this.firestore
            .collection(collection)
            .doc(docId)
            .onSnapshot(func);
    };
    doGetAllCollectionDocument = (collection) => {
        return this.firestore.collection(collection).get(getOptions);
    };
}
export default Firebase;
