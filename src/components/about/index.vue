<template>
    <main class="main-content">
        <breadCrumb />

        <!-- Start About-h -->
        <section class="about-h about-page body-inner">
            <div class="container">
                <div class="row justify-content-between align-items-center">

                    <!-- Col -->
                    <div class="col-md-5">
                        <div class="mil-collage-3 mil-appearance">
                            <div class="mil-image-1 mil-appearance">
                                <div class="mil-just-image mil-image-square">
                                    <img :src="aboutUs.about_image_url" :alt="aboutUs.about_title" class="mil-scale-img" data-value-1="1" data-value-2="1.2" style="object-position: top left">
                                </div>
                            </div>
                            <div class="mil-image-2 mil-appearance">
                                <div class="mil-just-image mil-image-square">
                                    <img :src="aboutUs.about_image_back_url" :alt="aboutUs.about_title">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="text-about">
                            <div class="title">
                                <h4 class="sub-title">{{ $t('who_we_are')}}</h4>
                                <h3>
                                    {{ aboutUs.about_title }}
                                </h3>
                            </div>
                            <p>
                                {{ aboutUs.about_description }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-h -->

        <!-- Start About-h -->
        <section class="about-h about-page body-inner">
            <div class="container">
                <div class="row justify-content-between align-items-center">

                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="text-about">
                            <div class="title">
                                <h3>  {{ aboutUs.value_title }}</h3>
                            </div>
                            <p>
                                {{ aboutUs.value_description }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-5">
                        <div class="mil-collage-3 mil-appearance">
                            <div class="mil-image-1 mil-appearance">
                                <div class="mil-just-image mil-image-square">
                                    <img :src="aboutUs.mission_image_url" alt="img" class="mil-scale-img" data-value-1="1"
                                        data-value-2="1.2" style="object-position: top left">
                                </div>
                            </div>
                            <div class="mil-image-2 mil-appearance">
                                <div class="mil-just-image mil-image-square">
                                    <img :src="aboutUs.vision_image_url" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-h -->

        <!-- Start About-h -->
        <section class="about-h strength-h">
            <div class="container">
                <div class="row justify-content-between">

                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="text-about">
                            <div class="title">
                                <h4 class="sub-title">{{ aboutUs.mission_title }}</h4>
                                <h3>{{ aboutUs.mission_title }}</h3>
                            </div>
                            <p>
                                {{ aboutUs.mission_description }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-6">
                        <div class="text-about">
                            <div class="title">
                                <h4 class="sub-title">{{ aboutUs.vision_title }}</h4>
                                <h3>{{ aboutUs.vision_title }}</h3>
                            </div>
                            <p>
                               {{ aboutUs.vision_description }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-h -->

        <!-- Start About-more -->
        <section class="about-h about-page streng-h about-more">
            <div class="container">
                <div class="row">
                    <!-- Col -->
                    <div class="col-md-12">
                        <div class="title title-center">
                            <h3>{{ $t('our_strength') }}</h3>
                        </div>

                        <div class="tetx-about text-streng">
                            <ul>
                                <li  v-for="item in strength.data" :key="item.id">
                                    <div class="num">{{ item.position }}</div>
                                    <div class="details">
                                        <h3>
                                            {{ item.title }}
                                        </h3>
                                        <p>
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-more -->

        <!-- Start About-more -->
        <section class="about-h about-page prep-h about-more">
            <div class="container">
                <div class="row">
                    <!-- Col -->
                    <div class="col-md-12">
                        <div class="title title-center">
                            <h3>{{ $t('our_priority') }}</h3>
                        </div>
                    </div>
                    <!-- /Col -->
                    <!-- Col -->
                    <div class="col-md-6" v-for="priority in priorities.data" :key="priority.id">
                        <div class="block-exp">
                            <div class="icon">
                                <img :src="priority.imageUrl" alt="#" loading="lazy" />
                            </div>
                            <h3>
                                {{ priority.title }}
                            </h3>
                            <p>
                                {{ priority.description }}
                            </p>
                        </div>
                    </div>
                    <!-- /Col -->

                </div>
            </div>
        </section>
        <!-- End About-more -->

        <!-- Start About-h -->
        <section class="about-h strength-h strength-h2">
            <div class="container">
                <div class="row justify-content-between">

                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="text-about">
                            <div class="title">
                                <h3>{{ $t('priority') }}</h3>
                            </div>
                            <div class="tetx-about text-streng text-small">
                                <ul>
                                    <li>
                                        <h3>
                                            <div class="num">01</div> OPERATION & CENTER OF EXCELLENCE
                                        </h3>
                                        <p>
                                            In many organizations especially banking on sales, call centers, bank
                                            operations, customer services, investment and credit – Alinma Bank &
                                            ALRAJH Bank.
                                        </p>
                                    </li>

                                    <li>
                                        <h3>
                                            <div class="num">02</div> DEVELOPING STRATEGIES, POLICIES, PROCESSES and
                                            STANDARDS
                                        </h3>
                                        <p>
                                            Many projects such as Ersal, Ministry of Islamic Affairs and King
                                            Saudi University.
                                        </p>
                                    </li>

                                    <li>
                                        <h3>
                                            <div class="num">03</div> RESOURCES FORMATION AND DEVELOPMENT
                                        </h3>
                                        <p>
                                            In many areas including Management, OT SCADA and LIMS, GIS and Survey
                                            – SMART Code has a certified institute Graduating yearly more than 500 Trainees
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="text-about">
                            <div class="title">
                                <h3>{{ $t('transformation_journey') }}</h3>
                            </div>
                            <div class="tetx-about text-streng text-small">
                                <ul>
                                    <li>
                                        <h3>
                                            <div class="num">01</div> OPERATION & CENTER OF EXCELLENCE
                                        </h3>
                                        <p>
                                            In many organizations especially banking on sales, call centers, bank
                                            operations, customer services, investment and credit – Alinma Bank &
                                            ALRAJH Bank.
                                        </p>
                                    </li>

                                    <li>
                                        <h3>
                                            <div class="num">02</div> DEVELOPING STRATEGIES, POLICIES, PROCESSES and
                                            STANDARDS
                                        </h3>
                                        <p>
                                            Many projects such as Ersal, Ministry of Islamic Affairs and King
                                            Saudi University.
                                        </p>
                                    </li>

                                    <li>
                                        <h3>
                                            <div class="num">03</div> RESOURCES FORMATION AND DEVELOPMENT
                                        </h3>
                                        <p>
                                            In many areas including Management, OT SCADA and LIMS, GIS and Survey
                                            – SMART Code has a certified institute Graduating yearly more than 500 Trainees
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-4">
                        <div class="text-about">
                            <div class="title">
                                <h3>{{ $t('value_proposition') }}</h3>
                            </div>
                            <div class="tetx-about text-streng text-small">
                                <ul>
                                    <li  v-for="priority in priorities.data" :key="priority.id">
                                        <h3>
                                            <div class="num">{{ priority.position }}</div> {{ priority.title }}
                                        </h3>
                                        <p>
                                            {{ priority.description }}
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-h -->

        <!-- Start About-h -->
        <section class="about-h strength-h strength-h3">
            <div class="container">
                <div class="row justify-content-between">

                    <!-- Col -->
                    <div class="col-md-12">
                        <div class="title title-center">
                            <h4 class="sub-title">{{ $t('company_structures') }}</h4>
                            <h3>{{ $t('company_structures') }}</h3>
                        </div>

                        <div class="img-com">
                            <img :src="aboutUs.company_structure_image" alt="#" />
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End About-h -->

    </main>
</template>

<script>
import breadCrumb from "../breadcrumb/index"
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';

export default {
    name: "About",
    components: {
        ApolloQuery,
        breadCrumb,
    },
    created() {
      this.$apollo
        .query({
          query: gql`
            query GetAboutUs {
                aboutUs {
                    about_title
                    about_image_url
                    about_image_back_url
                    about_description
                    vision_title
                    vision_image_url
                    vision_description
                    mission_title
                    mission_image_url
                    mission_description
                    value_title
                    value_image_url
                    value_description
                    company_structure_image

                }
                strength {
                    data {
                        id
                        title
                        description
                        position
                    }
                }

                priorities {
                    data {
                        id
                        title
                        description
                        imageUrl
                        position
                    }
                }
            }
          `,
        })
        .then(response => {
          
            this.aboutUs = response.data.aboutUs;
            this.strength = response.data.strength;
            this.priorities = response.data.priorities;
        })
        .catch(error => {
          console.error('Error fetching aboutUs:', error);
        });
    },
    data() {
      return {
        aboutUs: [], 
        strength: [], 
        priorities: [], 
      };
    },
    // ... other component options
};
</script>