<template>
    <div class="bg-banner-top">
        <section class="banner-h">

            <div class="banner-inner">
                <div ref="swiper" class="swiper banner-slider">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                            <div class="overlay-img">
                                <img :src="slider.imageUrl" :alt="slider.description" class="mil-photo">
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="text-banner">
                                            <div class="gt-shape"></div>
                                            <div class="text-banner-in">
                                                <h4 class="sub-title">{{ $t('welcome') }}</h4>
                                                <h1>
                                                    {{ slider.title }}
                                                </h1>
                                                <p>
                                                    {{ slider.description }}
                                                </p>
                                                <a href="#" class="btn">
                                                    <span>{{ $t('contact_today') }}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination banner-pagination"></div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
    components: {
        ApolloQuery,
        Swiper,
    },
    mounted() {
        new Swiper(this.$refs.swiper, {
            loop: false,
            autoplay: {
            delay: 3000,
            },
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 0,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination.banner-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },
    data() {
        return {
            sliders: [], // Initialize with an empty array
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
          query GetSliders {
            sliders {
              data {
                id
                description
                imageUrl
                title
              }
            }
          }
        `,
            })
            .then(response => {
                this.sliders = response.data.sliders.data;
                // console.log(response)
            })
            .catch(error => {
                console.error('Error fetching sliders:', error);
            });
    },
    // ... other component options
};
</script>