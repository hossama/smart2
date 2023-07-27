<template>
    <div>
      <breadCrumb />
      <!-- Start Single-project -->
      <section class="single-project single-page body-inner">
        <div class="container">
          <div class="row">
            <!-- Col -->
            <div class="col-md-12" v-if="projectById">
              <div class="single-project-inner">
                <div class="img">
                  <img :src="projectById.imageUrl" :alt="projectById.small_description" />
                </div>
                <div class="row">
                  <!-- Col -->
                  <div class="col-md-8">
                    <div class="single-inner-pro">
                      <h2>{{ projectById.title }}</h2>
                      <p>
                        {{ projectById.small_description }}
                      </p>
                    </div>
                  </div>
                  <!-- /Col -->

                  <!-- Col -->
                  <div class="col-md-4">
                      <div class="amaboutinfo__experience">
                          <p><b>{{ $t('date') }} :</b> {{ projectById.date }}</p>
                          <p><a href="mailto:webmail.info@gmail.com"><b> {{ $t('email_input') }}:</b> webmail.info@gmail.com</a></p>
                          <!-- <p><a href="#"><b>Categories:</b> {{ projectById.position }} </a></p> -->
                      </div>
                  </div>
                  <!-- /Col -->

                  <!-- Col -->
                  <div class="col-md-12">
                      <div class="text-single-in">             
                        <div class="content-des" v-html="projectById.small_description"></div>
                      </div>
                  </div>
                  <!-- /Col -->
                </div>
              </div>
            </div>
            <!-- /Col -->
          <div v-else class="col-md-12 loading-message">Loading project details...</div>
          </div>
          <!-- /Col -->
        </div>
      </section>
      <!-- End Single-project -->
    </div>
  </template>
  
  <script>
  import { ApolloQuery } from "vue-apollo";
  // import { apolloClient } from "apollo-client";
  import gql from "graphql-tag";
  import breadCrumb from "../breadcrumb/index";
  
  export default {
    name: "singleProject",
    components: {
      ApolloQuery,
      breadCrumb,
    },
    data() {
      return {
        url: this.$route.params.projectById
      }
    },
    apollo: {
      projectById: {
        query: gql`
            query GetProjectById($slug: String!) {
              projectById(slug: $slug) {
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
      projectById: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            // console.log('Article Slug:', this.projectById.slug);
          }
        },
      },
    },
  };
  </script>
  