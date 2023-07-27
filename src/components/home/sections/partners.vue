<template>
    <!-- Start Partners-h -->
    <section class="partners-h">
        <div class="container">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="title title-center">
                        <h4 class="sub-title">{{ $t('clients') }}</h4>
                        <h3>
                            {{ $t('title_clients') }}
                        </h3>
                    </div>

                    <div class="clients-inner">
                        <div ref="swiper" class="swiper clients-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="client in clients" :key="client.id">
                                    <div class="part-block">
                                        <img :src="client.imageUrl" alt="#" loading="lazy" />
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
    <!-- End Partners-h -->
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
            loop: true,
            autoplay: {
            delay: 3000,
            },
            speed: 1000,
            slidesPerView: 1.6,
            spaceBetween: 10,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination.clients-pagination',
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
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1180: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                }
            },
        })
    },
    data() {
        return {
            clients: [],
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
                    query GetClients {
                        clients{
                            data{
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