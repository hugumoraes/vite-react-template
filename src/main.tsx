/* ---------- External ---------- */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/* ---------- Router ---------- */
import { router } from '_routes';

/* ---------- Styles ---------- */
import '_styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
