import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DemoPage} from './components/DemoPage';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <DemoPage />
  </React.StrictMode>,
);
