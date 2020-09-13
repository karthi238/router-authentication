import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

const Dashboard = (props) => {
    console.log(props)
    return (
        <div onClick={() => props.history.push(`${props.match.path}/internal`)}>
            Dashboard
            <Switch>
                <Route path={`${props.match.path}/internal`} component={Internal} />
            </Switch>
        </div>
    );
};

const Internal = () => {
    return <h2>Internal</h2>
}

export default withRouter(Dashboard);