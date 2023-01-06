import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { LoginUsers } from './components/login/loginForm';
import { SignupUsers } from './components/signup/signupUsers';
import { Home } from './components/home/home';
//import { RootLayout } from './layouts/rootLayout';

import { NavBar } from './navBar/navBar';
import { About } from './about/about';

const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<NavBar/>}>
      <Route  index element={<Home/>}/>
      <Route path='signup' element={<SignupUsers/>}/>
      <Route path='login' element={<LoginUsers/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
