import React from 'react';
import './App.css';
import bg1 from './static/bg1.jpg';
import bg2 from './static/bg2.jpg'

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
<>

<Header title='header text' descr = 'header text descr'/>
<Layout title=' Layout header text' descr = 'Layout header text descr' urlBg = {bg1} position={"100%"} />
<Layout colorBg = '#e2e2e2' title=' Layout header text' descr = 'Layout header text descr' />
<Layout title=' Layout header text' descr = 'Layout header text descr' urlBg = {bg2} />
<Footer />
</>
  );
}

export default App;
