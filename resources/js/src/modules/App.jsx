import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import Navbar from '../components/Navbar';
import routes from './routes';

const NavbarRouter = withRouter(({history}) => (
    <Navbar history={history}></Navbar>
))

const Landing = () => {
    const DefaultContainer = () => (
        <React.Fragment>
            <NavbarRouter />
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                <Route component={() => <h1 className="mt80 mb110 text-center">Not found</h1>}/>
            </Switch>
        </React.Fragment>
    )
    return <BrowserRouter >
            <Switch>
                <Route exact path="/login" component={({ history }) => <h3 onClick={() => history.push('/app')}>Login Page</h3>}  />
                <DefaultContainer />
            </Switch>
        </BrowserRouter >;
}

export default Landing;