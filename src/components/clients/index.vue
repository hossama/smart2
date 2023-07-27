<template>
  <main class="main-content">
    <breadCrumb />

    <!-- Start Clients-page -->
    <section class="clients-page body-inner">
      <div class="container">
        <div class="row">
          <!-- Col -->
          <div class="col-md-2" v-for="client in clients" :key="client.id">
            <div class="part-block">
              <img :src="client.imageUrl" alt="#" loading="lazy" />
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </section>
    <!-- End Clients-page -->
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
      clients: [], // <-- Declare the property here
    };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
                  query GetClients {
                      clients {
                          data {
                              id
                              imageUrl
                          }
                      }
                  }
              `,
      })
      .then(response => {
        this.clients = response.data.clients.data;
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  },
};
</script>