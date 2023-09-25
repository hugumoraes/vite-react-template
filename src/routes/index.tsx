/* ---------- External ---------- */
import { createBrowserRouter } from 'react-router-dom';

/* ---------- Components ---------- */
import { Home } from '_components/Home';
import { Error } from '_components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
]);

export { router };
