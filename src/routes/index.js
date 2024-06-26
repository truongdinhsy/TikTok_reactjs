import Routesconfig from "~/config/routes";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/profile";
import Uploand from "~/pages/Uploand";
import { HeaderOnly } from "~/components/Layout";
import Search from "~/pages/Search";

const publicRoutes = [
    {
        path: Routesconfig.home,
        component: Home,
    },
    {
        path: Routesconfig.following,
        component: Following,
    },
    {
        path: Routesconfig.profile,
        component: Profile,
    },
    {
        path: Routesconfig.upload,
        component: Uploand,
        layout: HeaderOnly,
    },
    {
        path: Routesconfig.search,
        component: Search,
        layout: null,
    },
];
const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
