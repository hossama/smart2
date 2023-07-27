<template>
    <!-- Start About-h -->
    <section class="about-h vision-h">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <!-- Col -->
                    <div class="col-md-12">
                        <div class="text-about text-vision">
                            <div class="overlay-img">
                                <img :src="aboutUs.vision_image_url" :alt="aboutUs.vision_title" />
                            </div>
                            <div class="title">
                                <h3>
                                    {{ aboutUs.vision_title }}
                                </h3>
                                <p>
                                    {{ aboutUs.vision_description }}
                                </p>
                            </div>
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
            aboutUs{
                vision_title
                vision_description
                vision_image_url
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