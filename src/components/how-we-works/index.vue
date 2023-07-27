<template>
  
    <main class="main-content">
      <breadCrumb />

      <!-- Start About-h -->
      <section class="steps-h steps-page body-inner">
        <div class="container">
          <div class="row justify-content-between">
            <!-- Col -->
            <div class="col-md-12">
              <div class="allSteps">
                <!-- Item -->
                <div class="item" v-for="how_we_work in how_we_works" :key="how_we_work.id">
                  <div class="step-block">
                    <div class="icon">
                      <img :src="how_we_work.imageUrl" alt="#" loading="lazy">
                    </div>

                    <div class="details">
                      <h4>Step 1</h4>
                      <h3>{{ how_we_work.title }}</h3>
                      <p>{{ how_we_work.description }}</p>
                    </div>
                  </div>
                </div>
                <!-- /Item -->
              </div>
            </div>
            <!-- /Col -->
          </div>
        </div>
      </section>
      <!-- End About-h -->
    </main>
</template>

<script>
import breadCrumb from "../breadcrumb/index"
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';

export default {
  components: {
    breadCrumb,
    ApolloQuery,
  },
  data() {
    return {
      how_we_works: [], // <-- Declare the property here
    };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
                  query GetHow_we_works {
                      how_we_works {
                          data {
                              id
                              position
                              description
                              title
                              imageUrl
                          }
                      }
                  }
              `,
      })
      .then(response => {
        this.how_we_works = response.data.how_we_works.data;
      })
      .catch(error => {
        console.error('Error fetching how_we_works:', error);
      });
  },
};
</script>
