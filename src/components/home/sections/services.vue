<template>
    <!-- Start Services-h -->
    <section class="services-h">
        <div class="container">
            <div class="row">

                <!-- Col -->
                <div class="col-md-12">
                    <div class="text-serv">
                        <div class="title title-center">
                            <h4 class="sub-title">{{ $t('What_we_can') }}</h4>
                            <h3>{{ $t('services_help')}}</h3>
                        </div>
                    </div>
                </div>
                <!-- /Col -->


                <!-- Col -->
                <div class="col-md-12">
                    <div class="services-inner">
                        <div ref="swiper" class="swiper services-slider">
                            <div class="swiper-wrapper">
                                <div  class="swiper-slide" v-for="service in services" :key="service.id">
                                    <Items 
              :image-url="service.imageUrl"
                :icon-url="service.iconUrl" 
                :title="service.title" 
                :small_description="service.small_description"
                :id="service.id" />
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
import { Swiper, Navigation, Pagination, Autoplay, Loop } from 'swiper';
import Items from '@/components/services/Items.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination, Autoplay, Loop]);
export default {
    name: 'SwiperCarousel',
    components: {
        ApolloQuery,
        Items,
        Swiper,
    },
    mounted() {
        this.initSwiper();
    },
    methods:{
        initSwiper() {
        this.swiper = new Swiper('.services-slider', {
            loop: true, 
            autoplay: {
            delay: 3000,
            },
            speed: 1000,
            slidesPerView: 1.6,
            spaceBetween: 10,
            modules: [Navigation, Pagination, Autoplay],
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
        });
        },
    },
    beforeDestroy() {
        // Destroy the Swiper instance when the component is about to be destroyed
        if (this.swiper) {
        this.swiper.destroy();
        }
    },
    data() {
        return {
            services: [],
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
                    query GetServices {
                        services{
                            data{
                                id
                                title
                                active
                                iconUrl
                                imageUrl
                            }
                        }
                    }
                `,
            })
            .then(response => {
                this.services = response.data.services.data;
                this.initSwiper();
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    },
};
</script>