
// / => <Home />
// /home => <Home />
// /about => <About />
// /products => <Products />

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home }  from './pages/Home';
import { About } from './pages/About';
import { MainLayout } from "./layouts/MainLayout";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'home', element: <Home/> },
      { path: 'about', element: <About/> },
    ]
  }  
]);

function App() {
  return (
    <RouterProvider router= { router } />
  );
}

export default App;
