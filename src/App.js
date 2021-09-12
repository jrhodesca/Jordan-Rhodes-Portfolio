import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

/** Components */
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Switch>
        <Route exact path="">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
