import Routesconfig from "~/config/routes";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/profile";
import Uploand from "~/pages/Uploand";
import About from "~/pages/About";
import { HeaderOnly } from "~/components/Layout";
import { DefaultLayoutLink } from "~/components/Layout";
import { LayoutCareers } from "~/components/Layout";
import Search from "~/pages/Search";
import Newroom from "~/pages/Newroom";
import Contact from "~/pages/Contact";
import Careers from "~/pages/Careers";

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
    {
        path: Routesconfig.about,
        component: About,
        layout: DefaultLayoutLink,
    },
    {
        path: Routesconfig.newroom,
        component: Newroom,
        layout: DefaultLayoutLink,
    },
    {
        path: Routesconfig.contact,
        component: Contact,
        layout: DefaultLayoutLink,
    },
    {
        path: Routesconfig.careers,
        component: Careers,
        layout: LayoutCareers,
    },
];

const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
