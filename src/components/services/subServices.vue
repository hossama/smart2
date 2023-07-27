<template>
  <main class="main-content">
    <breadCrumb />
    <section class="sservices-page body-inner">
      <div class="container">
        <div class="row">
          <ItemsSub
            v-for="sub_service in sub_services"
            :key="sub_service.id"
            :image-url="sub_service.imageUrl"
            :title="sub_service.title"
            :small_description="sub_service.small_description"
            :slug="sub_service.slug"
          />
        </div>
        
        <div class="col-md-12">
          <paginate :page-count="totalPages" :click-handler="onPageChange" :prev-text="'Previous'" :next-text="'Next'"
              class="paginate-pages-h"></paginate>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ApolloQuery } from "vue-apollo";
import gql from "graphql-tag";
import breadCrumb from "../breadcrumb/index";
import Paginate from "vuejs-paginate";
import ItemsSub from "./ItemsSub.vue";

export default {
  name: "SubServices",
  components: {
    ApolloQuery,
    breadCrumb,
    Paginate,
    ItemsSub,
  },
  data() {
    return {
      url: this.$route.params.sub_services,
      sub_services: [],
      currentPage: 1,
      pageSize: 4,
    };
  },
  computed: {
    totalSubServices() {
      return this.sub_services.length;
    },
    totalPages() {
      return Math.ceil(this.totalSubServices / this.pageSize);
    },
  },
  created() {
  const serviceId = parseInt(this.url);
  if (isNaN(serviceId)) {
    console.error("Invalid service ID:", this.url);
  } else {
    console.log("Service ID:", serviceId);
    this.fetchSubServices();
  }
},
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchSubServices();
    },
    fetchSubServices() {
      const serviceId = parseInt(this.url);
      if (isNaN(serviceId)) {
        // Handle the case when the service ID is missing or not a valid integer
        console.error("Invalid service ID:", this.url);
        return;
      }

      this.$apollo
        .query({
          query: gql`
            query GetSub_services($service_id: Int!, $page: Int!) {
              sub_services(service_id: $service_id, page: $page) {
                data {
                  id
                  title
                  description
                  small_description
                  position
                  imageUrl
                  slug
                }
                paginatorInfo {
                  count
                  currentPage
                  firstItem
                  hasMorePages
                  lastItem
                  lastPage
                  perPage
                  total
                }
              }
            }
          `,
          variables: {
            service_id: serviceId,
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.sub_services = response.data.sub_services.data;
        })
        .catch((error) => {
          console.error("Error fetching sub_services:", error);
        });
    },
  },

  watch: {
    sub_services: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          // Access the fetched data here: this.sub_services
        }
      },
    },
  },
};
</script>
