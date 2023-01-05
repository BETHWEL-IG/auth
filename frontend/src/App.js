import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from 'react-router-dom'
import { LoginUsers } from './components/login/loginForm';
import { SignupUsers } from './components/signup/signupUsers';
import { Home } from './components/home/home';
//import { RootLayout } from './layouts/rootLayout';
import { useAuthContext } from './hooks/useAuthContext';
import { NavBar } from './navBar/navBar';
import { About } from './about/about';


function App() {
  const {user}=useAuthContext()
  const router=createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<NavBar/>}>
        <Route  index element={user?<Home/>:<Navigate to={'login'}/>}/>
        <Route path='signup' element={!user?<SignupUsers/>:<Navigate to={'/'}/>}/>
        <Route path='login' element={!user?<LoginUsers/>:<Navigate to={'/'}/>}/>
        <Route path='about' element={user?<About/>:<Navigate to={'/login'}/>}/>
      </Route>
    )
  )
 
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
