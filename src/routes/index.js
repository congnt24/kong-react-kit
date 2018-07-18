import Home from "../client/pages/home/Home";
import About from "../client/pages/about/About";
import RootRouter from "../client/containers/RootRouter";
import NotFound from "../commons/NotFound";

const main_routes = [
    {
        component: RootRouter,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/home',
                exact: true,
                component: Home,
                title: 'fjkshgjdhfsjkghdfskjhjkdfshgjkdfs',
                routes: [
                    {
                        path: '/home/about',
                        exact: true,
                        component: About
                    }
                ]
            },
            {
                path: '/about',
                exact: true,
                component: About
            },
            {
                path: '*',
                component: NotFound
            }

        ]
    }
];

export default main_routes;