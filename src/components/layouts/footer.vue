<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="footer-inner">
                            <div class="logo-f">
                                <a href="#">
                                    <img :src="aboutUs.logo" alt="#" loading="lazy" />
                                </a>
                            </div>

                            <p>
                                {{ aboutUs.footer }}
                            </p>

                            <div class="s-f">
                                <a :href="aboutUs.facebook" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a :href="aboutUs.twitter" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a :href="aboutUs.instagram" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a :href="aboutUs.linkedin" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="footer-inner">
                            <h3>{{ $t('office_address') }}</h3>
                            <div class="info-h">
                                <ul>
                                    <li>
                                        <a :href="'mailto:' + aboutUs.email" title="#">
                                            <div class="icon">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <span>
                                                {{ aboutUs.email }}
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="'tel:' + aboutUs.phone" title="#">
                                            <div class="icon">
                                                <i class="fa fa-phone"></i>
                                            </div>
                                            <span>
                                                <u>
                                                    {{ aboutUs.phone }}
                                                </u>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="#">
                                            <div class="icon">
                                                <i class="fa fa-map-marker-alt"></i>
                                            </div>
                                            <span>
                                                {{ aboutUs.address }}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="footer-inner">
                            <h3>{{ $t('twitter') }}</h3>
                            <div id='block-boxes-twitter-feed-box'>
                                <a class="twitter-timeline" data-theme="light" data-tweet-limit="5" data-width="500"
                                    href="#">Tweets by richardbranson</a>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </div><!-- /Footer-top -->

        <!-- Footer-bottom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="copy-right">
                            <p>
                                {{ aboutUs.copyrights }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->
                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="comany-name">
                            {{ $t('companyKod') }}
                            <a href="#" target="_blank">

                            </a>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </div>
        <!-- /Footer-bottom -->
    </footer>
</template>
<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';

export default {
    components: {
        ApolloQuery,
    },
    data() {
        return {
            aboutUs: [], // Initialize with an empty array
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
          query GetAboutUs {
            aboutUs {
                copyrights
                address
                email
                phone
                whatsApp
                facebook
                twitter
                youTube
                linkedIn
                instagram
                logo
                mobile
                footer
            }
          }
        `,
            })
            .then(response => {
                this.aboutUs = response.data.aboutUs;
            })
            .catch(error => {
                console.error('Error fetching aboutUs:', error);
            });
    },
    // ... other component options
};


</script>