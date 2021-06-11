import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import CardList from './Components/CardList'
import Info from './Components/Info'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={CardList} />
          <Route path='/sobre/:id' component={Info} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
