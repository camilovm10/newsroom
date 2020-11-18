
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Redeem from './components/Redeem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux

import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          
          <Route path="/redeem">
            <Redeem />
          </Route>

          <Route path="/addpoints">
            <Inputs />
          </Route>

          <Route path="/">
            <Body />
          </Route>
            

          
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
