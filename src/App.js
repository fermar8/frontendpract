import React, {useState} from 'react';
import Navbar from './components/Navbar'
import { Switch,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Success from './pages/Success';
import { DarkBody } from './styles/dark/DarkBody';
import { LightBody } from './styles/light/LightBody';
import './App.css';

function App() {
  
  let languageStoredInLocalStorage = localStorage.getItem('language');
  let [language, setLanguage] = useState ( languageStoredInLocalStorage ? languageStoredInLocalStorage : 'Catalan')

  let themeStoredInLocalStorage = localStorage.getItem('theme');
  let [theme, setTheme] = useState ( themeStoredInLocalStorage ? themeStoredInLocalStorage : 'Dark');

  let tema = {
    dark: {
        body: DarkBody  
    },

    light: {
        body: LightBody  
    }
}

if (theme === 'Dark') {
  tema = tema.dark;
} else {
  tema = tema.light;
}

  return (
    <tema.body>
        <Navbar language={language}
                handleSetLanguage={language => {setLanguage(language);
                storeLanguageInLocalStorage(language);
                }}

                theme={theme}
                handleSetTheme={theme => {setTheme(theme);
                storeThemeinLocalStorage(theme);
                }}
        />

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} language={language} theme={theme} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} language={language} theme={theme} />} />
          <Route exact path='/success' render={(props) => <Success {...props} language={language} theme={theme} />} />
        </Switch>
    </tema.body>
  );
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language);
  }

  function storeThemeinLocalStorage(theme) {
    localStorage.setItem('theme', theme);
  }


export default App;
