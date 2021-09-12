import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

/** Components */
import Header from './components/Header/Header';
import Main from './pages/main/Main';
import Work from './pages/work/Work';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
