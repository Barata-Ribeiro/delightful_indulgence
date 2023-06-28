import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const HeaderMemo = React.memo(Header);
const FooterMemo = React.memo(Footer);

function App() {
  return (
    <BrowserRouter>
      <HeaderMemo />
      <FooterMemo />
    </BrowserRouter>
  );
}

export default App;
