import Home from "../client/pages/home/Home";
import About from "../client/pages/about/About";
import RootRouter from "../client/containers/RootRouter";

const main_routes = [
    { component: RootRouter,
        routes: [
            { path: '/',
                exact: true,
                component: Home
            },
            { path: '/home',
                component: Home,
                routes: [
                    { path:  '/home/about',
                        component: About
                    }
                ]
            },
            { path: '/about',
                component: About
            }
        ]
    }
];

export default main_routes;