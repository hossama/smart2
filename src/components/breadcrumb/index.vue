<!-- Breadcrumb.vue -->
<template>
    <nav class="breadcrumb">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-bread">
                    <h2 v-for="crumb in breadcrumbs" :key="crumb.route">{{ crumb.label }}</h2>
                    <ul>
                        <li>
                        <router-link :to="{ path: '/' }">Home</router-link>
                        </li>
                        <li v-for="crumb in breadcrumbs" :key="crumb.route">
                        <router-link :to="{ path: crumb.route }">{{ crumb.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        const routeNames = this.$route.path.split('/');
        const breadcrumbs = [];
  
        let routePath = '';
        for (const routeName of routeNames) {
          if (routeName) {
            routePath += `/${routeName}`;
            breadcrumbs.push({
              route: routePath,
              label: routeName.charAt(0).toUpperCase() + routeName.slice(1),
            });
          }
        }
  
        return breadcrumbs;
      },
    },
  };
  </script>
  
  <style>
  /* Add breadcrumb styles here */
  </style>
  