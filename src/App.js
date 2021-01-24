import React, {useState} from 'react';
import Navbar from './components/Navbar'
import { Switch,  Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  
  let languageStoredInLocalStorage = localStorage.getItem('language');
  let [language, setLanguage] = useState ( languageStoredInLocalStorage ? languageStoredInLocalStorage : 'Catalan')

  return (
    <div className="App">
        <Navbar language={language}
                handleSetLanguage={language => {setLanguage(language);
                storeLanguageInLocalStorage(language);
                }}
        />

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} language={language} />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </div>
  );
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language);
  }


export default App;
