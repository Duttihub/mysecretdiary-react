import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import Schwarzmaler from './Schwarzmaler';
import GetaMate from './GetaMate';
import DrChaos from './DrChaos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Startseite = () =>
  <div>
    <h2>mysecretdiary</h2>
    <p>Endlich die Seite auf der du alle deine Gedanken einfach mit deiner Community teilen kannst.
<br></br>
      Egal, was!
    <br></br>
      Lass es raus!
    <br></br>
      <div>
        <p>Tob dich in unseren verschiedenen Kategorien aus</p>
        <ul className="kategorieübersicht">
          <button >
            <Link className="üSchwarz" to="/Schwarzmaler" >
              <li> Schwarzmaler Sarkasmus</li>
            </Link>
          </button>
          <button>
            <Link className="ügeta" to="/GetaMate" >
              <li>Get a Mate</li>
            </Link>
          </button>
          <button>
            <Link className="üchaos" to="/DrChaos" >
              <li>Dr. Chaos- bei Herzschmerz und Verwirrungssyptomen</li>
            </Link>
          </button>
        </ul>
      </div>

    </p>

    <img src='https://images.universal-music.de/img/assets/391/391531/4/720/let-it-out-lyric-video.jpg' />

  </div>

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Startseite} />
            <Route path="/Schwarzmaler" component={Schwarzmaler} />
            <Route path="/GetaMate" component={GetaMate} />
            <Route path="/DrChaos" component={DrChaos} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/Kontakt" component={Kontakt} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
