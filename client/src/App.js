import {Navigate, Outlet, RouterProvider,createBrowserRouter} from 'react-router-dom';
import RootLayout from './RootLayout';
import { Children } from 'react';
import Home from './components/Home';
import Student_portal from './components/Student_portal';
import Faculty_portal from './components/Faculty_portal';
import Student_Reg from './components/Student_Reg';
import Student_login from './components/Student_login';
import Student_Dashboard from './components/Student_Dashboard';
import InternshipRegistration from './components/Internship_Registration';
import Faculty_Reg from './components/Faculty_Reg';
import Faculty_login from './components/Faculty_login';
import Faculty_Dashboard from './components/Faculty_Dashboard';
import { PreviousInternship } from './components/PreviousInternship';

function App() {
  let router=createBrowserRouter(
    [
      {
        path:'',
        element:<RootLayout/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
            path:'/Student_portal',
            element:<Student_portal/>
          },
          {
            path:'/Faculty_portal',
            element:<Faculty_portal/>
          },
          {
            path:'/Student_Register',
            element:<Student_Reg/>
          },
          {
            path:'/Student_Login',
            element:<Student_login/>
          },{
            path:'/Student_Dashboard',
            element:<Student_Dashboard/>
          },
          {
            path:'/Internship_Reg',
            element:<InternshipRegistration/>
          },{
            path:'/Faculty_Reg',
            element:<Faculty_Reg/>
          },
          {
            path:'/Faculty_Login',
            element:<Faculty_login/>
            
          },
          {
            path:'/Faculty_Dashboard',
            element:<Faculty_Dashboard/>
          },
          {
            path:'/PreviousInternship',
            element:<PreviousInternship/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
