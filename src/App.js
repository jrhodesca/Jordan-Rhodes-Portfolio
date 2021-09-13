import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

/** Components */
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import About from './pages/About/About';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Footer from './components/Footer/Footer';

function App() {

  const [footerColor, setFooterColor] = useState("#D9FFDD");

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
        <Route path="/project">
          <CaseStudy />
        </Route>
        <Route path="/gallery">
          <CaseStudy />
        </Route>
      </Switch>
      <Footer footerColor={footerColor}/>
    </Router>
  );
}

export default App;
