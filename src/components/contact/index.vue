<template>
    <main class="main-content">
        <breadCrumb />
        
        <!-- Start Contact-page -->
        <section class="contact-page body-inner">
            <div class="container">
                <div class="row g-0 align-items-center justify-content-center">
                    <div class="col-xl-4 col-lg-4 col-md-5 col-12">
                        <div class="contact-box">
                            <div class="contact-box-circle">
                                <span>{{ $t('O') }}</span>
                                <span>{{ $t('R') }}</span>
                            </div>
                            <h2 class="contact-box__title">{{ $t('Contact') }} <br> {{ $t('Directly') }}</h2>
                            <div class="contact-box__info-list">
                                <ul>
                                    <li>
                                        <a href="tel:4805550103">
                                            <i class="fal fa-phone-alt"></i> 
                                            (480) 555-0103
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="fal fa-map-marker-alt"></i> 
                                            Canberra, Australia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:michelle.rivera@example.com">
                                            <i class="fal fa-globe"></i>
                                            help@example.com
                                        </a>
                                    </li>            
                                </ul>
                            </div>
                            <div class="contact-box__social">
                                <ul>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-7 col-12">
                        <div class="postbox__comment-form contact-wrapper">
                            <h3 class="postbox__comment-form-title">{{ $t('send_mesg') }}</h3>
                            <div class="form-contact">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" :placeholder="$t('name_input')" v-model="name" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" :placeholder="$t('email_input')" v-model="email" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea class="form-control" :placeholder="$t('company_input')" v-model="message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <button class="btn btn-form" type="submit">
                                                    <span>{{ $t('send_btn') }}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Contact-page -->

        <section class="map-con">
            <div class="map-inner">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14934640.335524341!2d36.02972267807318!3d23.955049577072163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1680395508087!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        
    </main>

</template>

<script>
import axios from "axios";
import breadCrumb from "../breadcrumb/index"
export default {
  name: 'App',
  components: {
    breadCrumb,
  },
  
  data() {
    return {
      name: "",
      phone: "",
      jobTitle: "",
      companyName: "",
      message: "",
      showErrorMessage: false,
      showSuccessMessage: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name !== "" &&
        this.phone !== "" &&
        this.jobTitle !== "" &&
        this.companyName !== "" &&
        this.message !== ""
      );
    },
  },
  methods: {
    submitForm() {
      if (!this.isFormValid) {
        this.showErrorMessage = true;
        return;
      }

      // Perform any additional validation here before sending the form data
      // Assuming you're using an HTTP library like Axios, send the data to your backend
      // Replace the URL and payload with your actual API endpoint and data structure
      axios
        .post("https://smart-admin.kodsolutions.net/public/graphql", {
          name: this.name,
          phone: this.phone,
          jobTitle: this.jobTitle,
          companyName: this.companyName,
          message: this.message,
        })
        .then(() => {
          // Form submission success
          this.showErrorMessage = false;
          // Reset form fields
          this.name = "";
          this.phone = "";
          this.jobTitle = "";
          this.companyName = "";
          this.message = "";
          // Display success message
          this.showSuccessMessage = true;
        })
        .catch(() => {
          // Form submission error
          this.showErrorMessage = true;
        });
    },
  },
};
</script>
  
<style scoped>
.success-message {
    color: green;
}

.error-message {
    color: red;
}</style>
  
  