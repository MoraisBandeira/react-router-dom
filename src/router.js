import React from 'react'
import {BrowserRouter, Switch, Route,  Redirect} from 'react-router-dom'

import Main from './components/main'
import Contatos from './components/contato'
import Sobre from './components/sobre'
import Pesquisa from './components/pesquisa'
import PesquisaID from './components/pesquisaID'
import PageNotFound from './components/pageNotFound'

export default props =>{


    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Main}/>
                <Route path="/contatos" component={Contatos}/>
                <Route path="/pesquisa" exact component={Pesquisa}/>
                <Route path="/pesquisa/:id" component={PesquisaID}/>
                <Route path="/sobre" component={Sobre}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
};