<template>
  <section class="mb-3">
    <b-container>
      <b-row>
        <b-col md="6">
          <b-card>
            <img
              :src="`http://shaikhalamin.com/assets/images/8eb6706e95ce0614e0c8535a21e6b9b5.jpg`"
              class="img-fluid"
              alt="shaikh"
            />
          </b-card>
        </b-col>
        <b-col md="6" class="border-left">
          <h4 class="text-justify ml-3 mb-3 text-dark">
            <span class="border-bottom-3">About</span> Me
          </h4>
          <div class="ml-3 font-15">
            <b-card>
              <p class="font-16">{{ profile.about_info }}</p>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      profile: 'getProfile',
    }),
  },
}
</script>

<style scoped>
.border-bottom-3 {
  border-bottom: 3px solid #17a2b8;
}
.font-16 {
  font-size: 16px;
}
.border-left {
  border-left: 1px solid #dee2e6 !important;
}
</style>
