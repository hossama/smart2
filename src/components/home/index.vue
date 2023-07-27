<template>
    <main class="main-content">
        <BannerTop></BannerTop>

        <AboutUs></AboutUs>

        <Vision></Vision>

        <Services></Services>

        <WhyChoose></WhyChoose>

        <Partners />

        <Projects />

        <Counter />
        
        <Blogs />

        <NewProjects />
        
        <Testimonial />
        
    </main>
</template>


<script>
import BannerTop from "./sections/banner-top"
import AboutUs from "./sections/aboutUs"
import Vision from "./sections/vision"
import Services from "./sections/services"
import WhyChoose from "./sections/why-choose"
import Partners from "./sections/partners"
import Projects from "./sections/projects"
import Counter from "./sections/counter"
import NewProjects from "./sections/newProjects"
import Testimonial from "./sections/testimonial"
import Blogs from "./sections/blogs"

export default {
    name: 'App',
    components: {
        BannerTop,
        AboutUs,
        Vision,
        Services,
        WhyChoose,
        Partners,
        Projects,
        Counter,
        Blogs,
        NewProjects,
        Testimonial,
    },
    // mounted:function(){
    //         this.method1() //method1 will execute at pageload
    // },
    // methods: {
    //     methods:{
    //         method1:function(){
    //             console.log(this.localStorage.getItem("lang"));
    //         }
    //  },
    // }
}

</script>