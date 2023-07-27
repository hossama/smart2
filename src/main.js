import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import Style
import './assets/css/style.css'

// Import Routes
import routes from './routes'
// import VueI18n from 'vue-i18n';

// Import Apollo GraphQl
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueApollo);
// start translation

import i18n from "./Plugins/i18n";

// end translation 

// start axios installation

// for api with need auth using axios

import "./Services/axios";
import http from "@/Services/axios.js";

Vue.use(http);
// for api with need auth

// Counter
import VueCountUp from 'vue-countup';

Vue.component('VueCountUp', VueCountUp);

const httpLink = createHttpLink({
  uri: 'https://admin.smartcode.com.sa/public/graphql',
  headers:{
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Accept-Language": localStorage.lang,
  }
  
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: "https://admin.smartcode.com.sa/public/graphql",
  link: httpLink,
  cache: cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //setup language
  console.log("Routers beforeEach");
  next();
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
  apolloProvider,
}).$mount('#app')