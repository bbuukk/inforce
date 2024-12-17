import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import getRouteObjects from './routes/getRouteObjects';

import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter(getRouteObjects());

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
}

export default App;
