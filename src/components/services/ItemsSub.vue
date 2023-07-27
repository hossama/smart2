<template>
  <div class="col-md-4">
    <div class="service-item-three text-center">
      <div class="service-item-three__img">
        <!-- Use the 'imageUrl' prop here -->
        <img :src="imageUrl" :alt="small_description" />
      </div>

      <div class="service-item-three__content">
        <h4 class="tp-service-sm-title">
          <!-- Use the 'title' prop here -->
          <router-link :to="{path: '/services/', params: {id:slug }}">
            {{ title }}
          </router-link>
        </h4>
        <div class="des">
          <p>
            <!-- Use the 'small_description' prop here -->
            {{ small_description }}
          </p>
        </div>
      </div>

      <!-- Use the 'slug' prop to navigate to the service details page -->
      <router-link class="more-btn" :to="`/services/sub_services/${slug}`">
        <div class="icon-btn">
          <img src="@/assets/images/arrow.svg" alt="#" loading="lazy" />
        </div>
        <span>Read More</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
        'imageUrl', 
        'date', 
        'title', 
        'small_description', 
        'slug',
        'service'
    ],
  mounted() {
    console.log('service Slug:', this.slug);
  },
  methods: {
    viewservice(serviceSlug) {
      this.$router.push(`/services/sub_services/${serviceSlug}`);
    },
  }
};
</script>
