import Search from './search/Search';
import {React} from 'react';


const routes = [
    {
        path: "/",
        exact: true,
        component: Search
    },
    {
        path: "/search",
        exact: true,
        component: Search
    },
    
]
 
export default routes