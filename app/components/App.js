'use strict'

import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Dummy from './dummy.jsx';

export default function (props) {
  return (
  	<div>
      <h1>Hello World!</h1>
      <Switch>
        <Route exact path="/" component={Dummy} />
        <Redirect to="/"/>
      </Switch>
  	</div>
  )
}
