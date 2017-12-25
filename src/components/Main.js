import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Global/Header';
import About from './About';
import Sample from './Sample';
import PageSample from './PageSample';

export default class Main extends Component {

  render() {
    return (
      <div>
        	<Header/>
          <Route exact path="/" component={About} />
          <Route path="/sample" component={Sample} />
					<Route path="/pagesample" component={PageSample} />
      </div>
    );
  }
}
