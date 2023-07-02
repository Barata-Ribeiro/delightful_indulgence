import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/utils/Loading';

const Home = lazy(() => import('./routes/Home'));
const NotFound = lazy(() => import('./routes/NotFound'));
const Story = lazy(() => import('./routes/Story'));
// const Dessert = lazy(() => import('./routes/Dessert'));

const HeaderMemo = React.memo(Header);
const FooterMemo = React.memo(Footer);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('An error occurred: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <HeaderMemo />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/story' element={<Story />} />
            <Route path='/menu/:dessertId' element={'TO BE ADD'} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <FooterMemo />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
