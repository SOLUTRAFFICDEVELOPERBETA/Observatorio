import { withStyles } from '@material-ui/core'
import React from 'react';
import AppRouter from '../../containers/Router/Router';
import { authRoutes } from '../../constants/routes/Auth/AuthRoutes'
import { Component } from 'react';
import ErrorBoundary from '../../components/hoc/ErrorBoundary';
import styles from './AuthStyles';
import PropTypes from 'prop-types';
class AuthLayout extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <main className={classes.content}>
                    <ErrorBoundary>
                        <AppRouter routes={authRoutes} />
                    </ErrorBoundary>
                </main>
                
            </>
        )
    }
}

AuthLayout.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AuthLayout);
