// package imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// component imports
import App from '@/App';

// global styles
import '@/shared/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
