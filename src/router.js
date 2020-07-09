import React from 'react'
import {BrowserRouter, Switch, Route,  Redirect} from 'react-router-dom'

import Main from './components/main'
import Contatos from './components/contato'
import Sobre from './components/sobre'
import Pesquisa from './components/pesquisa'
import PageNotFound from './components/pageNotFound'

export default props =>{


    return(
        <BrowserRouter>
            <Switch>
                <Redirect from="/login" to="/" />
                <Route path="/" exact component={Main}/>
                <Route path="/contatos" component={Contatos}/>
                <Route path="/pesquisa" component={Pesquisa}/>
                <Route path="/pesquisa/:userId" component={Pesquisa}/>
                <Route path="/sobre" component={Sobre}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
};