<template>
  <!-- Start Services-h -->
  <section class="services-h">
    <div class="container">
      <div class="row">

        <!-- Col -->
        <div class="col-md-12">
          <div class="text-serv">
            <div class="title title-center">
              <!-- <h4 class="sub-title">{{ $t('What_we_can') }}</h4> -->
              <h3>{{ $t('articles') }}</h3>
            </div>
          </div>
        </div>
        <!-- /Col -->


        <!-- Col -->
        <div class="col-md-12">
          <div class="services-inner">
            <div ref="swiper" class="swiper services-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="article in displayedArticles" :key="article.id">
                  <Items :date="article.date" :image-url="article.imageUrl" :title="article.title"
                    :small_description="article.small_description" :slug="article.slug" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Col -->
      </div>
    </div>
  </section>
  <!-- End Services-h -->
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Items from '@/components/articles/Items.vue';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: "Articles",
  components: {
    ApolloQuery,
    Swiper,
    Items // Register the Items component
  },
  data() {
    return {
      articles: [],
      currentPage: 1,
      pageSize: 4 // Number of articles per page
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 1000,
      slidesPerView: 1.6,
      spaceBetween: 10,
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination.services-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        480: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      },
    })
  },
  computed: {
    totalArticles() {
      return this.articles.length;
    },
    totalPages() {
      return Math.ceil(this.totalArticles / this.pageSize);
    },
    displayedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.articles.slice(startIndex, endIndex);
    }
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchArticles();
    },
    fetchArticles() {
      this.$apollo
        .query({
          query: gql`
        query GetArticles($page: Int!) {
          articles(page: $page) {
            data {
              id
              title
              date
              small_description
              imageUrl
              slug   
            }
          }
        }
      `,
          variables: {
            page: this.currentPage
          }
        })
        .then((response) => {
          this.articles = response.data.articles.data;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    }
  }
};
</script>