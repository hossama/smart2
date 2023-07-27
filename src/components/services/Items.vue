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
          <!-- <router-link :to="`/services/${id}`"> -->
          <router-link :to="`/services/${id}`">
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
      <router-link class="more-btn" :to="`/services/${id}`">
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
  name:"Items",
  props: [
    'imageUrl', 
    'title', 
    'small_description', 
    'id',
  ],
  mounted() {
    console.log('Service Slug:', this.id);
  },
  methods: {
    // You can remove the 'viewServices' method, as it's no longer needed.
  }
};
</script>
