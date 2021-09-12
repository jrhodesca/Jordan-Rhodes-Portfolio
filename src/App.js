import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

/** Components */
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import About from './pages/About/About';
import CaseStudy from './pages/CaseStudy/CaseStudy';

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
        <Route path="/case">
          <CaseStudy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
