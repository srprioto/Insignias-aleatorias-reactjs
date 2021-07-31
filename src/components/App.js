import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>

            {/* Funciona bien */}
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} /> 
                </Switch>
            </Layout>


            {/* La pagina de 404 se ve en todos lados */}
            {/* <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} /> 
                </Layout>
            </Switch> */}


        </BrowserRouter>
    );
}

export default App;