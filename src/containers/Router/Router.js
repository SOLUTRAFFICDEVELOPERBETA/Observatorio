import React from 'react';
import { Redirect, Route, Switch } from 'react-router';


/**
 * Contener del Enrutamiento de la aplicación
 * @param props Propiedades del componente
 */
function AppRouter({ routes }) {
    return (
        <Switch>
            {routes.map((prop, key) => {
                if (prop.redirect)
                    return <Redirect exact={prop.exact} from={prop.path} to={prop.to} key={key} />;
                return <Route path={prop.path} exact={prop.exact} component={prop.component} key={key} />;
            })
            }
        </Switch>
    );
}

export default AppRouter;
