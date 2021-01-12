import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// pages 
import Main from './components/Main'; // update to home component
import LandingPage from './components/LandingPage';


function App() {
  // landing page "read more" btn toggle
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);

  // landing page "language" btn toggle
  const [lang, setLang] = useState('en')

  const toEs = () => {
    setLang('es')
  }
  
  const toEng = () => {
    setLang('en')
  }

  return(
    <div className="App">
      <Router>
        <Switch>
          <Route path="/gallery">
          </Route>

          <Route path="/home">
            <Main />
          </Route>

          <Route path="/">
            <LandingPage 
              toggleReadMore={toggleReadMore}
              readMore={readMore}
              lang={lang}
              toEs={toEs}
              toEng={toEng}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;