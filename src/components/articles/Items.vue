<template>
    <div class="blog-block">
      <div class="img-block">
        <a href="#" class="img">
          <img :src="imageUrl" :alt="title" />
        </a>
      </div>
      <div class="details">
        <div class="postbox__meta">
          <span>
            <a href="#">
              <i class="fal fa-clock"></i>
              {{ date }}
            </a>
          </span>
        </div>

        <a href="#" class="name">
          {{ title }}
        </a>
        <p>
          {{ small_description }}
        </p>

        <!-- Remove the router-link and use the viewArticle method instead -->
        <div class="more-btn" @click="viewArticle(slug)">
          <div class="icon-btn">
            <img src="@/assets/images/arrow.svg" alt="#" loading="lazy" />
          </div>
          <span>{{ $t('read_more') }}</span>
        </div>
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
        'article'
    ],
  mounted() {
    console.log('Article Slug:', this.slug);
  },
  methods: {
    viewArticle(articleSlug) {
      this.$router.push(`/articles/${articleSlug}`);
    },
  }
};
</script>
