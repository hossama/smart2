<template>
  <div>
    <breadCrumb />
    <section class="single-blog single-page body-inner">
      <div class="container">
        <div class="row">
          <!-- Col -->
          <div class="col-md-12" v-if="articleById">
            <div class="single-project-inner">
              <div class="img">
                <img :src="articleById.imageUrl" :alt="articleById.title" />
              </div>

              <div class="row">
                <!-- Col -->
                <div class="col-md-8">
                  <div class="single-inner-pro">
                    <div class="postbox__meta">

                      <span>
                        <a href="#">
                          <i class="fal fa-clock"></i>
                          {{ articleById.date }}
                        </a>
                      </span>
                    </div>
                    <h2>
                      {{ articleById.title }}
                    </h2>
                    <p>
                      {{ articleById.small_description }}
                    </p>
                  </div>
                </div>
                <!-- /Col -->

                <!-- Col -->
                <div class="col-md-4">
                  <div class="title title-center title-sidebar-serv">
                    <h3>Share Now:</h3>
                  </div>
                  <div class="case-social-icon">
                    <a class="behance" href="#"><i class="fab fa-behance"></i></a>
                    <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="pinterest" href="#"><i class="fab fa-pinterest"></i></a>
                  </div>
                </div>
                <!-- /Col -->
              </div>

              <div class="text-single-in">
                <div class="content-inner" v-html="articleById.description"></div>
              </div>
            </div>
          </div>
          <!-- /Col -->
          <div v-else class="col-md-12 loading-message">Loading article details...</div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import { ApolloQuery } from "vue-apollo";
// import { apolloClient } from "apollo-client";
import gql from "graphql-tag";
import breadCrumb from "../breadcrumb/index";

export default {
  name: "SingleArticle",
  components: {
    ApolloQuery,
    breadCrumb,
  },
  data() {
    return {
      url: this.$route.params.articleById
    }
  },
  apollo: {
    articleById: {
      query: gql`
          query GetArticleById($slug: String!) {
            articleById(slug: $slug) {
              id
              title
              description
              small_description
              date
              position
              imageUrl
              slug
            }
          }
        `,
      variables() {
        // Use vue reactive properties here
        return {
          slug: this.url,
        }
      },
    },
  },
  watch: {
    articleById: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          // console.log('Article Slug:', this.articleById.slug);
        }
      },
    },
  },
};
</script>
  