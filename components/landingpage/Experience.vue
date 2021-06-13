<template>
  <section class="mb-3">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h4 class="mb-4 mt-4 text-center">
            <span class="border-bottom-3"
              >Experience - ({{ calculateExperience }}) Years</span
            >
          </h4>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { calculateTotalYear } from '~/helpers/helpers.js'
export default {
  computed: {
    ...mapGetters({
      profile: 'getProfile',
    }),
    calculateExperience() {
      return calculateTotalYear(this.profile.experiences)
    },
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
