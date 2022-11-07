
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers';
import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

