import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Footer from './components/Footer';
import Story from './routes/Story';

const HeaderMemo = React.memo(Header);
const FooterMemo = React.memo(Footer);

function App() {
  return (
    <BrowserRouter>
      <HeaderMemo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <FooterMemo />
    </BrowserRouter>
  );
}

export default App;
