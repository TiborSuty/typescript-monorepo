import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Landing } from './components/Landing/Landing';
import { routes } from './constants/routes';

export function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.landing} element={<Landing />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
