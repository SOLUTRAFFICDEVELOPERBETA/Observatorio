import React from 'react'; // Modulo de React

/**
 * @author {tuberquia2115} Jose Manuel Graciano Tubequia
 */
const AuthContext = React.createContext();
const DBContext = React.createContext();
const UserContext = React.createContext();
const EditRoutesContext = React.createContext();

export {
    AuthContext,
    DBContext,
    UserContext,
    EditRoutesContext
}