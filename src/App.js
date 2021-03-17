// import { useState } from 'react';
import {useRouteMatch, Route, Switch } from "react-router-dom";
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage'
import ContactPage from './routes/ContactPage'
import MenuHeader from './components/MenuHeader';

import Footer from './components/Footer';

import cn from 'classnames'

import s from './components/style.module.css'
import React from "react";

const App = () => {
const match = useRouteMatch('/');
console.log(match);
  return (

      <Switch>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>

            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
              </Switch>
            </div>
            <Footer/>
          </>
        </Route>
      </Switch>

  );
};

export default App;