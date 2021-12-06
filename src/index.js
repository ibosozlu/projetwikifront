import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Accueil from "./component/accueil/Accueil";
import 'bootstrap/dist/css/bootstrap.min.css';
import KanjiAppris from "./component/kanji/KanjiAppris";
import KanjiEnCours from "./component/kanji/KanjiEnCours";
import KanjiAApprendre from "./component/kanji/KanjiAApprendre";
import VocabulaireAppris from "./component/vocabulaire/VocabulaireAppris";
import VocabulaireEnCours from "./component/vocabulaire/VocabulaireEnCours";
import VocabulaireAApprendre from "./component/vocabulaire/VocabulaireAApprendre";
import KanjiParNiveau from "./component/kanji/KanjiParNiveau";


ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Router>
          <Routes>
              <Route path='/' element={<Accueil/>} />
              <Route path='/kanji-appris' element={<KanjiAppris/>} />
              <Route path='/kanji-en-cours' element={<KanjiEnCours/>} />
              <Route path='/kanji-a-apprendre' element={<KanjiAApprendre/>} />
              <Route path='/kanji-niveau' element={<KanjiParNiveau/>} />
              <Route path='/vocabulaire-appris' element={<VocabulaireAppris/>} />
              <Route path='/vocabulaire-en-cours' element={<VocabulaireEnCours/>} />
              <Route path='/vocabulaire-a-apprendre' element={<VocabulaireAApprendre/>} />
          </Routes>
      </Router>
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
