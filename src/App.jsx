import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const HeaderMemo = React.memo(Header);
// const FooterMemo = React.memo(Footer);

function App() {
  return (
    <BrowserRouter>
      <HeaderMemo />
    </BrowserRouter>
  );
}

export default App;
