import { firebaseConfig } from "./firebase/config";
//Direccion de la inicio
const defaultStartPath = '/dashboard/';
const defaultServerURL = 'http://localhost:3000/'
/**
 * @author { Tuberquia } Jose Manuel Graciano
 * @param {} props
 * serverConfig
 * Componete... configuracion de firebase
 */
const serverConfig = firebaseConfig;

export {
    defaultServerURL,
    defaultStartPath,
    serverConfig
}