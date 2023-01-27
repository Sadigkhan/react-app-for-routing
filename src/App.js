import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home }  from './pages/Home';
import { About } from './pages/About';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
import { Users, usersLoader } from './pages/Users';
import { UserDetails, userDetailsLoader } from './pages/UserDetails';

// layouts
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/HelpLayout";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'home', element: <Home/> },
      { path: 'about', element: <About/> },
      {
        path: 'help',
        element: <HelpLayout/>,
        children: [
          { path: 'contact', element: <Contact/>},
          { path: 'faq', element: <Faq/>}
        ]
      },
      {  path: 'users', element: <Users/>, loader: usersLoader },
      {  path: 'users/:userid', element: <UserDetails />, loader: userDetailsLoader }
    ]
  }  
]);

function App() {
  return (
    <RouterProvider router= { router } />
  );
}

export default App;
