import { lazy } from 'react';

import Template from "./app/template/template";

let routes: any = [
{ path: "", component: Template },
]
export let userRoutes: any;
    if (sessionStorage.getItem("screens")) {
     
{ path : '/employee', component: lazy(()=>import('./app/employee/employee')) },
      userRoutes = JSON.parse(sessionStorage.getItem("screens") || " ");
    } else {
      userRoutes = [];
    }
    
export default routes;