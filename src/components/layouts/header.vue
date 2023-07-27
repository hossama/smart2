<template>
    <header class="sticky">
        <div class="container">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="head-inner">
                        <div class="logo">
                            <router-link to="/">
                                <img loading="lazy" src="../../assets/images/logo.png" alt="#" />
                            </router-link>
                        </div>
                        <div class="menu-left">
                            <nav>
                                <ul>
                                    <li>
                                        <router-link to="/" class="nav-link" active-class="active" exact href="#">{{
                                            $t('home') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about" class="nav-link" active-class="active" exact href="#">{{
                                            $t('about_us') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/services" class="nav-link" active-class="active" exact href="#">{{
                                            $t('services') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Projects" class="nav-link" active-class="active" exact href="#">{{
                                            $t('projects') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/clients" class="nav-link" active-class="active" exact href="#">{{
                                            $t('clients') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/faq" class="nav-link" active-class="active" exact href="#">{{
                                            $t('faq') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/articles" class="nav-link" active-class="active" exact href="#">{{
                                            $t('blogs') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/how_we_works" class="nav-link" active-class="active" exact
                                            href="#">{{ $t('works') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact" class="nav-link" active-class="active" exact href="#">{{
                                            $t('contact') }}</router-link>
                                    </li>
                                </ul>
                            </nav>
                            <!-- 
                            <a href="#" class="lang" title="#">
                                <i class="fa fa-globe"></i>
                                <span></span>
                            </a> -->

                            <div class="lang-h">
                                <button class="btn-lang">
                                    <i class="fa fa-globe"></i>
                                    {{ $t('language') }}
                                </button>
                                <div class="sub-menu">
                                    <!-- <a class="lang" href="#" v-if="lang == 'ar'"> -->
                                    <a class="lang" href="#">
                                        <span @click="changeLocale('en')">English</span>
                                    </a>

                                    <!-- <a class="lang" href="#" v-else> -->
                                    <a class="lang" href="#" >
                                        <span @click="changeLocale('ar')" class="arabic">عربي</span>
                                    </a>
                                </div>
                            </div>

                            <div id="openMenu">
                                <i class="fal fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>

        <!-- Start Sidebar -->
        <div class="overlay-sidebar"></div>
        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="sidear-close-btn">
                    <i class="fal fa-close"></i>
                </div>
                <div class="sidebar-logo">
                    <router-link to="/" class="logo-sidebar" rel="#">
                                <img loading="lazy" src="../../assets/images/logo.png" alt="#" />
                    </router-link>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <router-link to="/" class="nav-link" active-class="active" exact href="#">
                                {{ $t('home') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="nav-link" active-class="active" exact href="#">
                                {{ $t('about_us') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/services" class="nav-link" active-class="active" exact href="#">
                                {{ $t('services') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/Projects" class="nav-link" active-class="active" exact href="#">
                                {{ $t('projects') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/clients" class="nav-link" active-class="active" exact href="#">
                                {{ $t('clients') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/faq" class="nav-link" active-class="active" exact href="#">
                                {{ $t('faq') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/articles" class="nav-link" active-class="active" exact href="#">
                                {{ $t('blogs') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/how_we_works" class="nav-link" active-class="active" exact href="#">
                                {{ $t('works') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="nav-link" active-class="active" exact href="#">
                                {{ $t('contact') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Sidebar -->
    </header>
</template>


<script>
export default {
    name: "navbar",
    data() {
        const lang = localStorage.getItem("lang") || "en";
        const authToken = localStorage.getItem("authToken");
        return {

            programs: [],
            logo: "",
            variant: "dark",
            authToken: authToken,
            lang: lang,
            scTimer: 0,
            scY: 0,
        };
    },
    methods: {

        async Programs() {

            await this.$http.get('nav-programs').then(res => {
                this.logo = res.data.data.logo.image;
                this.programs = res.data.data.programs;

            }).catch(error => {
                console.log(error.response.data.message)
            })

        },

        changeLocale(local) {
            localStorage.setItem("lang", local);
            //   console.log(localStorage.lang)
            window.location.reload();
        },

        // handleChange(event) {
        //   localStorage.setItem("lang", event.target.value);
        //   window.location.reload();
        // },
    },
    mounted() {
        switch (this.lang) {
            case "ar": {
                import("@/assets/css/style-ar.css");
                break;
            }
            case "en": {
                import("@/assets/css/style-en.css");
                break;
            }
        }
    },
};
</script>