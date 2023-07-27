<template>
    <!-- Start About-h -->
    <section class="about-h">
      <div class="container">
        <div class="row justify-content-between align-items-center">
  
          <!-- Col -->
          <div class="col-md-5">
            <div class="mil-collage-3 mil-appearance">
              <div class="mil-image-1 mil-appearance">
                <div class="mil-just-image mil-image-square">
                  <img :src="aboutUs.about_image_url" :alt="aboutUs.about_title" class="mil-scale-img" data-value-1="1" data-value-2="1.2" style="object-position: top left">
                </div>
              </div>
              <div class="mil-image-2 mil-appearance">
                <div class="mil-just-image mil-image-square">
                  <img :src="aboutUs.about_image_back_url" :alt="aboutUs.about_title">
                </div>
              </div>
            </div>
          </div>
          <!-- /Col -->
  
          <!-- Col -->
          <div class="col-md-6">
            <div class="text-about">
              <div class="title">
                <h4 class="sub-title">{{ $t('who_we_are')}}</h4>
                <h3>
                  {{ aboutUs.about_title }}
                </h3>
              </div>
              <p>
                {{ aboutUs.about_description }}
              </p>
              <router-link to="/about" class="btn" exact>
                <span>{{ $t('more') }}</span>
              </router-link>
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </section>
    <!-- End About-h -->
  </template>
  
  <script>
  import { ApolloQuery } from 'vue-apollo';
  import gql from 'graphql-tag';
  
  export default {
    components: {
      ApolloQuery,
    },
    data() {
      return {
        aboutUs: [], // Initialize with an empty array
      };
    },
    created() {
      this.$apollo
        .query({
          query: gql`
            query GetAboutUs {
              aboutUs {
                about_title
                about_description
                about_image_back_url
                about_image_url
              }
            }
          `,
        })
        .then(response => {
          this.aboutUs = response.data.aboutUs;
        })
        .catch(error => {
          console.error('Error fetching aboutUs:', error);
        });
    },
    // ... other component options
  };
  </script>
  