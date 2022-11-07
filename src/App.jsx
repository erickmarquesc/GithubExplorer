
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers';
import './global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

