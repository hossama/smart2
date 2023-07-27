<template>
  <main class="main-content">
    <breadCrumb />
    <section class="projects-page body-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="project in displayedProjects" :key="project.id">
            <Item 
                :id="project.id"
                :title="project.title"
                :imageUrl="project.imageUrl"
                :position="project.position"
                :small_description="project.small_description"
                :slug="project.slug"
              />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import breadCrumb from "../breadcrumb/index";
import { ApolloQuery } from "vue-apollo";
import gql from "graphql-tag";
import Paginate from "vuejs-paginate";
import Item from "./Items.vue";

export default {
  components: {
    breadCrumb,
    ApolloQuery,
    Paginate,
    Item,
  },
  data() {
    return {
      projects: [], // Initialize as an empty array
      currentPage: 1,
      pageSize: 4, // Number of Projects per page
    };
  },
  computed: {
    totalProjects() {
      return this.projects.length;
    },
    totalPages() {
      return Math.ceil(this.totalProjects / this.pageSize);
    },
    displayedProjects() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.projects.slice(startIndex, endIndex);
    },
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchProjects();
    },
    fetchProjects() {
      this.$apollo
        .query({
          query: gql`
            query GetProjects($page: Int!) {
              projects(page: $page) {
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
                data {
                  id
                  position
                  title
                  description
                  imageUrl
                  slug
                }
              }
            }
          `,
          variables: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.projects = response.data.projects.data;
        })
        .catch((error) => {
          console.error("Error fetching Projects:", error);
        });
    },
  },
};
</script>
