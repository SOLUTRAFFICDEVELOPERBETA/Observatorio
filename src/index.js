import React, { useEffect } from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthService, UsersService, IframeService } from './services/index';
import { AuthContext, DBContext } from './constants/context/context'

import MainLayout from './view/main'

/**
 * @author { Dalox } Jesus Daniel Neira Lara
 * @author Fauricio Valencia
 * @author { Zestian } Sebastian Botero
 * @author { Tuberquia } Jose Manuel Graciano
 */

//Componente de estilos
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: "#0d47a1"
        },
        delete: {
            main: "#ab0b0b"
        },
        secondary: {
            main: "#e3f2fd"
        }
    }
});

const authService = new AuthService();
const usersService = new UsersService();
const iframeService = new IframeService()

const MainApp = () => {
    useEffect(() => {
        authService.observeAuthState(user => {
            if (user) {
                authService.doAuthenticate(user);
            } else {
                authService.doAuthenticate(null)
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={authService}>
            <DBContext.Provider value={{
                usersService: usersService,
                iframeService: iframeService
            }}>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <MainLayout />
                    </MuiThemeProvider>
                </Router>
            </DBContext.Provider>
        </AuthContext.Provider>



    )
}

render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
