import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/utils/Loading';
import ErrorBoundary from './components/utils/ErrorBoundary';

const Home = lazy(() => import('./routes/Home'));
const Story = lazy(() => import('./routes/Story'));
const Contact = lazy(() => import('./routes/Contact'));
const SitePolicy = lazy(() => import('./routes/SitePolicy'));
const Dessert = lazy(() => import('./routes/Dessert'));
const NotFound = lazy(() => import('./routes/NotFound'));

const HeaderMemo = React.memo(Header);
const FooterMemo = React.memo(Footer);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <HeaderMemo />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/story' element={<Story />} />
            <Route path='/menu/:dessertId' element={<Dessert />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/privacypolicy' element={<SitePolicy />} />
          </Routes>
        </Suspense>
        <FooterMemo />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
