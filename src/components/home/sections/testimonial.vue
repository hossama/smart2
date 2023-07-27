<template>
    <!-- Start Testimonial-h -->
    <section class="test-h">
        <div class="container">
            <div class="row">
                <!-- Col -->
                <div class="col-md-6">
                    <div class="text-test">
                        <div class="title">
                            <h4 class="sub-title">
                                {{ $t('testimonial_sub') }}
                            </h4>
                            <h3>See Our Clients Motivation</h3>
                        </div>
                        <p>
                            We’re humbled to be working with such a great variety of clients that range from early stage
                            startups to Fortune 500 companies.
                        </p>
                    </div>
                </div>

                <!-- Col -->
                <div class="col-md-6">
                    <div class="test-slider-inner-h">
                        <div ref="swiper" dir="ltr" class="swiper testimonials-slider" :direction="'vertical'">
                            <div class="swiper-wrapper">
                                <div  class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.id">
                                    
                                    <div class="test-block">
                                        <div class="comment-test">
                                            <p>
                                                {{ testimonial.description }}
                                            </p>
                                        </div>
                                        <div class="user-test">
                                            <div class="img">
                                                <img :src="testimonial.imageUrl" alt="#" loading="lazy" />
                                            </div>
                                            <div class="name-user">
                                                <span>
                                                    {{ testimonial.position }}
                                                </span>
                                                <h5>
                                                    {{ testimonial.title }}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
    <!-- End Testimonial-h -->
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Swiper from 'swiper'
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
            loop: true,
            autoplay: {
            delay: 3000,
            },
            centeredSlidesBounds: true,
            spaceBetween: 0,
            slidesPerView: 3,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical',
            height : window.innerHeight,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next.test-nav",
                prevEl: ".swiper-button-prev.test-nav",
            },
            breakpoints: {
                480: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                }
            },
        });
    },
    data() {
        return {
            testimonials: [],
        };
    },
    created() {
  this.$apollo
    .query({
      query: gql`
        query GetTestimonials {
          testimonials {
            data {
              id
              title
              description
              position
              imageUrl
            }
          }
        }
      `,
    })
    .then(response => {
      console.log('Testimonials Data:', response.data.testimonials.data);
      this.testimonials = response.data.testimonials.data;
    })
    .catch(error => {
      console.error('Error fetching testimonials:', error);
    });
},
};
</script>