<template>
  <main class="main-content">
    <breadCrumb />

    <!-- Start Services-page -->
    <section class="services-page body-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <Items v-for="service in services" 
              :key="service.id" 
              :image-url="service.imageUrl"
                :icon-url="service.iconUrl" 
                :title="service.title" 
                :small_description="service.small_description"
                :id="service.id" />
            </div>
          </div>

          <!-- Col -->
          <div class="col-md-12">
            <!-- Pagination -->
            <paginate :page-count="totalPages" :click-handler="onPageChange" :prev-text="'Previous'" :next-text="'Next'"
              class="paginate-pages-h"></paginate>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </section>
    <!-- End Services-page -->
  </main>
</template>

<script>
import breadCrumb from "../breadcrumb/index";
import { ApolloQuery } from "vue-apollo";
import gql from "graphql-tag";
import Paginate from "vuejs-paginate";
import Items from "./Items.vue";

export default {
  name: "Services",
  components: {
    breadCrumb,
    ApolloQuery,
    Paginate,
    Items,
  },
  data() {
    return {
      services: [],
      currentPage: 1,
      pageSize: 4, // Number of services per page
    };
  },
  computed: {
    totalServices() {
      return this.services.length;
    },
    totalPages() {
      return Math.ceil(this.totalServices / this.pageSize);
    },
  },
  created() {
    this.fetchServices();
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchServices();
    },
    fetchServices() {
      this.$apollo
        .query({
          query: gql`
            query GetServices($page: Int!) {
              services(page: $page) {
                data {
                  id
      title
      small_description
      slug
      imageUrl
      iconUrl
                }
              }
            }
          `,
          variables: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.services = response.data.services.data;
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    },
  },
};
</script>
