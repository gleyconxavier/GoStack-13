import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={ Dashboard } />
        {/*
            Algo interessante, como o Repository vem autor/repositorio
            ao utilizarmos :repository+ o react-router para de interpretar
            a proxima barra como uma nova rota e assimila tudo como :repository
        */}
        <Route path="/repositories/:repository+" component={ Repository } />
    </Switch>
);

export default Routes;