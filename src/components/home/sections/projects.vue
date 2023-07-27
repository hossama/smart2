<template>
    <!-- Start Projects-h -->
    <section class="projects-h">
        <div class="container-fluid">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="title title-center">
                        <h3>{{ $t('our_projects') }}</h3>
                    </div>
                    <div ref="swiper" class="swiper projects-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="project in projects" :key="project.id">
                                <router-link :to="`/projects/${project.slug}`" class="pro-block">
                                    <Items :date="project.date"
                    :image-url="project.imageUrl" :title="project.title" :small_description="project.small_description"
                    :slug="project.slug" />
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
    <!-- End Projects-h -->
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Items from "@/components/projects/Items.vue"; // Import the Items component

export default {
    name: "Projects",
    components: {
        ApolloQuery,
        Items,
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
                el: '.swiper-pagination.projects-pagination',
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
    data() {
        return {
            projects: [],
        };
    },
    computed: {
        totalProjects() {
            return this.projects.length;
        },
        totalPages() {
            return Math.ceil(this.totalProjects / this.pageSize);
        },
        displayedProjects() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.projects.slice(startIndex, endIndex);
        }
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
            this.fetchProjects();
        },
        fetchProjects() {
            this.$apollo
                .query({
                    query: gql`
        query GetProjects {
          projects {
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
                    this.projects = response.data.projects.data;
                })
                .catch((error) => {
                    console.error("Error fetching projects:", error);
                });
        }
    }
};

// export default {
//     components: {
//         ApolloQuery,
//         Swiper,
//     },
//     mounted() {
//         new Swiper(this.$refs.swiper, {
//             loop: true,
//             speed: 1000,
//             slidesPerView: 1.6,
//             spaceBetween: 10,
//             modules: [Navigation, Pagination],
//             pagination: {
//                 el: '.swiper-pagination.projects-pagination',
//             },
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             scrollbar: {
//                 el: '.swiper-scrollbar',
//             },
//             breakpoints: {
//                 480: {
//                     slidesPerView: 1.2,
//                     spaceBetween: 10
//                 },
//                 767: {
//                     slidesPerView: 2,
//                     spaceBetween: 10
//                 },
//                 1180: {
//                     slidesPerView: 3,
//                     spaceBetween: 10,
//                 }
//             },
//         })
//     },
//     data() {
//         return {
//             projects: [],
//         };
//     },
//     created() {
//         this.$apollo
//             .query({
//                 query: gql`
//                     query GetProjects {
//                         projects{
//                             data{
//                                 id
//       title
//       description
//       small_description
//       position
//       imageUrl
//                             }
//                         }
//                     }
//                 `,
//             })
//             .then(response => {
//                 this.projects = response.data.projects.data;
//             })
//             .catch(error => {
//                 console.error('Error fetching projects:', error);
//             });
//     },
// };
</script>