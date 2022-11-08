
import { BrowserRouter } from 'react-router-dom';
import { RepositoryProvider } from './context';
import { Router } from './routers';
import './styles/global.scss';

export default function App() {
  return (
    <RepositoryProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RepositoryProvider>
  )
};

