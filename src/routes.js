
import home from './components/home/index'
import about from './components/about/index'
import ServicesPage from './components/services/index'
import studies from './components/projects/index'
import clients from './components/clients/index'
import faq from './components/faq/index'
import contact from './components/contact/index'
import how_we_works from './components/how-we-works/index'
import sub_services from './components/services/subServices'
import articles from './components/articles/index'
import singleArticle from './components/articles/singleArticle'
import singleProject from './components/projects/ProjectDetails'
import singleService from './components/services/single-service'


const routes = [
    {
        path: "/",
        name: "Home",
        component: home
    },
    { 
        path: "/about", 
        name: "About",
        component: about,
        meta: { breadcrumb: 'About Us' }
    },
    { 
        path: "/projects", 
        component: studies,
        name: "Projects",
        meta: { breadcrumb: 'Projects' }
    },
    { 
        path: "/projects/:projectById", 
        component: singleProject,
        name: "singleProject",
        meta: { breadcrumb: 'singleProject' }
    },
    { 
        path: "/clients", 
        component: clients,
        name: "Clients",
        meta: { breadcrumb: 'Clients' }
    },
    { 
        path: "/faq", 
        component: faq,
        name: "Faq",
        meta: { breadcrumb: 'Faq' }
    },
    { 
        path: "/articles", 
        component: articles,
        name: "articles",
        meta: { breadcrumb: 'articles' }
    },
    {
        path: '/articles/:articleById',
        name: 'singleArticle',
        component: singleArticle,
        meta: { breadcrumb: 'singleArticle' }
    },
    { 
        path: "/how_we_works", 
        component: how_we_works,
        name: "How We Works",
        meta: { breadcrumb: 'How We Works' }
    },
    { 
        path: "/contact", 
        component: contact,
        name: "Contact",
        meta: { breadcrumb: 'Contact' }
    },
    { 
        path: "/services", 
        component: ServicesPage,
        name: "ServicesPage",
        meta: { breadcrumb: 'Services' }
    },
    {
        path: "/services/:sub_services",
        name: "sub_services",
        component: sub_services,
        meta: { breadcrumb: 'sub_services' }
    },
    {
        path: "/services/sub_services/:serviceById",
        name: "singleService",
        component: singleService,
        meta: { breadcrumb: 'singleService' }
    },
    // {path: "/users", component: UsersPage, children: [
    //     {path: "", component: UsersHomePage},
    //     {path: ":id", component: UsersViewPage, props: true}
    // ]},
    // // {path: "*", redirect: "/"}, 
    // {path: "*", component: NotFoundPage}, // 404 Error
    // {path: "/store/counterH", component: SmartCounter},
];


export default routes;