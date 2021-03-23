// import { useState } from 'react';
import {useLocation, Route, Switch, Redirect} from "react-router-dom";
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import MenuHeader from './components/MenuHeader';
import NotFound from './routes/NotFound';
import Footer from './components/Footer';


import cn from 'classnames'

import s from './routes/style.module.css'
import Firebase from './service/firebase'
import {FireBaseContext} from "./context/FirebaseContext";


const App = () => {
    // const match = useRouteMatch('/');
const location = useLocation();
const isPadding = location.pathname === '/' || location.pathname === '/game/board'
    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path='/404' component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>

                        <div className={cn(s.wrap, {
                            [s.isHomePage]: isPadding,
                            [s.board]: location.pathname === '/game/board'? true :false
                        })}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route>
                                    <Redirect to="/404"/>
                                </Route>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    );
};


export default App;