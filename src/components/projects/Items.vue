<template>
  <router-link :to="`/projects/${slug}`" class="pro-block">
      <div class="block inner">
          <div class="img-block">
              <img :src="imageUrl" :alt="small_description" loading="lazy" />
              <span class="showNow">Show Project</span>
          </div>
          <div class="details">
              <span>{{ position }}</span>
              <h3 class="name">{{ title }}</h3>
          </div>
      </div>
              
    </router-link>
</template>
  
<script>
export default {
  props: [
        'imageUrl', 
        'title', 
        'small_description', 
        'slug',
        'position',
        'project'
    ],
  mounted() {
    console.log('Project Slug:', this.slug);
  },
  methods: {
    viewProject(projectSlug) {
      this.$router.push(`/projects/${projectSlug}`);
    },
  }
};
</script>
