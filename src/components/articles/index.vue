<template>
  <main class="main-content">
    <breadCrumb />

    <!-- Start Blogs-page -->
    <section class="blogs-page body-inner">
      <div class="container">
        <div class="row">
          <!-- Col -->
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#pro1" type="button">
                  Articles
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pro2" type="button">
                  Gallery
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pro3" type="button">
                  Videos
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <!-- Tab1 -->
              <div class="tab-pane fade show active" id="pro1">
                <div class="tab-inner tab-blogs row">
                  <!-- Use the Items component to display each article -->
                  <div class="col-md-4" v-for="article in displayedArticles" :key="article.id">
                    <Items :date="article.date"
                    :image-url="article.imageUrl" :title="article.title" :small_description="article.small_description"
                    :slug="article.slug" />
                  </div>
                </div>
              </div>
              <!-- /Tab1 -->
              
              <!-- Tab2 -->
              <div class="tab-pane fade" id="pro2">
                <div class="tab-inner tab-blogs row">
                  <!-- Col -->
                  <div class="col-md-4">
                    <a href="assets/images/20.jpg" class="gallery-block" data-fancybox="galleryPhoto">
                      <img src="assets/images/20.jpg" alt="#" />
                    </a>
                  </div>
                  <!-- /Col -->
                </div>
              </div>
              <!-- /Tab2 -->

              <!-- Tab2 -->
              <div class="tab-pane fade" id="pro3">
                <div class="tab-inner tab-blogs row">
                  <!-- Col -->
                  <div class="col-md-4">
                    <a href="assets/images/20.jpg" class="gallery-block video-block" data-fancybox="galleryPhoto">
                      <img src="assets/images/20.jpg" alt="#" />
                    </a>
                  </div>
                  <!-- /Col -->
                </div>
              </div>
              <!-- /Tab2 -->
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </section>
    <!-- End Blogs-page -->
  </main>
</template>

<script>
import breadCrumb from "../breadcrumb/index";
import { ApolloQuery } from "vue-apollo";
import gql from "graphql-tag";
import Paginate from "vuejs-paginate";
import Items from "./Items.vue"; // Import the Items component

export default {
  name: "Articles",
  components: {
    breadCrumb,
    ApolloQuery,
    Paginate,
    Items // Register the Items component
  },
  data() {
    return {
      articles: [],
      currentPage: 1,
      pageSize: 4 // Number of articles per page
    };
  },
  computed: {
    totalArticles() {
      return this.articles.length;
    },
    totalPages() {
      return Math.ceil(this.totalArticles / this.pageSize);
    },
    displayedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.articles.slice(startIndex, endIndex);
    }
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchArticles();
    },
    fetchArticles() {
      this.$apollo
        .query({
          query: gql`
        query GetArticles($page: Int!) {
          articles(page: $page) {
            data {
              id
              title
              date
              small_description
              imageUrl
              slug   
            }
          }
        }
      `,
          variables: {
            page: this.currentPage
          }
        })
        .then((response) => {
          this.articles = response.data.articles.data;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    }
  }
};
</script>

<style>
/* Add your custom CSS styles here */
</style>
