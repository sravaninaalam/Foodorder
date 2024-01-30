import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Bodycomponents/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import Login from "./src/components/Login";
import Hotelmenu from "./src/components/Hotelmenu";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Signup from "./src/components/Signup";
const App=()=>{
    return(
        <Provider store={store}>
              <Header/>
                    <Outlet/>
              <Footer/>
        </Provider>
    )
}


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            }
            ,{
                path:'/about',
                element:<About/>
            }  ,
            {
                path:'/cart',
                element:<Cart/>
            },{
                path:'/login',
                element:<Login/>
            },
            {
                path:'/restaurants/:resId',
                element:<Hotelmenu/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ],
        errorElement:<Error/>
    },
   
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
