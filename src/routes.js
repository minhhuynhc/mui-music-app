import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layout/dashboard";
import HomePage from "./page/home";

export default function Router(){
    const routers = useRoutes([
        {
            path:'/',
            element:<DashboardLayout/>,
            children:[
                {
                    path: '',
                    element: <HomePage/>
                },
                {   
                    path: 'search',
                    element: <HomePage/>,
                },
                {   
                    path: 'playlist',
                    element: <></>,
                },
                ]
        },
        {

        },
    ])
    return routers
}