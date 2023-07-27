<template>
    <!-- Start New-project-h -->
    <section class="new-project-h">
        <div class="overlay-img">
            <img src="@/assets/images/20.jpg" alt="#" />
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-4">
                    <div class="text-about text-vision">
                        <div class="title">
                            <h3>
                                {{ $t('newProject_title') }}
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-7 col-12">
                    <div class="postbox__comment-form contact-wrapper">
                        <h3 class="postbox__comment-form-title">{{ $t('send_mesg') }}</h3>
                        <div class="form-contact">
                            <form @submit.prevent="submitForm">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" :placeholder="$t('name_input')"
                                                v-model="name" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <input type="tel" class="form-control" :placeholder="$t('phone_input')"
                                                v-model="phone" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" :placeholder="$t('job_input')"
                                                v-model="jobTitle" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" :placeholder="$t('company_input')"
                                                v-model="companyName" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control" :placeholder="$t('textarea_input')"
                                                v-model="message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <button class="btn btn-form" type="submit" :disabled="!isFormValid">
                                                <span>{{ $t('send_btn') }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div v-if="showErrorMessage" class="error-message">
                                Please fill in all the fields.
                            </div>
                            <div v-if="showSuccessMessage" class="success-message">
                                Thank you for contacting us!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End New-project-h -->
</template>
  
<script>
import axios from "axios";

export default {
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
  