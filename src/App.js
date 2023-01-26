
// / => <Home />
// /home => <Home />
// /about => <About />
// /products => <Products />

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home }  from './pages/Home';
import { About } from './pages/About';

const router  = createBrowserRouter([
  { index: true, element: <Home/> },
  { path: 'home', element: <Home/> },
  { path: 'about', element: <About/> },
]);

function App() {
  return (
    <RouterProvider router= { router } />
  );
}

export default App;
